import produce from 'immer'
import {
	endWithError,
	updateData,
	Action,
	startSaving,
} from './commons/common'
import useModuleActions from './commons/moduleActions'
import ModelState from '../models/bases/ModelState'
import {Feedback} from '../models/Feedback'
import Auth from '../models/Auth'
import {getToken, getUserId} from '../services/localStorage'

// ------------------------------------
// Const
// ------------------------------------

const moduleName = 'auth'
const path = '/auth'

const {moduleActionTypes, moduleActions} = useModuleActions(moduleName, path)

// ------------------------------------
// Reducer
// ------------------------------------

const initialAuth: Auth = {
	token: getToken(),
	userId: getUserId(),
}

const initialState: ModelState<Auth> = {
	data: initialAuth,
	status: 'idle',
	error: null,
}

const auth = (state = initialState, action: Action<Feedback[]>) =>
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

export const reducer = auth

// ------------------------------------
// Actions
// ------------------------------------

export const login = (email: string, password: string) =>
	moduleActions.createModel({email, password}, 'signin')
