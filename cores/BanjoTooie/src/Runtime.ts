import * as API from '../API/Imports';

export class Runtime extends API.BaseObj implements API.IRuntime {
    private prof_hover_addr: number = global.ModLoader[API.AddressType.RT_PROF_HOVER];
    private prof_select_addr: number = global.ModLoader[API.AddressType.RT_PROF_SELECT];

    private cur_scene_addr: number = global.ModLoader[API.AddressType.RT_CURRENT_SCENE];
    private dcw_location_addr: number = global.ModLoader[API.AddressType.RT_DCW_LOCATION];
    private goto_scene_addr: number = global.ModLoader[API.AddressType.RT_GOTO_SCENE];
    private is_loading_addr = global.ModLoader[API.AddressType.RT_IS_LOADING];
    private icon_addr: number = global.ModLoader[API.AddressType.RT_ICON_ADDR];
    private jinjo_addr: number = global.ModLoader[API.AddressType.RT_JINJO_ADDR];
    private obj_array_ptr_addr: number = global.ModLoader[API.AddressType.RT_OBJ_ARRAY_PTR];

    get_current_profile(): API.ProfileType {
        if (this.get_profile_hovering() !== API.ProfileType.Title)
            return API.ProfileType.Title;

        return this.get_profile_selected();
    }
    get_profile_hovering(): API.ProfileType { return this.emulator.rdramReadS8(this.prof_hover_addr); }
    get_profile_selected(): API.ProfileType { return this.emulator.rdramReadS8(this.prof_select_addr); }

    get current_health(): number {
        return this.emulator.rdramRead8(this.get_form_ptr());
    }
    set current_health(val: number) {
        val = val | 0;
        val = Math.max(0x00, val);
        val = Math.min(0xff, val);
        this.emulator.rdramWrite8(this.get_form_ptr(), val);
    }

    get max_health(): number {
        return this.emulator.rdramRead8(this.get_form_ptr() + 0x01);
    }
    set max_health(val: number) {
        val = val | 0;
        val = Math.max(0x00, val);
        val = Math.min(0xff, val);
        this.emulator.rdramWrite8(this.get_form_ptr() + 0x01, val);
    }

    get current_scene(): number {
        return this.emulator.rdramRead16(this.cur_scene_addr);
    }
    set current_scene(val: number) {
        this.emulator.rdramWrite16(this.cur_scene_addr, val);
    }

    get dcw_location(): number {
        return this.emulator.rdramRead16(this.dcw_location_addr);
    }
    set dcw_location(val: number) {
        this.emulator.rdramWrite16(this.dcw_location_addr, val);
    }

    get_jinjo(index: number): number {
        return this.emulator.rdramRead8(this.jinjo_addr + (index * 0x3));
    }
    set_jinjo(index: number, val: number): void {
        this.emulator.rdramWrite8(this.jinjo_addr + (index * 0x3), val);
    }

    is_loading(): boolean {
        return this.emulator.rdramRead8(this.is_loading_addr) !== 0;
    }

    goto_scene(scene: number) {
        this.emulator.rdramWrite16(this.goto_scene_addr, scene);
        this.emulator.rdramWrite8(this.is_loading_addr, 1);
    }

    get_form_ptr(): number {
        switch (this.emulator.rdramRead8(this.icon_addr)) {
            case 0x01: return global.ModLoader[API.AddressType.RT_CUR_HEALTH_BEAR_BIRD];
            case 0x10: return global.ModLoader[API.AddressType.RT_CUR_HEALTH_BEAR];
            case 0x11: return global.ModLoader[API.AddressType.RT_CUR_HEALTH_MUMBO];
            case 0x2e: return global.ModLoader[API.AddressType.RT_CUR_HEALTH_DETONATOR];
            case 0x2f: return global.ModLoader[API.AddressType.RT_CUR_HEALTH_SUBMARINE];
            case 0x30: return global.ModLoader[API.AddressType.RT_CUR_HEALTH_T_REX];
            case 0x31: return global.ModLoader[API.AddressType.RT_CUR_HEALTH_BEE];
            case 0x32: return global.ModLoader[API.AddressType.RT_CUR_HEALTH_SNOWBALL];
            case 0x36: return global.ModLoader[API.AddressType.RT_CUR_HEALTH_WASHING_MACHINE];
            case 0x5f: return global.ModLoader[API.AddressType.RT_CUR_HEALTH_BIRD];
            default: return 0;
        }
    }
}