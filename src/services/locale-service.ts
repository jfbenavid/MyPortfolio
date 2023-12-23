export const getLocaleData = async (isNotSpanish: boolean) : Promise<Record<string, string>> => {
  try {
    const route = isNotSpanish ? 'english' : 'spanish'
    const data = await fetch(`./locale/${route}.json`)
    return await data.json() as unknown as Record<string, string>
  } catch (error) {
    console.error('An error has occurred while getting locale data', error)
  }

  return {} as Record<string, string>
}