import React from 'react'
import List from './components/List.jsx'
import Zenitsu from './components/Zenitsu.jsx'

function App() {

  return (
    <>
      <header>
        <nav className="nav-bar">
          <ul className='nav-bar-list'>
            <List className="nav-list-item" text="HOME"/>
            <List className="nav-list-item" text="NEWS"/>
            <List className="nav-list-item" text="STRATEGY"/>
          </ul>
        </nav>

        <div className="logo">
          <img src="https://cdn2.steamgriddb.com/icon/b52b49613eb2eec3b171abfe8fcbbaf9.ico" alt="" />
        </div>

        <nav className="nav-bar">
          <ul className='nav-bar-list'>
            <List className="nav-list-item" text="SAINTS"/>
            <List className="nav-list-item" text="MEDIAS"/>
            <List className="nav-list-item" text="SUPPORT"/>
          </ul>
        </nav>
        
      </header>

      <main className="container">
        <div className="content">
          <ul className='charList'>
            <li className='c1'><img src="src/assets/img/tanjiro.jpg"/></li>
            <li className='c2'><img src="src/assets/img/zenitsu.jpg"/></li>
            <li className='c3'><img src="src/assets/img/inosuke.jpg" alt="" /></li>
            <li className='c4'><img src="src/assets/img/nezuko.jpg" alt="" /></li>
            <li className='c5'><img src="src/assets/img/tomiyoka.jpg" alt="" /></li>
            <li className='c6'><img src="src/assets/img/rengoku.jpg" alt="" /></li>
            <li className='c7'><img src="src/assets/img/shinobu.jpg" alt="" /></li>
            <li className='switch'>h</li>
          </ul>

          <Zenitsu />

        </div>
      </main>
    </>
  )
}

export default App
