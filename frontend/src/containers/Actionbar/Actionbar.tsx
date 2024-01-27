import * as React from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MediaPlayer from '../../components/MediaPlayer/MediaPlayer';
import VolumeControl from '../../components/VolumeControl/VolumeControl';
import axios from 'axios';

export interface IActionbarProps {
}

export default function Actionbar (props: IActionbarProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [songsData, setSongsData] : any = React.useState({});

  React.useEffect(() => {
    async function getSongsData(){
      const response = await axios.get('http://127.0.0.1:8000/api/song/4/')
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

  console.log(songsData.artist_title);
  


  return (
    
    <div className='absolute bottom-0 py-4 w-full bg-black flex pl-5 pr-5 gap-80'>
      <div className="flex-none grid items-center text-white ">
        {songsData &&
        <div key={songsData.id} className='h-14 flex gap-x-3 cursor-pointer'>
            <div className='h-full'>
              <img className='h-full rounded-md' style={{height:50, width:50, objectFit: 'cover'}} src={songsData.image} alt="" />
            </div>
            <div className='flex flex-col'>
                <div className='grow flex flex-wrap content-center text-white text-md '>{songsData.title}</div>
                {songsData && songsData.artist_title && songsData.artist_title.length > 0 && (
                  <div className='grow flex flex-wrap text-zinc-400 text-xs '>{songsData.artist_title[0].first_name}</div>
                )}

            </div>
            <div className='flex flex-wrap content-center'>
                <FavoriteBorderOutlinedIcon  />
            </div>
        </div>
        }

      </div>
      <div className="grow text-white text-center">
        <MediaPlayer />
      </div>
      <div className="flex-none grid content-center w-40 text-white ">
        <VolumeControl />
      </div>
    </div>    
    
  );
}
