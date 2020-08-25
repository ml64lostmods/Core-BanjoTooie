import IMemory from 'modloader64_api/IMemory';
import * as API from '../../API/Imports';
import * as SUB from './Imports'

export class Inventory extends API.BaseObj implements API.IInventory {
	private instance: number = global.ModLoader[API.AddressType.INVENTORY];

	// Abstraction
	eggs: API.IEggs;

	constructor(emu: IMemory) {
		super(emu);

		this.eggs = new SUB.Eggs(emu);
	}

	get beans(): number {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return 0;
		return this.emulator.rdramRead16(this.instance + API.ConsumableType.BEANS * 0x0c);
	}
	set beans(val: number) {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return;
		this.emulator.rdramWrite16(ptr + API.ConsumableType.BEANS * 2, val ^ 0x0002);
	}

	get burgers(): number {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return 0;
		return this.emulator.rdramRead16(this.instance + API.ConsumableType.BURGERS * 0x0c);
	}
	set burgers(val: number) {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return;
		this.emulator.rdramWrite16(ptr + API.ConsumableType.BURGERS * 2, val ^ 0x858c);
	}

	get cheato_pages(): number {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return 0;
		return this.emulator.rdramRead16(this.instance + API.ConsumableType.CHEATO_PAGES * 0x0c);
	}
	set cheato_pages(val: number) {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return;
		this.emulator.rdramWrite16(ptr + API.ConsumableType.CHEATO_PAGES * 2, val ^ 0x0319);
	}

	get doubloons(): number {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return 0;
		return this.emulator.rdramRead16(this.instance + API.ConsumableType.DOUBLOONS * 0x0c);
	}
	set doubloons(val: number) {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return;
		this.emulator.rdramWrite16(ptr + API.ConsumableType.DOUBLOONS * 2, val ^ 0x0c03);
	}

	get fish(): number {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return 0;
		return this.emulator.rdramRead16(this.instance + API.ConsumableType.FISH * 0x0c);
	}
	set fish(val: number) {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return;
		this.emulator.rdramWrite16(ptr + API.ConsumableType.FISH * 2, val ^ 0x85e3);
	}

	get fries(): number {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return 0;
		return this.emulator.rdramRead16(this.instance + API.ConsumableType.FRIES * 0x0c);
	}
	set fries(val: number) {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return;
		this.emulator.rdramWrite16(ptr + API.ConsumableType.FRIES * 2, val ^ 0x03e0);
	}

	get glowbos(): number {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return 0;
		return this.emulator.rdramRead16(this.instance + API.ConsumableType.GLOWBOS * 0x0c);
	}
	set glowbos(val: number) {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return;
		this.emulator.rdramWrite16(ptr + API.ConsumableType.GLOWBOS * 2, val ^ 0x0003);
	}

	get glowbo_mega(): number {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return 0;
		return this.emulator.rdramRead16(this.instance + API.ConsumableType.MEGA_GLOWBO * 0x0c);
	}
	set glowbo_mega(val: number) {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return;
		this.emulator.rdramWrite16(ptr + API.ConsumableType.MEGA_GLOWBO * 2, val ^ 0x1461);
	}

	get gold_feathers(): number {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return 0;
		return this.emulator.rdramRead16(this.instance + API.ConsumableType.GOLD_FEATHERS * 0x0c);
	}
	set gold_feathers(val: number) {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return;
		this.emulator.rdramWrite16(ptr + API.ConsumableType.GOLD_FEATHERS * 2, val ^ 0x3c18);
	}

	get gold_idols(): number {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return 0;
		return this.emulator.rdramRead16(this.instance + API.ConsumableType.GOLD_IDOLS * 0x0c);
	}
	set gold_idols(val: number) {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return;
		this.emulator.rdramWrite16(ptr + API.ConsumableType.GOLD_IDOLS * 2, val ^ 0x3c05);
	}

	get honeycombs(): number {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return 0;
		return this.emulator.rdramRead16(this.instance + API.ConsumableType.HONEYCOMBS * 0x0c);
	}
	set honeycombs(val: number) {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return;
		this.emulator.rdramWrite16(ptr + API.ConsumableType.HONEYCOMBS * 2, val ^ 0x3c0c);
	}

	get ice_key(): number {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return 0;
		return this.emulator.rdramRead16(this.instance + API.ConsumableType.ICE_KEY * 0x0c);
	}
	set ice_key(val: number) {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return;
		this.emulator.rdramWrite16(ptr + API.ConsumableType.ICE_KEY * 2, val ^ 0x8fbf);
	}

	get red_feathers(): number {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return 0;
		return this.emulator.rdramRead16(this.instance + API.ConsumableType.RED_FEATHERS * 0x0c);
	}
	set red_feathers(val: number) {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return;
		this.emulator.rdramWrite16(ptr + API.ConsumableType.RED_FEATHERS * 2, val ^ 0x1000);
	}

	get stop_n_swap_eggs(): number {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return 0;
		return this.emulator.rdramRead16(ptr + API.ConsumableType.SNS_EGGS * 0x0c);
	}
	set stop_n_swap_eggs(val: number) {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return;
		this.emulator.rdramWrite16(ptr + API.ConsumableType.SNS_EGGS * 2, val ^ 0x0040);
	}

	get tickets(): number {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return 0;
		return this.emulator.rdramRead16(this.instance + API.ConsumableType.TICKETS * 0x0c);
	}
	set tickets(val: number) {
		let ptr = this.emulator.dereferencePointer(this.instance);
		if (ptr === 0) return;
		this.emulator.rdramWrite16(ptr + API.ConsumableType.TICKETS * 2, val ^ 0x27bd);
	}
}
