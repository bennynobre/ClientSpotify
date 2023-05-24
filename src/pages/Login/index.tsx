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

  return (
    <div>
      <LoginContainer>
        {/* <img src="" alt="" /> */}
        <button onClick={handleClick}>Connect Spotify</button>
      </LoginContainer>
    </div>
  )
}
