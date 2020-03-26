import { handleActions } from 'redux-actions'
import actionTypes from '../actionTypes'
import initialState from 'initialState'

const english = handleActions(
  {
    [actionTypes.CHANGE_LANGUAGE]: isEnglish => !isEnglish
  },
  initialState.get('english')
)

export default english
