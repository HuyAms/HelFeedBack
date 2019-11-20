import produce from 'immer'
import {startFetching, endWithError, updateData, Action} from './commons/common'
import useModuleActions from './commons/moduleActions'
import Category from '../models/Category'
import ModelState from '../models/bases/ModelState'

// ------------------------------------
// Const
// ------------------------------------

const moduleName = 'categories'
const path = 'api/categories'

const {moduleActionTypes, moduleActions} = useModuleActions(moduleName, path)

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: ModelState<Category[]> = {
	data: [],
	status: 'idle',
	error: null,
}

const categories = (state = initialState, action: Action<Category[]>) =>
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

export const reducer = categories

// ------------------------------------
// Actions
// ------------------------------------

export const getCategories = () => moduleActions.getModel()
