import CardComponent from '../../components/CardComponent'
import SideBar from '../../components/SideBar'
import { CardRow, SearchContainer, SearchContent } from './style'

import { useState, useEffect } from 'react'

const CLIENT_ID = "";
const CLIENT_SECRET = "";

export default function Search() {
  const [searchInput, setSearchInput] = useState('');
  const [accessToken, setAccessToken] = useState('')
  const [albums, setAlbums] = useState([])

  useEffect (() => {
    // API Access Token
    const authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token))
  }, [])

  // API Search
  async function search() {
    // Get request using search to get artist ID
    const searchParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    }

    const ArtistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
      .then(result => result.json())
      .then(data => { return data.artists.items[0].id})

    
    // Get request with Artist ID to get artist albums
    const returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + ArtistID + '/albums' + '?include_groups=album&market=US&limit=50', searchParameters)
      .then(result => result.json())
      .then(data => {
        console.log(data)
        setAlbums(data.items)
      })

    // Display those albums to the users
  }

  return (
    <SearchContainer>
      <SideBar />

      <div className="ContentCard">
        <SearchContent>
          <input 
          type="input" 
          placeholder="Search for Artist" 
          onKeyPress={event => {
            if (event.key == "Enter") {
              search()
            }
          }}
          onChange={event => setSearchInput(event.target.value)}
          />
          <button onClick={search}>
            {' '}
            <span className="material-symbols-outlined">search</span>{' '}
          </button>
        </SearchContent>

        <CardRow>
          {albums.map( (album, i) => (
            <CardComponent key={i} title={album.name} image={album.images[0].url} url={album.external_urls.spotify} />
          ))}
        </CardRow>
      </div>
    </SearchContainer>
  )
}
