import App from '../models/App'
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
}

const actions = {
	setActiveSurveyId: createAction(types.SET_ACTIVE_SURVEY_ID),
}

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: App = {
	activeSurveyId: null,
}

const app = (state = initialState, action) =>
	produce(state, draft => {
		switch (action.type) {
			case types.SET_ACTIVE_SURVEY_ID:
				draft.activeSurveyId = action.payload
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
