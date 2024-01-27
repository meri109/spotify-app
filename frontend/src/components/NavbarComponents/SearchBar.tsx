import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';

export interface ISearchBarProps {
}

export default function SearchBar (props: ISearchBarProps) {
  return (
    <div className='w-80 bg-white flex p-2 rounded-full'>
        <div className='mr-3'>
            <SearchIcon />
        </div>
        <input className='grow outline-none' type="text" placeholder='Search'/>
    </div>
  );
}
