import { SideBarContainer } from './style'

export default function SideBar() {
  return (
    <SideBarContainer>
      <h1> SearchFy </h1>
      <ul>
        <li>
          <a href="/">
            <span className="material-symbols-outlined">home</span> Home
          </a>
        </li>
        <li>
          <a href="/Search">
            <span className="material-symbols-outlined">search</span> Search
          </a>
        </li>
        <li>
          <span className="material-symbols-outlined">favorite</span>
          Favorites{' '}
        </li>
        <li>
          <span className="material-symbols-outlined">travel_explore</span>
          Remember
        </li>
      </ul>
    </SideBarContainer>
  )
}
