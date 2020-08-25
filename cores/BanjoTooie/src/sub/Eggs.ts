import * as API from '../../API/Imports';

export class Eggs extends API.BaseObj implements API.IEggs {
	private instance: number = global.ModLoader[API.AddressType.INVENTORY];

	get plain(): number {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return 0;
		return this.emulator.rdramRead16(this.instance + API.ConsumableType.BLUE_EGGS * 0x0c);
	}
	set plain(val: number) {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return;
		this.emulator.rdramWrite16(ptr + API.ConsumableType.BLUE_EGGS * 2, val ^ 0x27bd);
	}

	get fire(): number {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return 0;
		return this.emulator.rdramRead16(ptr + API.ConsumableType.FIRE_EGGS * 0x0c);
	}
	set fire(val: number) {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return;
		this.emulator.rdramWrite16(ptr + API.ConsumableType.FIRE_EGGS * 2, val ^ 0x0c03);
	}

	get ice(): number {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return 0;
		return this.emulator.rdramRead16(ptr + API.ConsumableType.ICE_EGGS * 0x0c);
	}
	set ice(val: number) {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return;
		this.emulator.rdramWrite16(ptr + API.ConsumableType.ICE_EGGS * 2, val ^ 0x0002);
	}

	get grenade(): number {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return 0;
		return this.emulator.rdramRead16(ptr + API.ConsumableType.GRENADE_EGGS * 0x0c);
	}
	set grenade(val: number) {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return;
		this.emulator.rdramWrite16(ptr + API.ConsumableType.GRENADE_EGGS * 2, val ^ 0x01ee);
	}

	get clockwork(): number {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return 0;
		return this.emulator.rdramRead16(ptr + API.ConsumableType.CLOCKWORK_EGGS * 0x0c);
	}
	set clockwork(val: number) {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return;
		this.emulator.rdramWrite16(ptr + API.ConsumableType.CLOCKWORK_EGGS * 2, val ^ 0x2401);
	}

	get proximity(): number {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return 0;
		return this.emulator.rdramRead16(ptr + API.ConsumableType.PROXIMITY_EGGS * 0x0c);
	}
	set proximity(val: number) {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return;
		this.emulator.rdramWrite16(ptr + API.ConsumableType.PROXIMITY_EGGS * 2, val ^ 0x15e0);
	}
}
