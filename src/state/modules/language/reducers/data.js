import { handleActions } from 'redux-actions'
import { fromJS } from 'immutable'
import actionTypes from '../actionTypes'
import initialState from 'initialState'

const data = handleActions(
  {
    [actionTypes.IMPORT_DATA]: (_, action) => fromJS(action.payload)
  },
  initialState.get('data')
)

export default data
