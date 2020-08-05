import { EventHandler, EventsClient } from 'modloader64_api/EventHandler';
import {
    IModLoaderAPI,
    ICore,
    ModLoaderEvents,
} from 'modloader64_api/IModLoaderAPI';
import { IRomHeader } from 'modloader64_api/IRomHeader';
import { VersionHandler } from './src/VersionHandler';
import IMemory from 'modloader64_api/IMemory';
import * as API from './API/Imports';

// ##################################################################
// ##  Sub-Classes
// ##################################################################

export class GameFlags extends API.BufferPtrObj implements API.IBuffered {
    constructor(emu: IMemory) {
        super(emu, global.ModLoader[API.AddressType.SAVE_GAME_FLAGS], 0xb0);
    }
}

export class GlobalFlags extends API.BufferPtrObj implements API.IBuffered {
    constructor(emu: IMemory) {
        super(emu, global.ModLoader[API.AddressType.SAVE_GLOBAL_FLAGS], 0x10);
    }
}

// ##################################################################
// ##  Primary-Classes
// ##################################################################

export class Player extends API.BaseObj implements API.IPlayer {
    private consumable_base_addr: number = global.ModLoader[API.AddressType.RT_CONSUMABLE_BASE];
    private consumable_ptr_addr: number = global.ModLoader[API.AddressType.RT_CONSUMABLE_PTR];

