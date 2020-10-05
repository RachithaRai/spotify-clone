import React from 'react';
import './Footer.css';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';


function Footer() {
    return (
        <div className='footer'>
            <div className='footer__left'>
                <img className='footer__albumLogo' src='https://sowndhaus.audio/uploads/media/458328942_1395070093_157864424.jpg' alt='' />
                <div className='footer__songInfo'>
                    <h4>Before You Go</h4>
                    <p>Lewis Capaldi</p>
                </div>
            </div>

            <div className='footer__center'>
                <ShuffleIcon className='footer__icon' />
                <SkipPreviousIcon className='footer__icon' />
                <PlayCircleOutlineIcon fontSize='large' className='footer__icon' />
                <SkipNextIcon className='footer__icon' />
                <RepeatIcon className='footer__icon'/>
            </div> 

            <div className='footer__right'>
                <Grid container spacing={3}>
                    <Grid item>
                        <PlaylistPlayIcon />
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>   
        
        </div>
    );
}

export default Footer;
