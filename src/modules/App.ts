import App, {UserGroup} from '../models/App'
import produce from 'immer'
import {createAction} from './commons/common'

// ------------------------------------
// Const
// ------------------------------------
const moduleName = 'app'

// ------------------------------------
// Action Creator
// ------------------------------------

const types = {
	SET_ACTIVE_SURVEY_ID: `@@${moduleName}/SET_ACTIVE_SURVEY_ID`,
	SET_ACTIVE_USER_GROUP: `@@${moduleName}/SET_ACTIVE_USER_GROUP`,
}

const actions = {
	setActiveSurveyId: createAction(types.SET_ACTIVE_SURVEY_ID),
	setUserGroup: createAction(types.SET_ACTIVE_USER_GROUP),
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: App = {
	activeSurveyId: null,
	userGroup: null,
}

const app = (state = initialState, action) =>
	produce(state, draft => {
		switch (action.type) {
			case types.SET_ACTIVE_SURVEY_ID:
				draft.activeSurveyId = action.payload
				break
			case types.SET_ACTIVE_USER_GROUP:
				draft.userGroup = action.payload
				break
		}
	})

export const reducer = app

// ------------------------------------
// Actions
// ------------------------------------

export const setActiveSurveyId = (activeSurveyId: string) => {
	return actions.setActiveSurveyId(activeSurveyId)
}

export const setUserGroup = (userGroup: UserGroup) => {
	return actions.setUserGroup(userGroup)
}
