import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

class Playbar extends React.Component {
  render() {
    return (
      <div className='Playbar'>
        <div className="playbar-title">{this.props.media[this.props.currentPlaying].title}</div>
        <div className="playbar-artist">{this.props.media[this.props.currentPlaying].artist}</div>
        <AudioPlayer
          autoPlay={false}
          src={"./media/" + this.props.currentPlaying + ".mp3"}
          showSkipControls
          onClickNext={() => this.props.skipSong()}
          onClickPrevious={() => this.props.skipSong(false)}
          onEnded={() => this.props.endOfSong()}
        />
      </div>
    ); 
  }
}

export default Playbar