import * as React from 'react';
import VerticalPlaylist from '../../components/Playlist/VerticalPlaylist';
import HorizontalPlaylist from '../../components/Playlist/HorizontalPlaylist';

export interface IHomeProps {
}

export default function Home (props: IHomeProps) {
  return (
    <div className='pt-24 p-5'>
      <div>
      <div className='text-white font-bold text-3xl'>Good Afternoon</div>
        <div className='pt-5 grid grid-cols-3 gap-4'>
            <HorizontalPlaylist />

        </div>
      </div>

      <div className='pt-7'>
      <div className='text-white font-bold text-3xl'>Made for You</div>
        <div className='pt-5 grid grid-cols-7 gap-4'>
          <VerticalPlaylist />
          <VerticalPlaylist />
          <VerticalPlaylist />
          <VerticalPlaylist />
          <VerticalPlaylist />
          <VerticalPlaylist />
          <VerticalPlaylist />
        </div>
      </div>
    </div>
  );
}
