import * as API from '../API/Imports';

export namespace VersionHandler {
    export function load_aus_1_0() {
        // Player Data

        // Runtime Data
        global.ModLoader[API.AddressType.RT_AIR] = 0x12fdc0;

        global.ModLoader[API.AddressType.RT_CHARACTER_STATE] = 0x13bc53;
        global.ModLoader[API.AddressType.RT_CHARACTER_CHANGE] = 0x12bd9c;

        global.ModLoader[API.AddressType.RT_CONSUMABLE_BASE] = 0x11ffb0;
        global.ModLoader[API.AddressType.RT_CONSUMABLE_PTR] = 0x12ffc0;

        global.ModLoader[API.AddressType.RT_PLYR_PTR] = 0x13a210;
        global.ModLoader[API.AddressType.RT_PLYR_PTR_INDEX] = 0x13a25f;
        global.ModLoader[API.AddressType.RT_OBJ_ARRAY_PTR] = 0x13bbd0;
        global.ModLoader[API.AddressType.RT_CAMERA_PTR] = 0x12c478;

        global.ModLoader[API.AddressType.RT_CURRENT_MAP] = 0x137b42;
        global.ModLoader[API.AddressType.RT_MAP_TRIGGER] = 0x12c392;
        global.ModLoader[API.AddressType.RT_MAP_TRIGGER_TARGET] = 0x12c390;
        global.ModLoader[API.AddressType.RT_MAP_DESTINATION] = 0x044e32;
        global.ModLoader[API.AddressType.RT_DCW_LOCATION] = 0x12c33a;

        //global.ModLoader[API.AddressType.RT_PROF_HOVER] = 0x12b3f0;
        //global.ModLoader[API.AddressType.RT_PROF_SELECT] = 0x12b3f1;

        global.ModLoader[API.AddressType.RT_JINJO_BASE_ADDR] = 0x11fa71;

        global.ModLoader[API.AddressType.RT_ICON_ADDR] = 0x11ff95;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_BEAR_BIRD] = 0x120584;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_BEAR] = 0x12059f;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_MUMBO] = 0x1205a8;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_DETONATOR] = 0x1205ae;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_SUBMARINE] = 0x1205a5;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_T_REX] = 0x1205b7;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_BEE] = 0x120593;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_SNOWBALL] = 0x120587;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_WASHING_MACHINE] = 0x120596;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_BIRD] = 0x1205a2;

        // Save Data
        global.ModLoader[API.AddressType.SAVE_GAME_FLAGS] = 0x1314f0;
        global.ModLoader[API.AddressType.SAVE_GLOBAL_FLAGS] = 0x131500;
    }

    export function load_jp_1_0() {
        // Player Data

        // Runtime Data
        global.ModLoader[API.AddressType.RT_AIR] = 0x125220;

        global.ModLoader[API.AddressType.RT_CHARACTER_STATE] = 0x1310a3;
        global.ModLoader[API.AddressType.RT_CHARACTER_CHANGE] = 0x1211fc;

        global.ModLoader[API.AddressType.RT_CONSUMABLE_BASE] = 0x115340;
        global.ModLoader[API.AddressType.RT_CONSUMABLE_PTR] = 0x125420;

        global.ModLoader[API.AddressType.RT_PLYR_PTR] = 0x12f660;
        global.ModLoader[API.AddressType.RT_PLYR_PTR_INDEX] = 0x12f6af;
        global.ModLoader[API.AddressType.RT_OBJ_ARRAY_PTR] = 0x131020;
        global.ModLoader[API.AddressType.RT_CAMERA_PTR] = 0x1218d8;

        global.ModLoader[API.AddressType.RT_CURRENT_MAP] = 0x12cf92;
        global.ModLoader[API.AddressType.RT_MAP_TRIGGER] = 0x1217f2;
        global.ModLoader[API.AddressType.RT_MAP_TRIGGER_TARGET] = 0x1217f0;
        global.ModLoader[API.AddressType.RT_MAP_DESTINATION] = 0x044eb2;
        global.ModLoader[API.AddressType.RT_DCW_LOCATION] = 0x12179a;

        //global.ModLoader[API.AddressType.RT_PROF_HOVER] = 0x12b3f0;
        //global.ModLoader[API.AddressType.RT_PROF_SELECT] = 0x12b3f1;

        global.ModLoader[API.AddressType.RT_JINJO_BASE_ADDR] = 0x114e01;

        global.ModLoader[API.AddressType.RT_ICON_ADDR] = 0x115325;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_BEAR_BIRD] = 0x115a04;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_BEAR] = 0x115a1f;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_MUMBO] = 0x115a28;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_DETONATOR] = 0x115a19;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_SUBMARINE] = 0x115a25;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_T_REX] = 0x115a37;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_BEE] = 0x115a13;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_SNOWBALL] = 0x115a07;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_WASHING_MACHINE] = 0x115a16;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_BIRD] = 0x115a22;

        // Save Data
        global.ModLoader[API.AddressType.SAVE_GAME_FLAGS] = 0x126940;
        global.ModLoader[API.AddressType.SAVE_GLOBAL_FLAGS] = 0x126950;
    }

    export function load_pal_1_0() {
        // Player Data

        // Runtime Data
        global.ModLoader[API.AddressType.RT_AIR] = 0x12ffd0;

        global.ModLoader[API.AddressType.RT_CHARACTER_STATE] = 0x13bee3;
        global.ModLoader[API.AddressType.RT_CHARACTER_CHANGE] = 0x12bfac;

        global.ModLoader[API.AddressType.RT_CONSUMABLE_BASE] = 0x120170;
        global.ModLoader[API.AddressType.RT_CONSUMABLE_PTR] = 0x1301d0;

        global.ModLoader[API.AddressType.RT_PLYR_PTR] = 0x13a4a0;
        global.ModLoader[API.AddressType.RT_PLYR_PTR_INDEX] = 0x13a4ef;
        global.ModLoader[API.AddressType.RT_OBJ_ARRAY_PTR] = 0x13be60;
        global.ModLoader[API.AddressType.RT_CAMERA_PTR] = 0x12c688;

        global.ModLoader[API.AddressType.RT_CURRENT_MAP] = 0x137DD2;
        global.ModLoader[API.AddressType.RT_MAP_TRIGGER] = 0x12C5A2;
        global.ModLoader[API.AddressType.RT_MAP_TRIGGER_TARGET] = 0x12C5A0;
        global.ModLoader[API.AddressType.RT_MAP_DESTINATION] = 0x044E32;
        global.ModLoader[API.AddressType.RT_DCW_LOCATION] = 0x12C54A;

        //global.ModLoader[API.AddressType.RT_PROF_HOVER] = 0x12b3f0;
        //global.ModLoader[API.AddressType.RT_PROF_SELECT] = 0x12b3f1;

        global.ModLoader[API.AddressType.RT_JINJO_BASE_ADDR] = 0x11fc31;

        global.ModLoader[API.AddressType.RT_ICON_ADDR] = 0x120155;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_BEAR_BIRD] = 0x120794;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_BEAR] = 0x1207af;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_MUMBO] = 0x1207b8;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_DETONATOR] = 0x1207be;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_SUBMARINE] = 0x1207b5;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_T_REX] = 0x1207c7;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_BEE] = 0x1207a3;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_SNOWBALL] = 0x120797;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_WASHING_MACHINE] = 0x1207a6;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_BIRD] = 0x1207b2;

        // Save Data
        global.ModLoader[API.AddressType.SAVE_GAME_FLAGS] = 0x131780;
        global.ModLoader[API.AddressType.SAVE_GLOBAL_FLAGS] = 0x131790;
    }

    export function load_usa_1_0() {
        // Player Data

        // Runtime Data
        global.ModLoader[API.AddressType.RT_AIR] = 0x12B050;

        global.ModLoader[API.AddressType.RT_CHARACTER_STATE] = 0x136F63;
        global.ModLoader[API.AddressType.RT_CHARACTER_CHANGE] = 0x12704C;

        global.ModLoader[API.AddressType.RT_CONSUMABLE_BASE] = 0x11B080;
        global.ModLoader[API.AddressType.RT_CONSUMABLE_PTR] = 0x12B250;

        global.ModLoader[API.AddressType.RT_PLYR_PTR] = 0x135490;
        global.ModLoader[API.AddressType.RT_PLYR_PTR_INDEX] = 0x1354DF;
        global.ModLoader[API.AddressType.RT_OBJ_ARRAY_PTR] = 0x136EE0;
        global.ModLoader[API.AddressType.RT_CAMERA_PTR] = 0x127728;

        global.ModLoader[API.AddressType.RT_CURRENT_MAP] = 0x132dc2;
        global.ModLoader[API.AddressType.RT_MAP_TRIGGER] = 0x127642;
        global.ModLoader[API.AddressType.RT_MAP_TRIGGER_TARGET] = 0x127640;
        global.ModLoader[API.AddressType.RT_MAP_DESTINATION] = 0x045702;
        global.ModLoader[API.AddressType.RT_DCW_LOCATION] = 0x1275ea;

        global.ModLoader[API.AddressType.RT_PROF_HOVER] = 0x12b3f0;
        global.ModLoader[API.AddressType.RT_PROF_SELECT] = 0x12b3f1;

        global.ModLoader[API.AddressType.RT_JINJO_BASE_ADDR] = 0x11ab41;

        global.ModLoader[API.AddressType.RT_ICON_ADDR] = 0x11b065;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_BEAR_BIRD] = 0x11b644;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_BEAR] = 0x11b65f;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_MUMBO] = 0x11b668;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_DETONATOR] = 0x11b66e;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_SUBMARINE] = 0x11b665;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_T_REX] = 0x11b677;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_BEE] = 0x11b653;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_SNOWBALL] = 0x11b647;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_WASHING_MACHINE] = 0x11b656;
        global.ModLoader[API.AddressType.RT_CUR_HEALTH_BIRD] = 0x11b662;

        // Save Data
        global.ModLoader[API.AddressType.SAVE_GAME_FLAGS] = 0x12c770;
        global.ModLoader[API.AddressType.SAVE_GLOBAL_FLAGS] = 0x12c780;
    }
}
