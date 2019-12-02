import produce from 'immer'
import {startFetching, endWithError, updateData, Action} from './commons/common'
import useModuleActions from './commons/moduleActions'
import Channel from '../models/Channel'
import ModelState from '../models/bases/ModelState'

// ------------------------------------
// Const
// ------------------------------------

const moduleName = 'channels'
const path = 'api/channels'

const {moduleActionTypes, moduleActions} = useModuleActions(moduleName, path)

// ------------------------------------
// Reducer
// ------------------------------------

const initialState: ModelState<Channel> = {
  data: null,
  status: 'idle',
  error: null,
}

const channels = (state = initialState, action: Action<Channel>) =>
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

export const reducer = channels

// ------------------------------------
// Actions
// ------------------------------------

export const getChannels = () => moduleActions.getModel()
