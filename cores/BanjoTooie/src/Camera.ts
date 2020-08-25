import * as API from '../API/Imports';

export class Camera extends API.BaseObj implements API.ICamera {
	private ptr_addr: number = global.ModLoader[API.AddressType.CAMERA];

	exists(): boolean { return this.instance() !== 0; }
	instance(): number {
		let ptr: number = this.emulator.dereferencePointer(this.ptr_addr);
		if (ptr === 0) return 0;
		return this.emulator.dereferencePointer(ptr + 4);
	}

	get position(): Buffer {
		let ptr: number = this.instance();
		if (ptr === 0) return Buffer.alloc(12);

		let buf: Buffer = Buffer.alloc(12);
		buf.writeFloatBE(this.emulator.rdramReadF32(ptr + 0x74), 0);
		buf.writeFloatBE(this.emulator.rdramReadF32(ptr + 0x78), 4);
		buf.writeFloatBE(this.emulator.rdramReadF32(ptr + 0x7c), 8);
		return buf;
	}
	set position(val: Buffer) {
		let ptr: number = this.instance();
		if (ptr === 0) return;

		this.emulator.rdramWriteBuffer(ptr + 0x74, val.slice(0, 4));
		this.emulator.rdramWriteBuffer(ptr + 0x78, val.slice(4, 8));
		this.emulator.rdramWriteBuffer(ptr + 0x7c, val.slice(8, 12));
	}

	get pos_x(): number {
		let ptr: number = this.instance();
		if (ptr === 0) return 0;
		return this.emulator.rdramReadF32(ptr + 0x74);
	}

	set pos_x(val: number) {
		let ptr: number = this.instance();
		if (ptr === 0) return;
		this.emulator.rdramWriteF32(ptr + 0x74, val);
	}

	get pos_y(): number {
		let ptr: number = this.instance();
		if (ptr === 0) return 0;
		return this.emulator.rdramReadF32(ptr + 0x78);
	}

	set pos_y(val: number) {
		let ptr: number = this.instance();
		if (ptr === 0) return;
		this.emulator.rdramWriteF32(ptr + 0x78, val);
	}

	get pos_z(): number {
		let ptr: number = this.instance();
		if (ptr === 0) return 0;
		return this.emulator.rdramReadF32(ptr + 0x7c);
	}

	set pos_z(val: number) {
		let ptr: number = this.instance();
		if (ptr === 0) return;
		this.emulator.rdramWriteF32(ptr + 0x7c, val);
	}
}