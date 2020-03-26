import { fromJS } from 'immutable'
import englishData from 'portfolio/data.eng.json'
import spanishData from 'portfolio/data.esp.json'

const english = navigator.language.slice(0, 2) === 'en'
const data = english ? englishData : spanishData

const initialState = fromJS({
  data: { ...data },
  english: english
})

export default initialState
