import { useState, useEffect } from 'react'
import axios from 'axios'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import 'react-h5-audio-player/src/styles.scss'

const Player = ({ currentFrog }) => (
  <AudioPlayer
    autoPlay
    src={currentFrog.audio}
    // onPlay={e => console.log("onPlay")}
    // other props here
  />
);

export default Player;