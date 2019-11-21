export default interface App {
	activeSurveyId: string
	userGroup: UserGroup
}

export enum UserGroup {
	adult = 'adult',
	child = 'child',
}
