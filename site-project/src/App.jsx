import React from 'react'
import List from './components/List.jsx'

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
          <h1>CDZ</h1>
        </div>

        <nav className="nav-bar">
          <ul className='nav-bar-list'>
            <List className="nav-list-item" text="SAINTS"/>
            <List className="nav-list-item" text="MEDIAS"/>
            <List className="nav-list-item" text="SUPPORT"/>
          </ul>
        </nav>
        
      </header>

      <main className="content">
        <div className="background">
          <h1 className='degrade-text'>Teste</h1>
        </div>
      </main>
    </>
  )
}

export default App
