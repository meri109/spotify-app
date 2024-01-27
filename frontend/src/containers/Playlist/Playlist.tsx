import * as React from 'react';
import { useParams } from 'react-router-dom';
import PlayButton from '../../components/UI/PlayButton';
import { Divider, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LikeButton from '../../components/UI/LikeButton';
import SongItem from '../../components/SongItem/SongItem';

export interface IPlaylistProps {
}

export default function Playlist (props: IPlaylistProps) {
  const {id, slug} = useParams();

  return (
    <div className=''>
    <div className='pt-24 p-10 bg-gradient-to-b from-yellow-600 to-slate-800/100'>
      <div className='flex gap-6 '>
        <div className=''>
          <img className='h-full w-60 rounded-sm object-cover shadow-2xl shadow-slate-900' style={{height:240, width:240, objectFit: 'cover'}} src="https://mosaic.scdn.co/300/ab67616d00001e02430debb283066ac6725483cfab67616d00001e024c614878cb234061701cac6cab67616d00001e02bdadcd027f57715adaa8b7f6ab67616d00001e02c5a010463c2b450902e57599" alt="" />
        </div>

        <div className='flex flex-col justify-end gap-10 text-white'>
            <div>
              <div className=''>Playlist</div>
              <div className='font-bold text-8xl'>Jazzy nights</div>
            </div>

            <div className='flex gap-3'>
              <div className=''>Angie</div>
              <div className=''>50 songs, 1 hr 40 min</div>
            </div>
          </div>
        </div>
      </div>
      
        <div className=''>
          <div className='flex align-baseline pl-5 pr-5 bg-gradient-to-b from-slate-800/70 items-center'>
            <PlayButton />
            <LikeButton classname={'hover:opacity-30 duration-200'} styles={{fontSize: 50, color: 'white'}} />
            <IconButton aria-label='favorite' size='large' className='hover:opacity-30 duration-200'>
               <MoreHorizIcon fontSize='inherit' style={{fontSize: 40, color: 'white'}} />
            </IconButton>
          </div>

          <div className='ml-5 mr-5'>
              <div className='grid grid-cols-12 text-white/50 p-2'>
                <div className='col-span-6'># Title</div>
                <div className='col-span-5'>Genre</div>
                <div className='col-span-1'>Duration</div>
              </div>
            <Divider className='bg-neutral-700'/>
          <SongItem />

          </div>

        </div>
    </div>
  );
}
