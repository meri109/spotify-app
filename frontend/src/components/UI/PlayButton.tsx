import * as React from 'react';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import { IconButton } from '@mui/material';

export interface IPlayButtonProps {
}

export default function PlayButton (props: IPlayButtonProps) {
  return (
    <IconButton aria-label="delete" size="large" className=' hover:scale-110'>
        <PlayCircleFilledOutlinedIcon style={{fontSize: 60, color: 'lime'}} />
    </IconButton>
  );
}