    get blue_eggs(): number {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            return this.emulator.rdramRead16(this.consumable_base_addr + API.ConsumableType.BLUE_EGGS * 0x0C);
        }
        return 0;
    }

    set blue_eggs(value: number) {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            this.emulator.rdramWrite16(consumablesBlock + API.ConsumableType.BLUE_EGGS * 2, value ^ 0x27BD);
        }
    }

    get fire_eggs(): number {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            return this.emulator.rdramRead16(this.consumable_base_addr + API.ConsumableType.FIRE_EGGS * 0x0C);
        }
        return 0;
    }

    set fire_eggs(value: number) {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            this.emulator.rdramWrite16(consumablesBlock + API.ConsumableType.FIRE_EGGS * 2, value ^ 0x0C03);
        }
    }

    get ice_eggs(): number {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            return this.emulator.rdramRead16(this.consumable_base_addr + API.ConsumableType.ICE_EGGS * 0x0C);
        }
        return 0;
    }

    set ice_eggs(value: number) {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            this.emulator.rdramWrite16(consumablesBlock + API.ConsumableType.ICE_EGGS * 2, value ^ 0x0002);
        }
    }

    get grenade_eggs(): number {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            return this.emulator.rdramRead16(this.consumable_base_addr + API.ConsumableType.GRENADE_EGGS * 0x0C);
        }
        return 0;
    }

    set grenade_eggs(value: number) {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            this.emulator.rdramWrite16(consumablesBlock + API.ConsumableType.GRENADE_EGGS * 2, value ^ 0x01EE);
        }
    }

    get cw_eggs(): number {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            return this.emulator.rdramRead16(this.consumable_base_addr + API.ConsumableType.CW_EGGS * 0x0C);
        }
        return 0;
    }

    set cw_eggs(value: number) {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            this.emulator.rdramWrite16(consumablesBlock + API.ConsumableType.CW_EGGS * 2, value ^ 0x2401);
        }
    }

    get proximity_eggs(): number {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            return this.emulator.rdramRead16(this.consumable_base_addr + API.ConsumableType.PROXIMITY_EGGS * 0x0C);
        }
        return 0;
    }

    set proximity_eggs(value: number) {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            this.emulator.rdramWrite16(consumablesBlock + API.ConsumableType.PROXIMITY_EGGS * 2, value ^ 0x15E0);
        }
    }

    get red_feathers(): number {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            return this.emulator.rdramRead16(this.consumable_base_addr + API.ConsumableType.RED_FEATHERS * 0x0C);
        }
        return 0;
    }

    set red_feathers(value: number) {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            this.emulator.rdramWrite16(consumablesBlock + API.ConsumableType.RED_FEATHERS * 2, value ^ 0x1000);
        }
    }

    get gold_feathers(): number {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            return this.emulator.rdramRead16(this.consumable_base_addr + API.ConsumableType.GOLD_FEATHERS * 0x0C);
        }
        return 0;
    }

    set gold_feathers(value: number) {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            this.emulator.rdramWrite16(consumablesBlock + API.ConsumableType.GOLD_FEATHERS * 2, value ^ 0x3C18);
        }
    }

    get glowbos(): number {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            return this.emulator.rdramRead16(this.consumable_base_addr + API.ConsumableType.GLOWBOS * 0x0C);
        }
        return 0;
    }

    set glowbos(value: number) {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            this.emulator.rdramWrite16(consumablesBlock + API.ConsumableType.GLOWBOS * 2, value ^ 0x0003);
        }
    }

    get empty_honeycombs(): number {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            return this.emulator.rdramRead16(this.consumable_base_addr + API.ConsumableType.EMPTY_HONEYCOMBS * 0x0C);
        }
        return 0;
    }

    set empty_honeycombs(value: number) {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            this.emulator.rdramWrite16(consumablesBlock + API.ConsumableType.EMPTY_HONEYCOMBS * 2, value ^ 0x3C0C);
        }
    }

    get cheato_pages(): number {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            return this.emulator.rdramRead16(this.consumable_base_addr + API.ConsumableType.CHEATO_PAGES * 0x0C);
        }
        return 0;
    }

    set cheato_pages(value: number) {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            this.emulator.rdramWrite16(consumablesBlock + API.ConsumableType.CHEATO_PAGES * 2, value ^ 0x0319);
        }
    }

    get burgers(): number {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            return this.emulator.rdramRead16(this.consumable_base_addr + API.ConsumableType.BURGERS * 0x0C);
        }
        return 0;
    }

    set burgers(value: number) {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            this.emulator.rdramWrite16(consumablesBlock + API.ConsumableType.BURGERS * 2, value ^ 0x858C);
        }
    }

    get fries(): number {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            return this.emulator.rdramRead16(this.consumable_base_addr + API.ConsumableType.FRIES * 0x0C);
        }
        return 0;
    }

    set fries(value: number) {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            this.emulator.rdramWrite16(consumablesBlock + API.ConsumableType.FRIES * 2, value ^ 0x03E0);
        }
    }

    get tickets(): number {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            return this.emulator.rdramRead16(this.consumable_base_addr + API.ConsumableType.TICKETS * 0x0C);
        }
        return 0;
    }

    set tickets(value: number) {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            this.emulator.rdramWrite16(consumablesBlock + API.ConsumableType.TICKETS * 2, value ^ 0x27BD);
        }
    }

    get doubloons(): number {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            return this.emulator.rdramRead16(this.consumable_base_addr + API.ConsumableType.DOUBLOONS * 0x0C);
        }
        return 0;
    }

    set doubloons(value: number) {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            this.emulator.rdramWrite16(consumablesBlock + API.ConsumableType.DOUBLOONS * 2, value ^ 0x0C03);
        }
    }

    get gold_idols(): number {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            return this.emulator.rdramRead16(this.consumable_base_addr + API.ConsumableType.GOLD_IDOLS * 0x0C);
        }
        return 0;
    }

    set gold_idols(value: number) {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            this.emulator.rdramWrite16(consumablesBlock + API.ConsumableType.GOLD_IDOLS * 2, value ^ 0x3C05);
        }
    }

    get beans(): number {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            return this.emulator.rdramRead16(this.consumable_base_addr + API.ConsumableType.BEANS * 0x0C);
        }
        return 0;
    }

    set beans(value: number) {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            this.emulator.rdramWrite16(consumablesBlock + API.ConsumableType.BEANS * 2, value ^ 0x0002);
        }
    }

    get fish(): number {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            return this.emulator.rdramRead16(this.consumable_base_addr + API.ConsumableType.FISH * 0x0C);
        }
        return 0;
    }

    set fish(value: number) {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            this.emulator.rdramWrite16(consumablesBlock + API.ConsumableType.FISH * 2, value ^ 0x85E3);
        }
    }

    get eggs(): number {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            return this.emulator.rdramRead16(this.consumable_base_addr + API.ConsumableType.EGGS * 0x0C);
        }
        return 0;
    }

    set eggs(value: number) {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            this.emulator.rdramWrite16(consumablesBlock + API.ConsumableType.EGGS * 2, value ^ 0x0040);
        }
    }

    get ice_keys(): number {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            return this.emulator.rdramRead16(this.consumable_base_addr + API.ConsumableType.ICE_KEYS * 0x0C);
        }
        return 0;
    }

    set ice_keys(value: number) {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            this.emulator.rdramWrite16(consumablesBlock + API.ConsumableType.ICE_KEYS * 2, value ^ 0x8FBF);
        }
    }

    get mega_glowbos(): number {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            return this.emulator.rdramRead16(this.consumable_base_addr + API.ConsumableType.MEGA_GLOWBOS * 0x0C);
        }
        return 0;
    }

    set mega_glowbos(value: number) {
        let consumablesBlock = this.emulator.dereferencePointer(this.consumable_ptr_addr);
        if (consumablesBlock !== 0) {
            this.emulator.rdramWrite16(consumablesBlock + API.ConsumableType.MEGA_GLOWBOS * 2, value ^ 0x1461);
        }
    }

    exists(): boolean {
        return false; //!(this.emulator.rdramRead32(this.instance) === 0x0000);
    }
}

