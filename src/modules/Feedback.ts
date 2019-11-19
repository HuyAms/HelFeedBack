import produce from 'immer'
import {
	startFetching,
	endWithError,
	updateData,
	Action,
	startSaving,
} from './commons/common'
import useModuleActions from './commons/moduleActions'
import ModelState from '../models/bases/ModelState'
import {Feedback} from '../models/Feedback'

// ------------------------------------
// Const
// ------------------------------------

const moduleName = 'feedback'
const path = '/feedbacks'

const {moduleActionTypes, moduleActions} = useModuleActions(moduleName, path)

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: ModelState<Feedback[]> = {
	data: [],
	status: 'idle',
	error: null,
}

const feedback = (state = initialState, action: Action<Feedback[]>) =>
	produce(state, draft => {
		switch (action.type) {
			case moduleActionTypes.CREATE_MODEL:
				startSaving(draft)
				break
			case moduleActionTypes.CREATE_MODEL_SUCCESS:
				updateData(draft, action.payload.data)
				break
			case moduleActionTypes.CREATE_MODEL_FAIL:
				endWithError(draft, action.error)
				break
		}
	})

export const reducer = feedback

// ------------------------------------
// Actions
// ------------------------------------

export const createFeedback = (feedback: Feedback) =>
	moduleActions.createModel(feedback)
