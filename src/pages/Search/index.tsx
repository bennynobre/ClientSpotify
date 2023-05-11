import { SearchContainer, SearchContent } from './style'

export default function Search() {
  return (
    <SearchContainer>
      <SearchContent>
        <input type="text" placeholder="Pesquise o seu artista" />
        <button> Search </button>
      </SearchContent>
    </SearchContainer>
  )
}
