import produce from 'immer'
import {startFetching, endWithError, updateData, Action} from './commons/common'
import useModuleActions from './commons/moduleActions'
import Category from '../models/Category'
import ModelState from '../models/bases/ModelState'
import { Feedback, FeedbackType } from "../models/Feedback";

// ------------------------------------
// Const
// ------------------------------------

const moduleName = 'feedbacks'
const path = 'api/channels'

const {moduleActionTypes, moduleActions} = useModuleActions(moduleName, path)

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: ModelState<Feedback[]> = {
  data: [],
  status: 'idle',
  error: null,
}

const feeedbacks = (state = initialState, action: Action<Category[]>) =>
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

export const reducer = feeedbacks

// ------------------------------------
// Actions
// ------------------------------------

export const getFeedbacks = (channelId: string, type: FeedbackType) => moduleActions.getModel(`${channelId}/feedback`, {type})
