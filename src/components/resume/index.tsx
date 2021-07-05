
import ResumeHeader from './header';
import ResumeSummary from './summary';
import ResumeSeparator from './separator';
import ResumeJob from './job';

const Resume = () => {
  return (
    <div className='resume-root'>
      <ResumeHeader />

      <div className='resume-body'>
        <ResumeSummary />

        <ResumeSeparator title='Experience' />

        <ResumeJob 
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

        <ResumeJob
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

        <ResumeSeparator title='Education' />
      </div>
    </div>
  );
}

export default Resume;
export {ResumeHeader as Header, ResumeSummary as Summary, ResumeSeparator as Separator, ResumeJob as Job};