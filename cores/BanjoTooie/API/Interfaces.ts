import * as apiEnum from './Enums';

// ##################################################################
// ##  Sub-Classes
// ##################################################################

export interface IBuffered {
	get_all(): Buffer;
	set_all(value: Buffer): void;
	get_bit(flag: number): boolean;
	set_bit(flag: number, value: boolean): void;
	get(offset: number): number;
	set(offset: number, value: number): void;
}

export interface ICommandBuffer {
	runCommand(
		command: apiEnum.CMD,
		index: number,
		callback?: Function
	): void;
}

export interface IInventory {
	eggs: IEggs;

	beans: number;
	burgers: number;
	cheato_pages: number;
	doubloons: number;
	fish: number;
	fries: number;
	glowbos: number;
	glowbo_mega: number;
	gold_feathers: number;
	gold_idols: number;
	honeycombs: number;
	ice_key: number;
	red_feathers: number;
	stop_n_swap_eggs: number;
	tickets: number;
}

export interface IEggs {
	plain: number;
	fire: number;
	ice: number;
	grenade: number;
	clockwork: number;
	proximity: number;
}

// ##################################################################
// ##  Primary-Classes
// ##################################################################

export interface ICamera {
	exists(): boolean;
	instance(): number;

	position: Buffer;
	pos_x: number;
	pos_y: number;
	pos_z: number;
	// rotation: Buffer;
	// rot_x: number;
	// rot_y: number;
	// rot_z: number;
}

export interface IPlayer {
	exists(): boolean;
	instance(): number;

	animation: Buffer;
	anim_frame: number;
	anim_id: number;
	flip_facing: boolean;
	model_index: number;
	model_ptr: number;
	position: Buffer;
	pos_x: number;
	pos_y: number;
	pos_z: number;
	rotation: Buffer;
	rot_x: number;
	rot_y: number;
	rot_z: number;

	rot_y_angle(): number;
	get_floor(): number;
}

export interface IRuntime {
	get_current_profile(): apiEnum.ProfileType;
	get_profile_hovering(): apiEnum.ProfileType;
	get_profile_selected(): apiEnum.ProfileType;

	current_health: number;
	max_health: number;
	
	current_scene: number;
	dcw_location: number;

	is_loading(): boolean;
	goto_scene(scene: number): void;
}

export interface ISaveContext {
	inventory: IInventory;
	flags_game: IBuffered;
	flags_global: IBuffered;
}

export interface IBTCore {
	camera: ICamera;
	player: IPlayer;
	runtime: IRuntime;
	save: ISaveContext;
	version: apiEnum.GameVersion;

	commandBuffer: ICommandBuffer;

	isPlaying(): boolean;
}
