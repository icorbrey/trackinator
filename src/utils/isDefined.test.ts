import { isDefined } from 'utils'

describe('The exists() utility', () =>
{
	it('returns true when the value exists', () =>
	{
		expect(isDefined('This exists')).toBe(true)
		expect(isDefined(() => { })).toBe(true)
		expect(isDefined(1234)).toBe(true)
		expect(isDefined({})).toBe(true)
	})

	it('returns false when the value does not exist', () =>
	{
		expect(isDefined(undefined)).toBe(false)
		expect(isDefined(null)).toBe(false)
	})
})
