import React from 'react'
import {Play32} from '@carbon/icons-react'

class Content extends React.Component {
  playSong = (id) => {
    this.props.changeSong(id)
  }

  render() {
    return (
      <div className="Content">
        <div className="content-title">{this.props.currentPlaylist}</div>
        
        <table className="content-table">
          <thead>
            <tr>
              <td></td>
              <td>Title</td>  
              <td>Artist</td>
              <td>Length</td>
            </tr>
          </thead>

          <tbody>
            {Array.from(this.props.currentSongs).map(id => {
              const {title, artist, length} = this.props.media[id]
              
              return (
                <tr key={id}>
                  <td className="content-play-col">
                    <Play32 className="content-play-button" onClick={() => {this.playSong(id)}} />
                  </td>
                  <td>{title}</td>
                  <td>{artist}</td>
                  <td>{length}</td>
                </tr>
              )
            })
            }
          </tbody>
        </table>
      </div>
    ); 
  }
}

export default Content