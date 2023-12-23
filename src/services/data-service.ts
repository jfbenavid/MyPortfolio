import { portfolio } from "types"

export const getData = async (isNotSpanish: boolean) => {
  let result: portfolio = {}
  try {
    const route = isNotSpanish ? 'english' : 'spanish'
    const data = await fetch(`./data/${route}.json`)
    result = await data.json() as portfolio
  } catch (error) {
    console.error('An error has occurred while getting portfolio data', error)
  }

  return result
}
