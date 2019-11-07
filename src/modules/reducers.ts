/**
 * Root reducer
 *
 * @author Huy Trinh <dinhhuyams@gmail.com>
 *
 */

import {combineReducers} from 'redux'
import {reducer as postsReducer} from './Posts'

const rootReducer = () =>
	combineReducers({
		posts: postsReducer,
	})

export default rootReducer
