import { combineReducers } from 'redux'
import isAddReducer from './reducers/isAddReducer' 
import editedWorkReducer from './reducers/editedWorkReducer'
import renderedList from './reducers/renderedListReducer'
import dataReducer from './reducers/dataReducer';
import filterOrSortReducer from './reducers/filterOrSortReducer'
const todoApp = combineReducers({
    isAddReducer,
    editedWorkReducer,
    renderedList,
    dataReducer,
    filterOrSortReducer,
})

export default todoApp