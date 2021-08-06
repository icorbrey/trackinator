import { exists } from 'utils'

export const fake = <T>(value?: Partial<T>) =>
	exists(value)
		? value as T
		: {} as T
