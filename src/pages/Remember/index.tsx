import SideBar from '../../components/SideBar'
import { useState, useEffect } from 'react'

import axios from 'axios'

import {
  RememberContainer,
  RememberContent,
  RememberHeader,
  TopTracksColumn
} from './style'
import TopTracksComponent from '../../components/TopTracksComponent'

export default function Remember() {
  const [token, setToken] = useState('')
  const [data, setData] = useState([])

  const TOPTRACKS_ENDPOINT =
    'https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5'

    const PLAYLIST_ENDPOINT = 'https://api.spotify.com/v1/me/playlists?limit=5'

    const ARTISTS_ENDPOINT = 'https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=5'

    const GENDERS_ENDPOINT = 'https://api.spotify.com/v1/browse/categories?limit=5'

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))
    }
  }, [])

  const GetTopTracks = () => {
    axios
      .get(TOPTRACKS_ENDPOINT, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      .then(response => {
        setData(response.data)
        console.log(response.data)
      })
  }

  const GetPlayLists = () => {
    axios
      .get(PLAYLIST_ENDPOINT, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      .then(response => {
        setData(response.data)
      })
  }

  const GetArtists = () => {
    axios
      .get(ARTISTS_ENDPOINT, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      .then(response => {
        setData(response.data)
      })
  }


  return (
    <RememberContainer>
      <SideBar />
      <RememberContent>
        <RememberHeader>
          <button onClick={GetTopTracks}>TopTracks</button>
          <button onClick={GetPlayLists}>TopPlayLists</button>
          <button onClick={GetArtists}>TopArtists</button>
        </RememberHeader>

        <TopTracksColumn>
          {data.items
            ? data.items.map((item, i) => {
                return <TopTracksComponent key={i} title={item.name} index={i+1} />
              })
            : null}
        </TopTracksColumn>
      </RememberContent>
    </RememberContainer>
  )
}
