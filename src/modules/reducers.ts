/**
 * Root reducer
 *
 * @author Huy Trinh <dinhhuyams@gmail.com>
 *
 */

import {combineReducers} from 'redux'
import {reducer as surveyReducer} from './Survey'
import {reducer as channelReducer} from './Channel'
import {reducer as categoriesReducer} from './Categories'

const rootReducer = () =>
	combineReducers({
		survey: surveyReducer,
		channel: channelReducer,
		categories: categoriesReducer,
	})

export default rootReducer
