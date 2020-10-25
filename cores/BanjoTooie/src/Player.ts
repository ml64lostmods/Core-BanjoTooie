import * as API from '../API/Imports';

export class Player extends API.BaseObj implements API.IPlayer {
	private ptr_addr: number = global.ModLoader[API.AddressType.PLAYER];
	private index_addr: number = global.ModLoader[API.AddressType.PLYR_PTR_INDEX];

	exists(): boolean { return this.instance() !== 0; }
	instance(): number {
		let index: number = this.emulator.rdramRead8(this.index_addr);
		return this.emulator.dereferencePointer(this.ptr_addr + 4 * index);
	}
	subInstance(index: number): number {
		let ptr: number = this.instance();
		if (ptr === 0) return 0;
		return this.emulator.dereferencePointer(ptr + index);
	}

	get animation(): Buffer {
		let ptr: number = this.subInstance(0x04);
		if (ptr === 0) return Buffer.alloc(10);
		ptr = this.emulator.dereferencePointer(ptr);

		let buf: Buffer = Buffer.alloc(10);
		buf.writeUInt32BE(this.emulator.rdramRead32(ptr + 0x00), 0);
		buf.writeUInt32BE(this.emulator.rdramRead32(ptr + 0x2c), 4);
		buf.writeUInt16BE(this.emulator.rdramRead16(ptr + 0x34), 8);
		return buf;
	}
	set animation(val: Buffer) {
		let ptr: number = this.subInstance(0x04);
		if (ptr === 0) return;

		this.emulator.rdramWriteBuffer(ptr + 0x00, val.slice(0, 4));
		this.emulator.rdramWriteBuffer(ptr + 0x2c, val.slice(4, 8));
		this.emulator.rdramWriteBuffer(ptr + 0x34, val.slice(8, 10));
	}

	get anim_frame(): number {
		let ptr: number = this.subInstance(0x04);
		if (ptr === 0) return 0;

		return this.emulator.rdramRead32(ptr + 0x00);
	}
	set anim_frame(val: number) {
		let ptr: number = this.subInstance(0x04);
		if (ptr === 0) return;

		this.emulator.rdramWrite32(ptr + 0x00, val)
	}

	get anim_id(): number {
		let ptr: number = this.subInstance(0x04);
		if (ptr === 0) return 0;

		return this.emulator.rdramRead32(ptr + 0x34);
	}
	set anim_id(val: number) {
		let ptr: number = this.subInstance(0x04);
		if (ptr === 0) return;

		this.emulator.rdramWrite32(ptr + 0x34, val)
	}

	get flip_facing(): boolean {
		let ptr: number = this.subInstance(0x50);
		if (ptr === 0) return false;

		if (this.emulator.rdramRead8(ptr + 0x15) === 2)
			return true;
		return false;
	}
	set flip_facing(val: boolean) {
		if (!val) return;
		
		let fVal = (this.rot_y + 180.0) % 360.0;
        // this.bufFloat.writeFloatBE(fVal, 0);
        // this.rot_y = this.bufFloat.readInt32BE(0);
	}

	get model_index(): number {
		let ptr: number = this.subInstance(0x50);
		return this.emulator.rdramRead16(ptr + 0x0c);
	}
	set model_index(val: number) {
		let ptr: number = this.subInstance(0x50);
		this.emulator.rdramWrite16(ptr + 0x0c, val);
	}

	get model_ptr(): number {
		let ptr: number = this.subInstance(0x00);
		if (ptr === 0) return 0;

		return 0;
	}
	set model_ptr(val: number) {
		let ptr: number = this.subInstance(0x00);
		if (ptr === 0) return;

	}

	get position(): Buffer {
		let ptr: number = this.subInstance(0xe4);
		if (ptr === 0) return Buffer.alloc(12);

		let buf: Buffer = Buffer.alloc(12);
		buf.writeFloatBE(this.emulator.rdramReadF32(ptr + 0x00), 0);
		buf.writeFloatBE(this.emulator.rdramReadF32(ptr + 0x04), 4);
		buf.writeFloatBE(this.emulator.rdramReadF32(ptr + 0x08), 8);
		return buf;
	}
	set position(val: Buffer) {
		let ptr: number = this.subInstance(0xe4);
		if (ptr === 0) return;

		let x = val.slice(0, 4);
		this.emulator.rdramWriteBuffer(ptr + 0x00, x);
		this.emulator.rdramWriteBuffer(ptr + 0x0c, x);
		this.emulator.rdramWriteBuffer(ptr + 0x018, x);
		let y = val.slice(4, 8);
		this.emulator.rdramWriteBuffer(ptr + 0x04, y);
		this.emulator.rdramWriteBuffer(ptr + 0x10, y);
		this.emulator.rdramWriteBuffer(ptr + 0x01c, y);
		let z = val.slice(8, 12);
		this.emulator.rdramWriteBuffer(ptr + 0x08, z);
		this.emulator.rdramWriteBuffer(ptr + 0x14, z);
		this.emulator.rdramWriteBuffer(ptr + 0x020, z);
	}

