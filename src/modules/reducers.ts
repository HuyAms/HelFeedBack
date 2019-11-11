/**
 * Root reducer
 *
 * @author Huy Trinh <dinhhuyams@gmail.com>
 *
 */

import {combineReducers} from 'redux'
import {reducer as surveyReducer} from './Survey'
import {reducer as channelReducer} from './Channel'

const rootReducer = () =>
	combineReducers({
		survey: surveyReducer,
		channel: channelReducer,
	})

export default rootReducer
