import { RecursivePartial } from 'types'
import { isDefined } from 'utils'

export const fake = <T>(value?: RecursivePartial<T>) =>
	isDefined(value)
		? value as T
		: {} as T
