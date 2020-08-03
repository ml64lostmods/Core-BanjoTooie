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

// ##################################################################
// ##  Primary-Classes
// ##################################################################

export interface IPlayer {
	exists(): boolean;

	blue_eggs: number;
	fire_eggs: number;
	ice_eggs: number;
	grenade_eggs: number;
	cw_eggs: number;
	proximity_eggs: number;
	red_feathers: number;
	gold_feathers: number;
	glowbos: number;
	empty_honeycombs: number;
	cheato_pages: number;
	burgers: number;
	fries: number;
	tickets: number;
	doubloons: number;
	gold_idols: number;
	beans: number;
	fish: number;
	eggs: number;
	ice_keys: number;
	mega_glowbos: number;
}

export interface IRuntime {
	get_profile_hovering(): apiEnum.ProfileType;
	get_profile_selected(): apiEnum.ProfileType;

	getPlayerObject(): number;
	getCameraObject(): number;
	getPlayerSubObject(index: number): number;
	getCameraSubObject(index: number): number;

	XPosition: number;
	YPosition: number;
	ZPosition: number;
	XRotation: number;
	YRotation: number;
	ZRotation: number;
	CameraXPosition: number;
	CameraYPosition: number;
	CameraZPosition: number;

	getFloor(): number;

	current_map: number;
	map_destination: number;
	map_trigger: number;
	map_trigger_target: number;
	dcw_location: number;

	get_current_transformation_index(): number;
	current_health: number;
	max_health: number;

	get_jinjo(index: number): number;
	set_jinjo(index: number, value: number): void;
}

export interface ISaveContext {
	game_flags: IBuffered;
	global_flags: IBuffered;
}

export interface IBTCore {
	player: IPlayer;
	runtime: IRuntime;
	save: ISaveContext;
	version: apiEnum.GameVersion;

	isPlaying(): boolean;
}
