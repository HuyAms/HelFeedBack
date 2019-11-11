export const setActiveSurveyId = (id: string) => {
	localStorage.setItem('activeSurveyId', id)
}

export const getActiveSurveyId = () => {
	localStorage.getItem('activeSurveyId')
}
