import React, { useState, useEffect } from 'react'

import Header from './header'
import { Main } from './main'

import englishData from 'portfolio/data.eng.json'
import spanishData from 'portfolio/data.esp.json'

const Index = () => {
  const [isEng, setIsEng] = useState(navigator.language.slice(0, 2) === 'en')
  const [data, setData] = useState(isEng ? englishData : spanishData)

  useEffect(() => {
    if ((isEng && !data.isEnglish) || (!isEng && data.isEnglish)) {
      setData(isEng ? englishData : spanishData)
    }
  }, [isEng])

  return (
    <>
      <Header
        headerData={data && data.header}
        handleLanguageChange={setIsEng}
        english={isEng}
      />
      <Main mainInfo={data.mainInfo} />
    </>
  )
}

export default Index
