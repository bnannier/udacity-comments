import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

// list of reducers
import categoriesReducer from './Categories/Reducer'
import postsReducer from './Posts/Reducer'

export default combineReducers({
    routing: routerReducer,
    categories: categoriesReducer,
    posts: postsReducer
})