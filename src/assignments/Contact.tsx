import '../App.css'

function Contact() {
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
          <div className='contactContent'>
            <div>
              <h2>Links</h2>
              <p>Links to go to social media or other websites could go here.</p>
            </div>
            <div>
              <h2>Contact</h2>
              <p>Contact page with ways to email me. We can have links, an email form, or other ways to communicate with us or the company.</p>
            </div>
          </div>
          <footer className='footer'>&copy; 2026 Zachary Girouard</footer>
        </div>
      </div>
    </>
  )
}

export default Contact
