import { bus, EventsClient, EventHandler } from 'modloader64_api/EventHandler';
import { IModLoaderAPI, ICore } from 'modloader64_api/IModLoaderAPI';
import { IRomHeader } from 'modloader64_api/IRomHeader';
import * as API from './API/Imports';
import * as CORE from './src/Imports';

// ##################################################################
// ##  Primary-Classes
// ##################################################################

export class BanjoTooie implements ICore, API.IBTCore {
    heap_start: number = -1;
    heap_size: number = -1;
    header = 'NB7';
    ModLoader: IModLoaderAPI = {} as IModLoaderAPI;
    eventTicks: Map<string, Function> = new Map<string, Function>();
    rom_header!: IRomHeader;

    camera!: API.ICamera;
    player!: API.IPlayer;
    runtime!: API.IRuntime;
    save!: API.ISaveContext;
    version!: API.GameVersion;

    commandBuffer!: CORE.CommandBuffer;
    payloads: string[] = new Array<string>();

    // Utility values
    private curScn: number = 0;

    isPlaying(): boolean {
        return (
            this.runtime.get_profile_hovering() === API.ProfileType.Title &&
            this.runtime.get_profile_selected() !== API.ProfileType.Title
        );
    }

    preinit(): void {
        let vStr: string = '';
        switch (this.rom_header.country_code) {
            case 'U':
                this.version = API.GameVersion.AUS_1_0;
                CORE.VersionHandler.load_aus_1_0();
                vStr = 'U0';
                break;
            case 'J':
                this.version = API.GameVersion.JP_1_0;
                CORE.VersionHandler.load_jp_1_0();
                vStr = 'J0';
                break;
            case 'P':
                this.version = API.GameVersion.PAL_1_0;
                CORE.VersionHandler.load_pal_1_0();
                vStr = 'P0';
                break;
            case 'E':
            default:
                this.version = API.GameVersion.USA_1_0;
                CORE.VersionHandler.load_usa_1_0();
                vStr = 'E0';
                break;
        }

		// Payload injection
        this.payloads.push(__dirname + '/src/asm/' + vStr + '/Multiplayer.payload');

		// Version independant globals
        global.ModLoader[API.AddressType.PTR_TABLE] = 0xf00000;
        global.ModLoader[API.AddressType.CMD_BUFFER] = 0xf01000;
        global.ModLoader[API.AddressType.PUPPET_INFO] = 0xf01200;
        global.ModLoader[API.AddressType.PINFO_SIZE] = 8;
    }
    init(): void {}
    postinit(): void {
        this.camera = new CORE.Camera(this.ModLoader.emulator);
        this.player = new CORE.Player(this.ModLoader.emulator);
        this.runtime = new CORE.Runtime(this.ModLoader.emulator);
        this.save = new CORE.SaveContext(this.ModLoader.emulator);
        this.commandBuffer = new CORE.CommandBuffer(this.ModLoader.emulator);
    }

    onTick(): void {
        if (!this.isPlaying()) return;

        this.detect_map();

        // Tick stuff
        this.commandBuffer.onTick();
        this.eventTicks.forEach((value: Function, key: string) => {
            value();
        });
    }

    @EventHandler(EventsClient.ON_INJECT_FINISHED)
    onCore_InjectFinished(evt: any) {
        // Inject payloads
        for (let i = 0; i < this.payloads.length; i++) {
            this.ModLoader.payloadManager.parseFile(this.payloads[i]);
        }
    }

    private detect_map() {
        let scn = this.runtime.current_scene;
        if (scn === this.curScn) return;

        this.curScn = scn;
        bus.emit(API.BtEvents.ON_SCENE_CHANGE, scn);
    }
}

export default BanjoTooie;
