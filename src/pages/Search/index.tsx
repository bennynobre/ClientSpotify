import CardComponent from '../../components/CardComponent'
import SideBar from '../../components/SideBar'
import { CardRow, SearchContainer, SearchContent } from './style'

export default function Search() {
  const fakeAPi = [
    {
      id: 1,
      name: 'Album 1',
      image: 'https://source.unsplash.com/random/50x50?sig=1'
    },
    {
      id: 2,
      name: 'Album 2',
      image: 'https://source.unsplash.com/random/50x50?sig=2'
    },
    {
      id: 3,
      name: 'Album 3',
      image: 'https://source.unsplash.com/random/50x50?sig=3'
    },
    {
      id: 4,
      name: 'Album 4',
      image: 'https://source.unsplash.com/random/50x50?sig=4'
    },
    {
      id: 5,
      name: 'Album 5',
      image: 'https://source.unsplash.com/random/50x50?sig=5'
    },
    {
      id: 6,
      name: 'Album 6',
      image: 'https://source.unsplash.com/random/50x50?sig=6'
    },
    {
      id: 7,
      name: 'Album 7',
      image: 'https://source.unsplash.com/random/50x50?sig=7'
    },
    {
      id: 8,
      name: 'Album 8',
      image: 'https://source.unsplash.com/random/50x50?sig=8'
    },
    {
      id: 9,
      name: 'Album 9',
      image: 'https://source.unsplash.com/random/50x50?sig=9'
    },
    {
      id: 10,
      name: 'Album 10',
      image: 'https://source.unsplash.com/random/50x50?sig=10'
    }
  ]

  return (
    <SearchContainer>
      <SideBar />

      <div className="ContentCard">
        <SearchContent>
          <input type="text" placeholder="Search for Artist" />
          <button>
            {' '}
            <span className="material-symbols-outlined">search</span>{' '}
          </button>
        </SearchContent>

        <CardRow>
          {fakeAPi.map(({id, name, image}) => (
            <CardComponent key={id} title={name} image={image} />
          ))}
        </CardRow>
        <h1>ola</h1>
      </div>
    </SearchContainer>
  )
}
