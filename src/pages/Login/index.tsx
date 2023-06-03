import { useEffect } from 'react'
import { LoginContainer } from './style'
import { useNavigate } from 'react-router-dom'

export default function Login() {

  const navigate = useNavigate()

  const handleClick = () => {
    const CLIENT_ID = '614e8f9b79d3485db1cca84c7f4efe5a'
    const REDIRECT_URI = 'http://localhost:3333/'
    const apiUrl = 'https://accounts.spotify.com/authorize'
    const scopes = [
      'user-read-private',
      'user-read-email',
      'user-modify-playback-state',
      'user-read-playback-state',
      'user-read-currently-playing',
      'user-read-recently-played',
      'user-read-playback-position',
      'user-top-read',
      'user-library-read'
    ]
    window.location.href = `${apiUrl}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopes.join(
      ' '
    )}&response_type=token&show_dialog=true`
  }

  //https://accounts.spotify.com/authorize?client_id=614e8f9b79d3485db1cca84c7f4efe5a&redirect_uri=https://clientspotify-mil6q7uika-rj.a.run.app//&scope=user-read-private%20user-read-email%20user-modify-playback-state%20user-read-playback-state%20user-read-currently-playing%20user-read-recently-played%20user-read-playback-position%20user-top-read&response_type=token&show_dialog=true

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
      navigate('/Home')
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
