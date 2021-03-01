import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
import Playbar from './Playbar'
import media from '../../media.json'

import './Music.scss'

class Music extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      media,
      currentPlaylist: 'home',
      playlists: {
        home: new Set(media.ids),
        playlist_1: this.getRandomPlaylist(),
        playlist_2: this.getRandomPlaylist()
      },
      currentSongs: Array.from(new Set(media.ids)),
      currentPlaying: Array.from(new Set(media.ids))[0]
    }
  }

  skipSong = (forwards = true) => {
    var index = this.state.currentSongs.indexOf(this.state.currentPlaying)

    if (forwards) {
      index = (index + 1) % this.state.currentSongs.length
    } else {
      index = index === 0 ? this.state.currentSongs.length - 1 : index - 1
    }

    this.setState({currentPlaying: this.state.currentSongs[index]})
  }

  changeSong = (id) => {
    this.setState({currentPlaying: id})
  }

  getRandomPlaylist = () => {
    const shuffled = media.ids.sort(() => 0.5 - Math.random());
    return new Set(shuffled.slice(0, 10));
  }

  changePlaylist = (newPlaylist) => {
    this.setState({currentPlaylist: newPlaylist})
    this.setState({currentSongs: Array.from(this.state.playlists[newPlaylist])})
  }

  endOfSong = () => {
    var index = this.state.currentSongs.indexOf(this.state.currentPlaying)
    index = (index + 1) % this.state.currentSongs.length
    this.setState({currentPlaying: this.state.currentSongs[index]})
  }

  render() {
    return (
      <div className='Music'>
          <Sidebar 
            currentPlaylist={this.state.currentPlaylist} 
            changePlaylist={this.changePlaylist} 
            playlists={this.state.playlists} 
          />
          
          <Content 
            currentPlaylist={this.state.currentPlaylist} 
            media={this.state.media} 
            currentSongs={this.state.currentSongs}
            changeSong={this.changeSong}
          />
          
          <Playbar 
            currentPlaying={this.state.currentPlaying} 
            skipSong={this.skipSong}
            media={this.state.media}
            endOfSong={this.endOfSong}
          />
      </div>
    ); 
  }
}

export default Music