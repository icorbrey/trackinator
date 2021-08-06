import { exists } from 'utils/exists'

describe('The exists() utility', () =>
{
	it('returns true when the value exists', () =>
	{
		expect(exists('This exists')).toBe(true)
		expect(exists(() => { })).toBe(true)
		expect(exists(1234)).toBe(true)
		expect(exists({})).toBe(true)
	})

	it('returns false when the value does not exist', () =>
	{
		expect(exists(undefined)).toBe(false)
		expect(exists(null)).toBe(false)
	})
})
