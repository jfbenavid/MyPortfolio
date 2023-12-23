import { Main } from './main'
import { ErrorBoundary } from '../util/common/error-boundary'

const App = () => {
  const navLanguage = navigator.language.slice(0, 2)

  return (
    <ErrorBoundary>
      <Main navLanguage={navLanguage} />
    </ErrorBoundary>
  )
}

export default App
