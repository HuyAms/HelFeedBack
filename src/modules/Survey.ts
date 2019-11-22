import produce from 'immer'
import {startFetching, endWithError, updateData, Action} from './commons/common'
import useModuleActions from './commons/moduleActions'
import Survey from '../models/Survey'
import ModelState from '../models/bases/ModelState'

// ------------------------------------
// Const
// ------------------------------------

const moduleName = 'survey'
const path = 'api/surveys'

const {moduleActionTypes, moduleActions} = useModuleActions(moduleName, path)

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: ModelState<Survey> = {
	data: null,
	status: 'idle',
	error: null,
}

const survey = (state = initialState, action: Action<Survey>) =>
	produce(state, draft => {
		switch (action.type) {
			case moduleActionTypes.GET_MODEL:
				startFetching(draft)
				break
			case moduleActionTypes.GET_MODEL_SUCCESS:
				updateData(draft, action.payload.data)
				break
			case moduleActionTypes.GET_MODEL_FAIL:
				endWithError(draft, action.error)
				break
		}
	})

export const reducer = survey

// ------------------------------------
// Actions
// ------------------------------------

export const getSurvey = (id: string) => moduleActions.getModel(id)
