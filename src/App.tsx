
import {Header, Summary, Separator, Job} from './components/resume';

import './styles/print.scss';

const App = () => {
  return (
    <div className='resume-root'>
      <Header />

      <div className='resume-body'>
        <Summary />

        <Separator title='Experience' />

        <Job 
          company='Documati'
          location='Warsaw, PL'
          title='Full Stack Developer'

          start='March 2021'
          end='Present'

          responsibilities={[
            'Develop and extend React web app for image generation client',
            'Create a chrome extension to allow scraping texts and images from 3rd party websites',
            'Implement REST API endpoints to customize image generation'
          ]}
        />

        <Job
          company='SmartStream Technologies'
          location='Philadelphia, PA, USA'
          title='Software Developer'

          start={['September 2019', 'September 2018']}
          end={['April 2020', 'April 2019']}

          responsibilities={[
            'Develop and extend React web app for image generation client',
            'Create a chrome extension to allow scraping texts and images from 3rd party websites',
            'Implement REST API endpoints to customize image generation'
          ]}
        />

        <Separator title='Education' />
      </div>
    </div>
  )
}

export default App;
