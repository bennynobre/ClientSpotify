import SideBar from '../../components/SideBar'
import GifImg from '../../assets/gif.gif'
import { HomeContainer } from './style'

export default function Home() {
  return (
    <HomeContainer>
      <SideBar />
      <div className='ContentContainer'>
        <h1>Parece que você ainda não pesquisou nada!</h1>
        <img src={GifImg} alt="Gif" />
      </div>
    </HomeContainer>
  )
}
