import * as React from 'react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ProfileDropDown from '../../components/NavbarComponents/ProfileDropDown';
import { Route, Routes } from 'react-router-dom';
import SearchBar from '../../components/NavbarComponents/SearchBar';

export interface INavbarProps {
}

export default function Navbar (props: INavbarProps) {
  return (
    <div className='fixed top-0 w-[86%] gap-4 p-4 bg-slate-800 flex align-middle items-center z-10 mb-16'>
        <div>
            <ArrowBackIosNewRoundedIcon className='text-white cursor-pointer hover:text-gray-400 duration-500 mr-4' />
            <ArrowForwardIosRoundedIcon className='text-white cursor-pointer hover:text-gray-400 duration-500' />
        </div>
        <div>
          <Routes>
            <Route path='/search/' element={<SearchBar />}></Route>
          </Routes>
        </div>
        <div className='ml-auto'>
            <ProfileDropDown />
        </div>

    </div>
  );
}
