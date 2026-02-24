import '../App.css'
import Headshot from '../assets/Headshot.jpeg'


function Work() {
  return (
    <>
    <div className='app'>
      <header className='header'>Interactive Media Design</header>
        <div className='content'>
          <nav className='nav'>
            <ul>
              <li><a className='navLink' href="/assignments">About</a></li>
              <li><a className='navLink' href="/work">Work</a></li>
              <li><a className='navLink' href="/contact">Contact</a></li>
            </ul>
          </nav>
          <h1 className='name'>Work</h1>
          <div className='content-container'>
          <div className='threeColumn'>
          <div className='headshotContainer'>
            <img
            src={Headshot} 
            alt='Headshot of Zach Girouard'
            className='headshot'/>
            <h2>Project 1</h2>
            <p>Description will go here.</p>
          </div>
          <div className='headshotContainer'>
            <img
            src={Headshot} 
            alt='Headshot of Zach Girouard'
            className='headshot'/>
            <h2>Project 2</h2>
            <p>Description will go here.</p>
          </div>
          <div className='headshotContainer'>
            <img
            src={Headshot} 
            alt='Headshot of Zach Girouard'
            className='headshot'/>
            <h2>Project 3</h2>
            <p>Description will go here.</p>
          </div>
          </div>
          <footer className='footer'>&copy; 2026 Zachary Girouard</footer>
        </div>
      </div>
      </div>
    </>
  )
}

export default Work
