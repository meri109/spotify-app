import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import VolumeOffIcon from '@mui/icons-material/VolumeOffOutlined';


const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

export default function VolumeControl() {
    const [volume, setVolume] = React.useState(30)
    const [isMuted, setIsMuted] = React.useState(false)

    const theme = useTheme();
    const lightIconColor =
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255)';

    const VolumeToggle = (newValue: any) => {
        if (!isMuted){
            setVolume(newValue);
        }
    }       

    const MuteVolume = () => {
        setIsMuted((muted) => !muted);
        if (isMuted){
            setVolume(30);
        }
    }
  return (
    <div>
        <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
            {
                isMuted ? <VolumeOffIcon htmlColor={lightIconColor} onClick={MuteVolume} className='cursor-pointer' /> : <VolumeDownRounded htmlColor={lightIconColor} onClick={MuteVolume} className='cursor-pointer'/>
            }
            
            <Slider
                aria-label="Volume"
                defaultValue={30}
                value={isMuted ? 0 : volume}
                onChange={(e, newValue) => {VolumeToggle(newValue)}}
                sx={{
                color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(255,255,255)',
                '& .MuiSlider-track': {
                    border: 'none',
                },
                '& .MuiSlider-thumb': {
                    width: 10,
                    height: 10,
                    backgroundColor: '#fff',
                    '&::before': {
                    },
                    '&:hover, &.Mui-focusVisible, &.Mui-active': {
                    boxShadow: 'none',
                    width: 15,
                    height: 15,
                    },
                },
                }}
            />
        </Stack>
    </div>

  );
}