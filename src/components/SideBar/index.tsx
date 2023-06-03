import { useNavigate } from 'react-router-dom'
import { SideBarContainer } from './style'

export default function SideBar() {
  const navigate = useNavigate()

  return (
    <SideBarContainer>
      <h1> SearchFy </h1>
      <ul>
        <li>
          <h1 onClick={() => navigate('/Home')}>
            <span className="material-symbols-outlined">home</span> Home
          </h1>
        </li>
        <li>
          <h1 onClick={() => navigate('/Search')}>
            <span className="material-symbols-outlined">search</span> Search
          </h1>
        </li>
        <li>
          <h1
            onClick={() => {navigate('/Favorites')}}
          >
            <span className="material-symbols-outlined">favorite</span>
            Favorites{' '}
          </h1>
        </li>
        <li>
          <h1
            onClick={() => {navigate('/Remember')}}
          >
            <span className="material-symbols-outlined">travel_explore</span>
            Remember
          </h1>
        </li>
        <li>
          <h1
            onClick={() => {
              window.localStorage.clear(), navigate('/')
            }}
          >
            <span className="material-symbols-outlined">logout</span>
            Logout
          </h1>
        </li>
      </ul>
    </SideBarContainer>
  )
}
