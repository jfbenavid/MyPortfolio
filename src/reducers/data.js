import english from '../portfolio/data.eng.json'
import spanish from '../portfolio/data.esp.json'

const changeLanguage = state => {
  if (state.english) {
    return {
      data: { ...spanish },
      english: false
    }
  }

  return {
    data: { ...english },
    english: true
  }
}

function data (state, action) {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return changeLanguage(state)

    default:
      return state
  }
}

export default data
