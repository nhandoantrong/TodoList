import { combineReducers } from 'redux'
import isAddReducer from './reducers/isAddReducer' 
import editedWorkReducer from './reducers/editedWorkReducer'
const todoApp = combineReducers({
    isAddReducer,
    editedWorkReducer
})

export default todoApp