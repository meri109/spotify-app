import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import PauseCircleFilledOutlinedIcon from '@mui/icons-material/PauseCircleFilledOutlined';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';


const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

export default function MediaPlayer() {
  const theme = useTheme();
  const duration = 200; // seconds
  const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = React.useState(false);
  function formatDuration(value: number) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#fff';

  return (
    <div>
            <Box
              sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: -1,
                }}
              >
              <IconButton aria-label="previous song" className='opacity-70 hover:opacity-100 duration-300 scale-75'>
                  <SkipPreviousIcon fontSize="large" htmlColor={mainIconColor} />
              </IconButton>
              <IconButton className='hover:scale-110 duration-1000'
                  aria-label={paused ? 'play' : 'pause'}
                  onClick={() => setPaused(!paused)}
              >
                  {paused ? (
                  <PlayCircleFilledOutlinedIcon sx={{ fontSize: '2rem' }} htmlColor={mainIconColor}/>
                  ) : (
                  <PauseCircleFilledOutlinedIcon sx={{ fontSize: '2rem' }} htmlColor={mainIconColor}/>
                  )}
              </IconButton>
              <IconButton aria-label="next song" className='opacity-70 hover:opacity-100 duration-300 scale-75'>
                  <SkipNextIcon fontSize="large" htmlColor={mainIconColor} />
              </IconButton>
            </Box>

            <Slider
                aria-label="time-indicator"
                size="small"
                value={position}
                min={0}
                step={1}
                max={duration}
                onChange={(_, value) => setPosition(value as number)}
                sx={{
                    color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(255,255,255)',
                    height: 2,
                    '& .MuiSlider-thumb': {
                    width: 8,
                    height: 8,
                    transition: '0.3s cubic-bezier(255,255,255)',
                    '&::before': {
                        boxShadow: '0 2px 12px 0 rgba(255,255,255, 0.4)',
                    },
                    '&:hover, &.Mui-focusVisible': {
                        boxShadow: `0px 0px 0px 8px ${
                        theme.palette.mode === 'dark'
                            ? 'rgb(255 255 255 / 16%)'
                            : 'rgba(255,255,255)'
                        }`,
                        // color: 'rgb(0,255,0)'
                    },
                    '&.Mui-active': {
                        width: 10,
                        height: 10,
                    },
                    },
                    '& .MuiSlider-rail': {
                    opacity: 0.28,
                    },
                }}
            />
            <Box
                  sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      mt: -2,
                  }}
              >
              <TinyText>{formatDuration(position)}</TinyText>
              <TinyText>-{formatDuration(duration - position)}</TinyText>
            </Box>
    </div>
  );
}