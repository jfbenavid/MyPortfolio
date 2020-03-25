import { fromJS } from 'immutable'
import data from 'portfolio/data.eng.json'

const initialState = fromJS({
  data: { ...data },
  english: true
})

export default initialState
