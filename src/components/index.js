import React, { useState, useEffect } from 'react'

import { Main } from './main'

import englishData from '../../public/data.eng.json'
import spanishData from '../../public/data.esp.json'
import ErrorBoundary from '../util/common/error-boundary'

const Index = () => {
  const [isEnglish, setIsEnglish] = useState(navigator.language.slice(0, 2) === 'en')
  const [data, setData] = useState(isEnglish ? englishData : spanishData)

  useEffect(() => {
    if ((isEnglish && !data.isEnglish) || (!isEnglish && data.isEnglish)) {
      setData(isEnglish ? englishData : spanishData)
    }
  }, [isEnglish])

  return (
    <ErrorBoundary>
      <Main {...data} isEnglish={isEnglish} handleLanguageChange={setIsEnglish} />
    </ErrorBoundary>
  )
}

export default Index
