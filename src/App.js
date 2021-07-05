
import './App.scss';
import profile from './photo.jpg';

const App = () => {
  return (
    <div className='resume-root'>
      <div className='resume-header'>
        <img
          src={profile}
          className='resume-photo'
          alt='Profile photo'
          />
        <div className='resume-info'>
          <h1>Maciej Lewicki</h1>
          <p>Warsaw, Poland 04-761</p>
          <p>+48 (534)-777-460 &bull; lewickimapl@gmail.com &bull; github.com/mlewicki12 &bull; mlewicki.me</p>
        </div>
      </div>

      <div className='resume-body'>
        <p className='resume-summary'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </p>

        <div className='resume-separator'>
          <div className='left' />
          <h2>Experience</h2>
          <div className='right' />
        </div>

        <div className='resume-job'>
          <div className='resume-job-header'>
            <div className='resume-job-company'>
              <h3>Documati / Warsaw, PL</h3>
              <h4>Full Stack Developer</h4>
            </div>
            <p>March 2021 - Present</p>
          </div>
          <ul>
            <li>Develop and extend React web app for image generation client</li>
            <li>Create a chrome extension to allow scraping texts and images from 3rd party websites</li>
            <li>Implement REST API endpoints to customize image generation</li>
          </ul>
        </div>

        <div className='resume-job'>
          <div className='resume-job-header'>
            <div className='resume-job-company'>
              <h3>SmartStream Technologies / Philadelphia, PA, USA</h3>
              <h4>Full Stack Developer</h4>
            </div>
            <p>September 2018 - April 2019 /<br /> September 2019 - April 2020</p>
          </div>
          <ul>
            <li>Develop and extend React web app for image generation client</li>
            <li>Create a chrome extension to allow scraping texts and images from 3rd party websites</li>
            <li>Implement REST API endpoints to customize image generation</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App;
