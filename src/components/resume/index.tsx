
import ResumeHeader from './header';
import ResumeSummary from './summary';
import ResumeSeparator from './separator';
import ResumeJob from './job';
import ResumeUni from './uni';
import ResumeExtra from './extra';

import profile from './photo.jpg';

const Resume = () => {
  return (
    <div className='resume-root'>
      <ResumeHeader 
        name='Maciej Lewicki'
        position='Software Developer'
        photo={profile}

        info={['Warsaw, Poland 04-761', '+48 (534) 777-460', 'lewickimapl@gmail.com', 'br', 'linkedin.com/in/maciej-lewicki', 'github.com/mlewicki12', 'mlewicki.me']}
      />

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
            'Worked alongside experienced developers on software used by the world\'s biggest banks',
            'Developed and styled a web interface using React to work with existing C# backend',
            'Participated in meetings to plan out and estimate time required to implement features'
          ]}
        />

        <ResumeJob
          company='Drexel University'
          location='Philadelphia, PA, USA'
          title='Course Assistant'

          start='September 2018'
          end='April 2020'

          responsibilities={[
            'Guided up to 4 student groups per term during development of their freshman design project',
            'Researched many different technologies to best guide students',
            'Ran labs introducing students to various programming concepts',
          ]}
        />

        <ResumeSeparator title='Education' />

        <ResumeUni
          university='Drexel University'
          location='Philadelphia, PA'
          degree='Completed coursework towards a BS in Computer Science'

          start='September 2017'
          end='April 2020'

          gpa='3.53/4.00'
          awards={['Founder\'s Scholarship', 'Dean\'s List (Nov. 2017 -  Apr. 2020)']}
          extracurriculars={['WKDU Radio DJ', 'Drexel Esports and Gaming Society Game Director']}
        />

        <ResumeSeparator title='Other' />

        <ResumeExtra
          title='Philth Zine'
          description='Music writer and stream organizer'
          start='April 2020'
          end='Present'
        />

        <ResumeExtra
          title='Paper Boats'
          description='Label owner and manager'
          start='October 2020'
          end='Present'
        />
      </div>
    </div>
  );
}

export default Resume;
export {ResumeHeader as Header, ResumeSummary as Summary, ResumeSeparator as Separator, ResumeJob as Job,
  ResumeUni as Uni, ResumeExtra as Extra};