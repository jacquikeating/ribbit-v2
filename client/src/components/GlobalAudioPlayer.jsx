import { useGlobalAudioPlayer } from 'react-use-audio-player';

function GlobalAudioPlayer({ frogSounds }) {
  const { load } = useGlobalAudioPlayer();

  // ... later in a callback, effect, etc.
  load({ frogSounds }, {
    autoplay: false
  });
}

export default GlobalAudioPlayer;
