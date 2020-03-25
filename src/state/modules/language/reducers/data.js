import { handleActions } from 'redux-actions'
import actionTypes from '../actionTypes'
import initialState from 'initialState'

const data = handleActions(
  {
    [actionTypes.IMPORT_DATA]: _ => {
      return { ..._ }
    }
  },
  initialState.get('data')
)

export default data
