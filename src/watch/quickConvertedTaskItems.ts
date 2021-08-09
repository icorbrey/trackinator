import { Context } from 'probot'

export const quickConvertedTaskItems = (context: Context<'issues.opened'>) =>
{
	context.payload.issue.id
}
