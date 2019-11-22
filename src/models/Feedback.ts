import {UserGroup} from './App'

export interface Feedback {
	channelId: string
	surveyId: string
	questionId: string
	value: string
	userGroup: UserGroup
}