export class Runtime extends API.BaseObj implements API.IRuntime {
    private plyr_ptr_addr: number = global.ModLoader[API.AddressType.RT_PLYR_PTR];
    private plyr_ptr_index: number = global.ModLoader[API.AddressType.RT_PLYR_PTR_INDEX];
    private obj_array_ptr_addr: number = global.ModLoader[API.AddressType.RT_OBJ_ARRAY_PTR];
    private camera_ptr_addr: number = global.ModLoader[API.AddressType.RT_CAMERA_PTR];
    private icon_addr: number = global.ModLoader[API.AddressType.RT_ICON_ADDR];
    private jinjo_base_addr: number = global.ModLoader[API.AddressType.RT_JINJO_BASE_ADDR];

    private prof_hover_addr: number = global.ModLoader[API.AddressType.RT_PROF_HOVER];
    private prof_select_addr: number = global.ModLoader[API.AddressType.RT_PROF_SELECT];
    private map_addr: number = global.ModLoader[API.AddressType.RT_CURRENT_MAP];
    private map_trigger_addr: number = global.ModLoader[API.AddressType.RT_MAP_TRIGGER];
    private map_trigger_target_addr: number = global.ModLoader[API.AddressType.RT_MAP_TRIGGER_TARGET];
    private map_destination_addr: number = global.ModLoader[API.AddressType.RT_MAP_DESTINATION];
    private dcw_location_addr: number = global.ModLoader[API.AddressType.RT_DCW_LOCATION];

    get_profile_hovering(): API.ProfileType { return this.emulator.rdramReadS8(this.prof_hover_addr); }
    get_profile_selected(): API.ProfileType { return this.emulator.rdramReadS8(this.prof_select_addr); }

    //--------------
    //-- Objects --
    //--------------
    getPlayerObject(): number {
        let playerPtrIndex: number = this.emulator.rdramRead8(this.plyr_ptr_index);
        return this.emulator.dereferencePointer(this.plyr_ptr_addr + 4 * playerPtrIndex);
    }

