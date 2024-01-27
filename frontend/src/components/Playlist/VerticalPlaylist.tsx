import * as React from 'react';
import PlayButton from '../UI/PlayButton';

export interface IVerticalPlaylistProps {
}

export default function VerticalPlaylist (props: IVerticalPlaylistProps) {
  return (
    <div>
      <div className='p-3 bg-zinc-800/40 rounded-md hover:bg-zinc-800/90 duration-200 cursor-pointer relative group'>
        <div className='w-full'>
          <img className='w-full rounded-md' src="https://mosaic.scdn.co/300/ab67616d00001e02430debb283066ac6725483cfab67616d00001e024c614878cb234061701cac6cab67616d00001e02bdadcd027f57715adaa8b7f6ab67616d00001e02c5a010463c2b450902e57599" alt="" />
        </div>
        <div className='text-white text-md font-bold pt-4'>Daily Mix 1</div>
        <div className='text-zinc-400 text-sm pt-1'>Travis Scott, </div>
        <div className='absolute bottom-16 group-hover:bottom-20  right-1 opacity-0 group-hover:opacity-100 duration-200'>
          <PlayButton />
        </div>
      </div>
    </div>
  );
}
