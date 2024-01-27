import axios from 'axios';
import * as React from 'react';
import StarIcon from '@mui/icons-material/Star';


export interface IPlaylistItemProps {
}

export default function PlaylistItem (props: IPlaylistItemProps) {
    const [playlistList, setPlaylistList] = React.useState([])

    React.useEffect(() => {
        async function getPlaylist(){
            const response = await axios.get('http://127.0.0.1:8000/api/playlist/')
            setPlaylistList(response.data)
        }
        getPlaylist()
    }, [])
    // console.log(playlistList);

  return (
    <div>
          {playlistList.map((item: any) => (

              <div key={item.id} className='m-2 p-3 flex gap-2 hover:bg-white/10 duration-200 rounded-md'>
                  <div className='w-14'>
                      <img className='h-full rounded-sm w-full' style={{ height: 50, width: 50, objectFit: 'cover' }} src={item.image} alt="" />
                  </div>
                  <div className='flex flex-col text-left'>
                      <div className='text-white'>{item.title}</div>
                      <div className='flex text-white/40 gap-2'>
                          <div>Playlist</div>
                          <div><StarIcon style={{ fontSize: 10, color: 'white' }} /></div>
                          <div>{item.author.username}</div>

                      </div>
                  </div>

              </div>

          ))}
    </div>
  );
}
