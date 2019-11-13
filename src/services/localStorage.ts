export const setActiveSurveyId = (id: string) => {
	localStorage.setItem('activeSurveyId', id)
}

export const getActiveSurveyId = () => {
	return localStorage.getItem('activeSurveyId')
}

export const setChannelName = (name: string) => {
	localStorage.setItem('channelName', name)
}

export const getChannelName = () => {
	return localStorage.getItem('channelName')
}
