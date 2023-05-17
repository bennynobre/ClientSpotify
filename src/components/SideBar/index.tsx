import { SideBarContainer } from './style'

export default function SideBar() {
  return (
    <SideBarContainer>
      <h1> SearchFy </h1>
      <ul>
        <li>
          <span className="material-symbols-outlined">home</span>
          Home{' '}
        </li>
        <li>
          <span className="material-symbols-outlined">search</span>
          <a href="/">Search</a>
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
