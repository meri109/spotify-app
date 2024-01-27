import * as React from 'react';
import spotifyLogo from '../../assets/images/Spotify_Logo_RGB_White.png'
import List from '@mui/material/List';
import { Divider, ListItemButton, ListItemIcon } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import axios from 'axios';
import PlaylistItem from '../../components/PlaylistItem/PlaylistItem';
import { useNavigate } from 'react-router-dom';

export interface ISidebarProps {
}

export default function Sidebar (props: ISidebarProps) {
    const navigate = useNavigate()

    const goToHomePage = () => {
        navigate('/')
    };

    const goToSearchPage = () => {
        navigate('/search/')
    };


    // const goToLibraryPage = () => {
    //     navigate('/playlist/')
    // };
    
  return (
    <div className='basis-2/12 h-full bg-zinc-950/95'>
        <div className='mt-2'>
            <img src={spotifyLogo} alt="Spotify logo" width={150}/>
        </div>

        <div>
                <List component="nav" aria-label="main mailbox folders" className='text-white'>
                    <ListItemButton>
                        <ListItemIcon >
                            <HomeIcon className='text-white' />
                        </ListItemIcon>
                        <ListItemText onClick={goToHomePage}   primary="Home" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon >
                            <SearchIcon className='text-white' />
                        </ListItemIcon>
                        <ListItemText onClick={goToSearchPage} primary="Search" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon >
                            <LibraryMusicIcon className='text-white' />
                        </ListItemIcon>
                        <ListItemText primary="Library" />
                    </ListItemButton>
                </List>
                <Divider  className='bg-neutral-600'/>
                <List component="nav" aria-label="main mailbox folders" className='text-white'>
                    <ListItemButton>
                        <ListItemIcon >
                            <AddBoxOutlinedIcon className='text-white' />
                        </ListItemIcon>
                        <ListItemText   primary="Create Playlist" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemIcon >
                            <FavoriteBorderOutlinedIcon className='text-white' />
                        </ListItemIcon>
                        <ListItemText primary="Liked Songs" />
                    </ListItemButton>

                </List>
                <Divider  className='bg-neutral-600'/>
                <PlaylistItem />

        </div>

    </div>
  );
}
