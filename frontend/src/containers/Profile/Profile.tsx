import axios from 'axios';
import * as React from 'react';
import { useParams } from 'react-router-dom';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LikeButton from '../../components/UI/LikeButton';
import PlayButton from '../../components/UI/PlayButton';
import { IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


export interface IProfileProps {
}

export default function Profile (props: IProfileProps) {
    const {id} = useParams();

    const [artistData, setArtistData]: any = React.useState({})
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [songsData, setSongsData] = React.useState([]);
  
  
    const togglePlay = () => {
      const targetAudio = document.getElementsByClassName("audioBtn")[0] as HTMLAudioElement;
      if (isPlaying){
        targetAudio.pause();
      } else{
        targetAudio.play();
      }
      setIsPlaying(!isPlaying);
    }

    React.useEffect(() => {
        async function getArtistData(){
            const response = await axios.get(`http://127.0.0.1:8000/api/artist/${id}/`);
            setArtistData(response.data);
            setSongsData(response.data.songs)
        }
        getArtistData();
    }, [])

  return (
    <>
        <div className=''>
            <div className='pt-24 p-10 bg-gradient-to-b from-yellow-600 to-slate-800/100'>
                {artistData && (
                    <div key={artistData.id} className='flex gap-6 '>
                        <div className=''>
                        <img className='h-full w-60 rounded-full object-cover shadow-2xl shadow-slate-900' style={{height:240, width:240, objectFit: 'cover'}} src={artistData.image} alt="" />
                        </div>

                        <div className='flex flex-col justify-end gap-10 text-white'>
                            <div>
                            <div className=''>Artist</div>
                            <div className='font-bold text-8xl'>{artistData.first_name}</div>
                            </div>

                            <div className=''>
                            <div className=''>50 listeners</div>
                            </div>
                        </div>
                    </div>
                )}
        </div>
          <div>
            <div className='flex align-baseline pl-5 pr-5 bg-gradient-to-b from-slate-800/70 items-center'>
                <PlayButton />
                <LikeButton classname={'hover:opacity-30 duration-200'} styles={{fontSize: 50, color: 'white'}} />
                <IconButton aria-label='favorite' size='large' className='hover:opacity-30 duration-200'>
                  <MoreHorizIcon fontSize='inherit' style={{fontSize: 40, color: 'white'}} />
                </IconButton>
              </div>
          </div>
          <div className='mt-5' style={{width: '1000px'}}>
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
                        <div>{item.artist_info}</div>
                      </div>
                    </div>
                    <div className='col-span-4'>{item.genre_info}</div>
                    <div className='col-span-1'><LikeButton styles={{color: 'white', opacity: '50%'}}/></div>
                    <div className='col-span-1'>{item.duration}</div>
                    <audio className='audioBtn'  src={item.audio}></audio>
                    
                  </div>
                  
                  ))}
          </div>
        </div>
        
        
    </>
  );
}
