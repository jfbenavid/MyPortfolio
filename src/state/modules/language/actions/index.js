import { createAction } from 'redux-actions'
import actionTypes from '../actionTypes'

export const changeLanguage = createAction(actionTypes.CHANGE_LANGUAGE)
export const updateData = createAction(actionTypes.IMPORT_DATA)
