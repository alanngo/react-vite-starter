import { Optional, OptionalAny, OptionalArray, OptionalBoolean, OptionalNumber, OptionalObject, OptionalString } from "../types/optional";
import { BLANK, EMPTY_ARRAY, EMPTY_OBJ } from "../constants";

// optionals 
export const optional = <T>(arg: Optional<T>, fallback: T): T => arg || fallback
export const optionalAny = (arg: OptionalAny, fallback: any): any => optional(arg, fallback)
export const optionalObject = (arg: OptionalObject, fallback: Object = EMPTY_OBJ): Object => optional<Object>(arg, fallback)
export const optionalArray = <T>(arg: OptionalArray<T>, fallback: T[] = EMPTY_ARRAY): T[] => optional<T[]>(arg, fallback)
export const optionalNumber = (arg: OptionalNumber, fallback: number = 1): number => optional<number>(arg, fallback)
export const optionalBoolean = (arg: OptionalBoolean, fallback: boolean = true): boolean => optional<boolean>(arg, fallback)
export const optionalString = (arg: OptionalString, fallback: string = BLANK): string => optional<string>(arg, fallback)

// update states
export const updateState = <T>(state: Optional<T>, key: string, value: any): OptionalObject => (optionalObject({ ...state, [`${key}`]: value }))

// sorting criteria
export const ascending = <E>(a: E, b: E): number => (a === b ? 0 : (a > b ? 1 : -1))
export const descending = <E>(a: E, b: E): number => (a === b ? 0 : (a < b ? 1 : -1))

//other
export const blankClick = (): void => { }
