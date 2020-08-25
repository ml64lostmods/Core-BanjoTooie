import IMemory from 'modloader64_api/IMemory';
import * as API from '../../API/Imports';

export class GlobalFlags extends API.BufferPtrObj implements API.IBuffered {
    constructor(emu: IMemory) {
        super(emu, global.ModLoader[API.AddressType.SAVE_GLOBAL_FLAGS], 0x10);
    }
}