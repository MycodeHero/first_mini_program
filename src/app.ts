import { FC } from 'react'
import './app.scss'

interface AppProps {
  children?: JSX.Element
}
const App: FC<AppProps> = props => {
  const { children = null } = props

  return children
}

export default App
