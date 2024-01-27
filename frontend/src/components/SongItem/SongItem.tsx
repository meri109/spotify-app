import axios from 'axios';
import * as React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import LikeButton from '../UI/LikeButton';

export interface ISongItemProps {
}

export default function SongItem (props: ISongItemProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [songsData, setSongsData] = React.useState([]);

  React.useEffect(() => {
    async function getSongsData(){
      const response = await axios.get('http://127.0.0.1:8000/api/songs/')
      setSongsData(response.data)
    }
    getSongsData()
  }, [])

  const togglePlay = () => {
    const targetAudio = document.getElementsByClassName("audioBtn")[0] as HTMLAudioElement;
    if (isPlaying){
      targetAudio.pause();
    } else{
      targetAudio.play();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <div>
        <div className='mt-5'>
            { songsData.map((item: any)=>(

                <div key={item.id} className='grid grid-cols-12 text-white/50 p-2 items-center hover:bg-white/10 duration-200 rounded-md group'>
                  <div className='col-span-6 flex gap-x-3 items-center'>
                    
                    <div>
                        <div className='w-5 visible group-hover:hidden'>{item.id}</div>
                        <div onClick={togglePlay} className='w-5 hidden group-hover:block'>
                          {isPlaying ? <PauseIcon /> : <PlayArrowIcon/>}
                          
                          </div>
                    </div>

                    <img className=' rounded-md w-full' style={{height:50, width:50, objectFit: 'cover'}} src={item.image} alt="" />
                    <div className=''>
                      <div className='text-white font-semibold'>{item.title}</div>
                      <div>{item.artist_info[0].first_name}</div>
                    </div>
                  </div>
                  <div className='col-span-4'>{item.genre_info[0].title}</div>
                  <div className='col-span-1'><LikeButton styles={{color: 'white', opacity: '50%'}}/></div>
                  <div className='col-span-1'>{item.duration}</div>
                  <audio className='audioBtn'  src={item.audio}></audio>
                  
                </div>
                
                ))}
        </div>
    </div>
  );
}
