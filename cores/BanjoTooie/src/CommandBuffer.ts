import IMemory from 'modloader64_api/IMemory';
import * as API from '../API/Imports';

export class Slot {
	private readonly emu: IMemory;
	private readonly addr: number;
	callback: Function = () => { };
	ticking = false;

	constructor(emu: IMemory, addr: number) {
		this.emu = emu;
		this.addr = addr;
	}

	get cmd(): API.CMD {
		return this.emu.rdramRead8(this.addr);
	}
	set cmd(command: API.CMD) {
		let exists = this.ptr !== 0x000000;
		if (
			(exists && command === API.CMD.SPAWN) ||
			(!exists && command === API.CMD.DESPAWN)||
			(!exists && command === API.CMD.DESPAWN_FADE)
		) { this.emu.rdramWrite8(this.addr, API.CMD.EMPTY); }
		else { this.emu.rdramWrite8(this.addr, command); }
	}

	get ptr(): number {
		return this.emu.dereferencePointer(this.addr + 0x04);
	}
}

export class CommandBuffer implements API.ICommandBuffer {
	private readonly cmd_count = global.ModLoader[API.AddressType.CMD_BUFFER];
	private readonly slots: Slot[] = new Array<Slot>(16);

	constructor(emu: IMemory) {
		let addr = this.cmd_count + 0x04;
		let offset: number;
		for (let i = 0; i < 16; i++) {
			offset = addr + i * 0x08;
			this.slots[i] = new Slot(emu, offset);
		}
	}

	runCommand(
		command: API.CMD,
		index: number,
		callback: Function = () => { }
	) {
		if (
			command === API.CMD.EMPTY ||
			command === this.slots[index].cmd
		) return;

		this.slots[index].cmd = command;
		this.slots[index].callback = callback;
		this.slots[index].ticking = true;
	}

	onTick() {
		for (let i = 0; i < this.slots.length; i++) {
			if (!this.slots[i].ticking || this.slots[i].cmd !== API.CMD.EMPTY) continue;

			// command is finished.
			this.slots[i].callback(this.slots[i].ptr);
			this.slots[i].ticking = false;
		}
	}
}