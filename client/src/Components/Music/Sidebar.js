import React from 'react'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPlaylist: '0',
      playlists: Object.keys(this.props.playlists)
    }
  }

  changePlaylist = (newPlaylist, listIndex) => {
    this.setState({currentPlaylist: listIndex})
    this.props.changePlaylist(this.state.playlists[listIndex])
  }

  render() {
    return (
      <ul className='Sidebar'>
        <li className='sidebar-li sidebar-library'>Library</li>

        {Object.keys(this.state.playlists).map(listIndex =>
          <li 
            className={listIndex === this.state.currentPlaylist ? 'sidebar-li sidebar-li-active' : 'sidebar-li'} 
            key={listIndex}
            onClick={() => this.changePlaylist(this.state.playlists[listIndex], listIndex)}
          >
            {this.state.playlists[listIndex]}
          </li>
        )}
      </ul>
    ); 
  }
}

export default Sidebar