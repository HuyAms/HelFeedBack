import {UserGroup} from './App'

export enum FeedbackType {
	text = 'text',
	choice = 'choice',
}

export interface Feedback {
	channelId: string
	surveyId: string
	questionId?: string
	value: string
	userGroup: UserGroup
	type: FeedbackType
}
