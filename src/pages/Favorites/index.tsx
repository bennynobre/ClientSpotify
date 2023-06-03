import { useEffect, useState } from 'react'
import { FavoritesContainer, FavoritesContent } from './style'

import axios from 'axios'
import TopTracksComponent from '../../components/TopTracksComponent'
import SideBar from '../../components/SideBar'

export default function Favorites() {
  const [token, setToken] = useState('')
  const [data, setData] = useState([])

  const USER_SAVED_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/tracks'

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))
    }
  }, [])

  const GetLikedTracks = () => {
    axios
      .get(USER_SAVED_TRACKS_ENDPOINT, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      .then(response => {
        setData(response.data)
        console.log(response.data)
      })
  }

  useEffect(() => {
    GetLikedTracks()
  }, [token])

  return (
    <FavoritesContainer>
      <SideBar />
      <FavoritesContent>
        {data.items
          ? data.items.map((item, i) => {
              return (
                <TopTracksComponent key={i} title={item.track.name} index={i + 1} />
              )
            })
          : null}
      </FavoritesContent>
    </FavoritesContainer>
  )
}
