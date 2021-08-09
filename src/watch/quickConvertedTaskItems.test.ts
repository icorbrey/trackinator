import { quickConvertedTaskItems } from 'watch'
import { Context, Probot } from 'probot'
import { fake } from 'testing'

describe('The quick-converted task item watcher', () =>
{
	it('exists', () =>
	{
		const context = fake<Context<'issues.opened'>>({
			payload: {
				issue: {
					id: 1234
				}
			}
		})

		quickConvertedTaskItems(context)
	})
})
