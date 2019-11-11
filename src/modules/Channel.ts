import produce from 'immer'
import {startFetching, endWithError, updateData, Action} from './commons/common'
import useModuleActions from './commons/moduleActions'
import Channel from '../models/Channel'
import ModelState from '../models/bases/ModelState'

// ------------------------------------
// Const
// ------------------------------------

const moduleName = 'channel'
const path = '/channels'

const {moduleActionTypes, moduleActions} = useModuleActions(moduleName, path)

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: ModelState<Channel> = {
	data: null,
	status: 'idle',
	error: null,
}

const channel = (state = initialState, action: Action<Channel>) =>
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

export const reducer = channel

// ------------------------------------
// Actions
// ------------------------------------

export const getChannel = (name: string) => moduleActions.getModel(name)
