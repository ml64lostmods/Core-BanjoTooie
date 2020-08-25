import IMemory from 'modloader64_api/IMemory';
import * as API from '../API/Imports';
import * as SUB from './sub/Imports';

export class SaveContext extends API.BaseObj implements API.ISaveContext {
    // Abstraction
    inventory: API.IInventory;
    flags_game: API.IBuffered;
    flags_global: API.IBuffered;

    constructor(emu: IMemory) {
        super(emu);

        this.inventory = new SUB.Inventory(emu);
        this.flags_game = new SUB.GameFlags(emu);
        this.flags_global = new SUB.GlobalFlags(emu);
    }
}