    getCameraObject(): number {
        let cameraPointerPtr: number = this.emulator.dereferencePointer(this.camera_ptr_addr);

        if (cameraPointerPtr !== 0) {
            return this.emulator.dereferencePointer(cameraPointerPtr + 4);
        }
        return 0;
    }

    getPlayerSubObject(index: number): number {
        let player: number = this.getPlayerObject();

        if (player !== 0) {
            return this.emulator.dereferencePointer(player + index);
        } else {
            return 0;
        }
    }

    getCameraSubObject(index: number): number {
        let camera: number = this.getCameraObject();

        if (camera !== 0) {
            return this.emulator.dereferencePointer(camera + index);
        } else {
            return 0;
        }
    }

    //--------------
    //-- Position --
    //--------------
    get XPosition(): number {
        let positionObject: number = this.getPlayerSubObject(0xe4);

        if (positionObject !== 0) {
            return this.emulator.rdramReadF32(positionObject);
        }
        return 0;
    }

    set XPosition(value: number) {
        let positionObject: number = this.getPlayerSubObject(0xe4);

        if (positionObject !== 0) {
            this.emulator.rdramWriteF32(positionObject, value);
            this.emulator.rdramWriteF32(positionObject + 0xc, value);
            this.emulator.rdramWriteF32(positionObject + 0x18, value);
        }
    }

    get YPosition(): number {
        let positionObject: number = this.getPlayerSubObject(0xe4);

        if (positionObject !== 0) {
            return this.emulator.rdramReadF32(positionObject + 0x4);
        }
        return 0;
    }

    set YPosition(value: number) {
        let positionObject: number = this.getPlayerSubObject(0xe4);

        if (positionObject !== 0) {
            this.emulator.rdramWriteF32(positionObject + 0x4, value);
            this.emulator.rdramWriteF32(positionObject + 0x10, value);
            this.emulator.rdramWriteF32(positionObject + 0x1c, value);
        }
    }

    get ZPosition(): number {
        let positionObject: number = this.getPlayerSubObject(0xe4);

        if (positionObject !== 0) {
            return this.emulator.rdramReadF32(positionObject + 0x8);
        }
        return 0;
    }

    set ZPosition(value: number) {
        let positionObject: number = this.getPlayerSubObject(0xe4);

        if (positionObject !== 0) {
            this.emulator.rdramWriteF32(positionObject + 0x8, value);
            this.emulator.rdramWriteF32(positionObject + 0x14, value);
            this.emulator.rdramWriteF32(positionObject + 0x20, value);
        }
    }

    get XRotation(): number {
        let rotationObject: number = this.getPlayerSubObject(0xdc);

        if (rotationObject !== 0) {
            return this.emulator.rdramReadF32(rotationObject);
        }
        return 0;
    }

    set XRotation(value: number) {
        let rotXObject: number = this.getPlayerSubObject(0xdc);

        if (rotXObject !== 0) {
            this.emulator.rdramWriteF32(rotXObject, value);
            this.emulator.rdramWriteF32(rotXObject + 0x4, value);
        }
    }

    get YRotation(): number {
        let rotationObject: number = this.getPlayerSubObject(0xf8);

        if (rotationObject !== 0) {
            return this.emulator.rdramReadF32(rotationObject);
        }
        return 0;
    }

    set YRotation(value: number) {
        let rotYObject: number = this.getPlayerSubObject(0xf8);

        if (rotYObject !== 0) {
            this.emulator.rdramWriteF32(rotYObject, value);
            this.emulator.rdramWriteF32(rotYObject + 0x4, value);
        }
    }

    get ZRotation(): number {
        let rotationObject: number = this.getPlayerSubObject(0xf4);

        if (rotationObject !== 0) {
            return this.emulator.rdramReadF32(rotationObject);
        }
        return 0;
    }

    set ZRotation(value: number) {
        let rotZObject: number = this.getPlayerSubObject(0xf4);
        if (rotZObject !== 0) {
            this.emulator.rdramWriteF32(rotZObject, value);
            this.emulator.rdramWriteF32(rotZObject + 0x4, value);
        }
    }

