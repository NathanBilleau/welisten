// Librairies
import React from 'react'

// Components




export default class Top extends React.Component {

  constructor (){
    super()
    this.state = {

    }
  }

  submit() {
    let searchField = document.getElementById('searchField').value.toLowerCase()
    this.props.appState({search: searchField})
  }

  clean() {
    let searchField = document.getElementById('searchField')
    searchField.value = ''
    this.props.appState({search: ''})
  }

  render() {
    return (
      <div className="topSection">
        <div className="btnContainer">

          <button onClick={() => this.props.appState({main: 'settings'})}>
            <img src="./img/settings.svg" />
          </button>

        </div>
        <div className="search">

          <input type="text" placeholder="Music title" id="searchField" onChange={() => this.submit()} />

          <button className="gradient" onClick={() => this.clean()}>
            <img src="./img/delete.svg" />
          </button>

        </div>
      </div>
    )
  }
}
