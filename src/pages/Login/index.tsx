import { useEffect } from 'react'
import { LoginContainer } from './style'

export default function Login() {
  const handleClick = () => {
    const CLIENT_ID = ''
    const REDIRECT_URI = 'http://localhost:5173/'
    const apiUrl = 'https://accounts.spotify.com/authorize'
    const scopes = [
      'user-read-private',
      'user-read-email',
      'user-modify-playback-state',
      'user-read-playback-state',
      'user-read-currently-playing',
      'user-read-recently-played',
      'user-read-playback-position',
      'user-top-read'
    ]
    window.location.href = `${apiUrl}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopes.join(
      ' '
    )}&response_type=token&show_dialog=true`
  }

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
      window.localStorage.setItem('token', access_token)
    }
  })

  return (
    <div>
      <LoginContainer>
        {/* <img src="" alt="" /> */}
        <button onClick={handleClick}>Connect Spotify</button>
      </LoginContainer>
    </div>
  )
}
