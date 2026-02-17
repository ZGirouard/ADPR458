import '../App.css'
import Headshot from '../assets/Headshot.jpeg'


function Assignments() {
  return (
    <>
    <div className='app'>
      <header className='header'>Interactive Media Design</header>
        <div className='content'>
          <nav className='nav'>
            <ul>
              <li>About</li>
              <li>Work</li>
              <li>Contact</li>
            </ul>
          </nav>
          <h1 className='name'>Zach Girouard</h1>
          <div className='content-container'>
          <section>
            <div>
              <h2>About Me</h2>
              <p>Senior Computer Science student with minors in ADPR and Sociology.</p>
            </div>
            <div>
              <h2>Classes This Semester</h2>
              <div>
              <ul className='class-list'>
                <li><b>ADPR 458:</b> Interactive Media Design</li>
                <li><b>CSCE 478:</b> Intro to Machine Learning</li>
                <li><b>MUSC 383:</b> Advanced Music Tech & Audio Production</li>
                <li><b>JOMC 101:</b> Principles of Mass Media</li>
                <li><b>JOMC 462:</b> Social Media Landscape</li>
              </ul>
              </div>
            </div>
                <div>
              <h2>Outside of Class</h2>
              <p>Guitar, Bass, Music Production, Skateboarding, Hiking, Graphic Design, Vinyl Records, Thrifting</p>
            </div>
                <div>
              <h2>After Gradution</h2>
              <p>I will be working full time for Aviture, a software consulting company in Omaha.</p>
            </div>
          </section>
          </div>
          <aside className='headshotContainer'>
            <img
            src={Headshot} 
            alt='Headshot of Zach Girouard'
            className='headshot'/>
          </aside>
          <footer className='footer'>&copy; 2026 Zachary Girouard</footer>
        </div>
      </div>
    </>
  )
}

export default Assignments
