import { useEffect, useState } from 'react'
import { AppRoutes } from './Routes'
import { GlobalStyle } from './styles/global'
import { access } from 'fs'
import Login from './pages/Login';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const getReturnedParamsFromSpotifyAuth = hash => {
    const stringAfterHashtag = hash.substring(1)
    const paramsInUrl = stringAfterHashtag.split('&')
    const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
      console.log(currentValue)
      const [key, value] = currentValue.split('=')
      accumulater[key] = value
      return accumulater
    }, {})
    return paramsSplitUp
  }

  useEffect(() => {
    if (window.location.hash) {
      const {
        access_token,
        expires_in,
        token_type,
      } = getReturnedParamsFromSpotifyAuth(window.location.hash);
      console.log({access_token});
    }
  })

//  if (window.localStorage.getItem('token')) {
//     setIsLogged(true);
//   }

  return (
    <>
      <GlobalStyle />
      {isLogged ? <AppRoutes /> : <Login /> }
      {/* <AppRoutes /> */}
    </>
  )
}

export default App