    get CameraXPosition(): number {
        let cameraObject: number = this.getCameraObject();
        if (cameraObject !== 0) {
            return this.emulator.rdramReadF32(cameraObject + 0x74);
        }
        return 0;
    }

    set CameraXPosition(value: number) {
        let cameraObject: number = this.getCameraObject();
        if (cameraObject !== 0) {
            this.emulator.rdramWriteF32(cameraObject + 0x74, value);
        }
    }

    get CameraYPosition(): number {
        let cameraObject: number = this.getCameraObject();
        if (cameraObject !== 0) {
            return this.emulator.rdramReadF32(cameraObject + 0x78);
        }
        return 0;
    }

    set CameraYPosition(value: number) {
        let cameraObject: number = this.getCameraObject();
        if (cameraObject !== 0) {
            this.emulator.rdramWriteF32(cameraObject + 0x78, value);
        }
    }

    get CameraZPosition(): number {
        let cameraObject: number = this.getCameraObject();
        if (cameraObject !== 0) {
            return this.emulator.rdramReadF32(cameraObject + 0x7c);
        }
        return 0;
    }

    set CameraZPosition(value: number) {
        let cameraObject: number = this.getCameraObject();
        if (cameraObject !== 0) {
            this.emulator.rdramWriteF32(cameraObject + 0x7c, value);
        }
    }

    getFloor(): number {
        let floorObject = this.getPlayerSubObject(0x94);

        if (floorObject !== 0) {
            floorObject = this.emulator.dereferencePointer(floorObject); // Gotta dereference again for some reason -.-

            if (floorObject !== 0) {
                return this.emulator.rdramReadF32(floorObject + 0x70);
            }
        }

        return 0;
    }

    get current_map(): number { return this.emulator.rdramRead16(this.map_addr); }
    set current_map(value: number) { this.emulator.rdramWrite16(this.map_addr, value); }
    get map_destination(): number { return this.emulator.rdramRead16(this.map_destination_addr); }
    set map_destination(value: number) { this.emulator.rdramWrite16(this.map_destination_addr, value); }
    get map_trigger(): number { return this.emulator.rdramRead16(this.map_trigger_addr); }
    set map_trigger(value: number) { this.emulator.rdramWrite16(this.map_trigger_addr, value); }
    get map_trigger_target(): number { return this.emulator.rdramRead16(this.map_trigger_target_addr); }
    set map_trigger_target(value: number) { this.emulator.rdramWrite16(this.map_trigger_target_addr, value); }
    get dcw_location(): number { return this.emulator.rdramRead16(this.dcw_location_addr); }
    set dcw_location(value: number) { this.emulator.rdramWrite16(this.dcw_location_addr, value); }

    //--------------
    //-- Health --
    //--------------
    get_current_transformation_index(): number {
        let currentTransformation = this.emulator.rdramRead8(this.icon_addr);

        switch (currentTransformation) {
            case 0x01: { // Banjo-Kazooie
                return global.ModLoader[API.AddressType.RT_CUR_HEALTH_BEAR_BIRD];
            }

            case 0x10: { // Banjo (solo)
                return global.ModLoader[API.AddressType.RT_CUR_HEALTH_BEAR];
            }

            case 0x11: { // Mumbo
                return global.ModLoader[API.AddressType.RT_CUR_HEALTH_MUMBO];
            }

            case 0x2e: { // Detonator
                return global.ModLoader[API.AddressType.RT_CUR_HEALTH_DETONATOR];
            }

            case 0x2f: { // Submarine
                return global.ModLoader[API.AddressType.RT_CUR_HEALTH_SUBMARINE];
            }

            case 0x30: { // T. Rex
                return global.ModLoader[API.AddressType.RT_CUR_HEALTH_T_REX];
            }

            case 0x31: { // Bee
                return global.ModLoader[API.AddressType.RT_CUR_HEALTH_BEE];
            }

            case 0x32: { // Snowball
                return global.ModLoader[API.AddressType.RT_CUR_HEALTH_SNOWBALL];
            }

            case 0x36: { // Washing Machine
                return global.ModLoader[API.AddressType.RT_CUR_HEALTH_WASHING_MACHINE];
            }

            case 0x5f: { // Kazooie (solo)
                return global.ModLoader[API.AddressType.RT_CUR_HEALTH_BIRD];
            }

        }
        return 0;
    }

