import IMemory from 'modloader64_api/IMemory';
import * as API from '../../API/Imports';

export class GameFlags extends API.BufferPtrObj implements API.IBuffered {
	constructor(emu: IMemory) {
		super(emu, global.ModLoader[API.AddressType.SAVE_GAME_FLAGS], 0xb0);
	}
}