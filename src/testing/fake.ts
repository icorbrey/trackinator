import { isDefined } from 'utils'

export const fake = <T>(value?: Partial<T>) =>
	isDefined(value)
		? value as T
		: {} as T
