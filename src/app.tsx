import React, {FC} from 'react'

import Router from './routes'
import {WordProvider} from './contexts/word'

const App: FC = () => (
  <WordProvider>
    <Router />
  </WordProvider>
)

export default App