    get current_health(): number { return this.emulator.rdramRead8(this.get_current_transformation_index()); }
    set current_health(value: number) {
        value = value | 0;
        value = Math.max(0x00, value);
        value = Math.min(0xff, value);
        this.emulator.rdramWrite8(this.get_current_transformation_index(), value);
    }

    get max_health(): number { return this.emulator.rdramRead8(this.get_current_transformation_index() + 0x01); }
    set max_health(value: number) {
        value = value | 0;
        value = Math.max(0x00, value);
        value = Math.min(0xff, value);
        this.emulator.rdramWrite8(this.get_current_transformation_index() + 0x01, value);
    }

    //--------------
    //-- Jinjos --
    //--------------
    get_jinjo(index: number): number { return this.emulator.rdramRead8(this.jinjo_base_addr + (index * 0x3)); }
    set_jinjo(index: number, value: number): void { this.emulator.rdramWrite8(this.jinjo_base_addr + (index * 0x3), value); }
}

export class SaveContext extends API.BaseObj implements API.ISaveContext {
    // Abstraction
    game_flags: API.IBuffered;
    global_flags: API.IBuffered;

    constructor(emu: IMemory) {
        super(emu);

        this.game_flags = new GameFlags(emu);
        this.global_flags = new GlobalFlags(emu);
    }
}

export class BanjoTooie implements ICore, API.IBTCore {
    header = 'NB7';
    ModLoader: IModLoaderAPI = {} as IModLoaderAPI;
    eventTicks: Map<string, Function> = new Map<string, Function>();
    rom_header!: IRomHeader;

    player!: API.IPlayer;
    runtime!: API.IRuntime;
    save!: API.ISaveContext;
    version!: API.GameVersion;

    isPlaying(): boolean {
        return (
            this.runtime.get_profile_hovering() === API.ProfileType.Title &&
            this.runtime.get_profile_selected() !== API.ProfileType.Title
        );
    }

    preinit(): void {
        switch (this.rom_header.country_code) {
            case 'U':
                this.version = API.GameVersion.AUS_1_0;
                VersionHandler.load_aus_1_0();
                break;

            case 'J':
                this.version = API.GameVersion.JP_1_0;
                VersionHandler.load_jp_1_0();
                break;

            case 'P':
                this.version = API.GameVersion.PAL_1_0;
                VersionHandler.load_pal_1_0();
                break;

            case 'E':
                this.version = API.GameVersion.USA_1_0;
                VersionHandler.load_usa_1_0();
                break;

            default:
                this.version = API.GameVersion.USA_1_0;
                VersionHandler.load_usa_1_0();
                break;
        }
    }

    init(): void { }

    postinit(): void {
        this.player = new Player(this.ModLoader.emulator);
        this.runtime = new Runtime(this.ModLoader.emulator);
        this.save = new SaveContext(this.ModLoader.emulator);

        // Integrity Check
        this.ModLoader.emulator.rdramWrite32(0x0124b4, 0x00000000);
    }

    onTick(): void {
        this.eventTicks.forEach((value: Function, key: string) => {
            value();
        });
    }

    @EventHandler(ModLoaderEvents.ON_ROM_HEADER_PARSED)
    onModLoader_RomHeaderParsed(header: Buffer) { }

    @EventHandler(EventsClient.ON_INJECT_FINISHED)
    onCore_InjectFinished(evt: any) { }
}

export default BanjoTooie;