	get pos_x(): number {
		let ptr: number = this.subInstance(0xe4);
		if (ptr === 0) return 0;
		return this.emulator.rdramReadF32(ptr + 0x00);
	}
	set pos_x(val: number) {
		let ptr: number = this.subInstance(0xe4);
		if (ptr === 0) return;
		this.emulator.rdramWriteF32(ptr + 0x00, val);
		this.emulator.rdramWriteF32(ptr + 0x0c, val);
		this.emulator.rdramWriteF32(ptr + 0x18, val);
	}

	get pos_y(): number {
		let ptr: number = this.subInstance(0xe4);
		if (ptr === 0) return 0;
		return this.emulator.rdramReadF32(ptr + 0x04);
	}
	set pos_y(val: number) {
		let ptr: number = this.subInstance(0xe4);
		if (ptr === 0) return;
		this.emulator.rdramWriteF32(ptr + 0x04, val);
		this.emulator.rdramWriteF32(ptr + 0x10, val);
		this.emulator.rdramWriteF32(ptr + 0x1c, val);
	}

	get pos_z(): number {
		let ptr: number = this.subInstance(0xe4);
		if (ptr === 0) return 0;
		return this.emulator.rdramReadF32(ptr + 0x08);
	}
	set pos_z(val: number) {
		let ptr: number = this.subInstance(0xe4);
		if (ptr === 0) return;
		this.emulator.rdramWriteF32(ptr + 0x08, val);
		this.emulator.rdramWriteF32(ptr + 0x14, val);
		this.emulator.rdramWriteF32(ptr + 0x20, val);
	}

	get rotation(): Buffer {
		if (!this.exists()) return Buffer.alloc(12);

		let buf: Buffer = Buffer.alloc(12);
		buf.writeFloatBE(this.rot_x, 0);
		buf.writeFloatBE(this.rot_y, 4);
		buf.writeFloatBE(this.rot_z, 8);
		return buf;
	}
	set rotation(val: Buffer) {
		let ptr: number = this.subInstance(0xdc);
		if (ptr === 0) return;

		this.rot_x = val.readFloatBE(0);
		this.rot_y = val.readFloatBE(4);
		this.rot_z = val.readFloatBE(8);
	}

	get rot_x(): number {
		let ptr: number = this.subInstance(0xdc);
		if (ptr === 0) return 0;
		return this.emulator.rdramReadF32(ptr);
	}
	set rot_x(val: number) {
		let ptr: number = this.subInstance(0xdc);
		if (ptr === 0) return;
		this.emulator.rdramWriteF32(ptr, val);
		this.emulator.rdramWriteF32(ptr + 0x04, val);
	}

	get rot_y(): number {
		let ptr: number = this.subInstance(0xf8);
		if (ptr === 0) return 0;
		return this.emulator.rdramReadF32(ptr);
	}
	set rot_y(val: number) {
		let ptr: number = this.subInstance(0xf8);
		if (ptr === 0) return;
		this.emulator.rdramWriteF32(ptr, val);
		this.emulator.rdramWriteF32(ptr + 0x04, val);
	}
	rot_y_angle(): number {
		let ptr: number = this.subInstance(0x50);
		if (ptr === 0) return 0;
		return this.emulator.rdramReadF32(ptr + 0x28);
	}

	get rot_z(): number {
		let ptr: number = this.subInstance(0xf4);
		if (ptr === 0) return 0;
		return this.emulator.rdramReadF32(ptr);
	}
	set rot_z(val: number) {
		let ptr: number = this.subInstance(0xf4);
		if (ptr === 0) return;
		this.emulator.rdramWriteF32(ptr, val);
		this.emulator.rdramWriteF32(ptr + 0x04, val);
	}

	get_floor(): number {
		let ptr: number = this.subInstance(0x94);
		if (ptr === 0) return 0;
		return this.emulator.rdramReadPtrF32(ptr, 0x70);
	}
}