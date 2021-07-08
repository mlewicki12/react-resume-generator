
import ResumeHeader from './header';
import ResumeSummary from './summary';
import ResumeSeparator from './separator';
import ResumeJob from './job';
import ResumeUni from './uni';
import ResumeExtra from './extra';

import resume from './definition.json';
import { Separator, Job, Uni, Extra, ResumeComponent } from '../../types';

const separator = (info: Separator) => {
  return (
    <ResumeSeparator title={info.title} />
  );
}

const job = (info: Job) => {
  return (
    <ResumeJob
      company={info.company}
      location={info.location}
      title={info.title}

      start={info.start}
      end={info.end}

      responsibilities={info.responsibilities}
    />
  );
}

const uni = (info: Uni) => {
  return (
    <ResumeUni
      university={info.university}
      location={info.location}
      degree={info.location}

      start={info.start}
      end={info.end}

      gpa={info.gpa}
      awards={info.awards}
      extracurriculars={info.extracurriculars}
      coursework={info.coursework}
    />
  );
}

const extra = (info: Extra) => {
  return (
    <ResumeExtra
      title={info.title}
      description={info.description}
      start={info.start}
      end={info.end}
    />
  );
}

const constructElementFromJson = (json: ResumeComponent) => {
  switch(json.type) {
    case 'separator':
      return separator(json as Separator);

    case 'job':
      return job(json as Job);

    case 'uni':
      return uni(json as Uni);

    case 'extra':
      return extra(json as Extra);
  }
}

const Resume = () => {
  return (
    <div className='resume-root'>
      <ResumeHeader 
        name={resume.header.name}
        position={resume.header.position}
        profile={resume.header.profile}
        separator={resume.header.separator}

        info={resume.header.info}
      />

      <div className='resume-body'>
        {resume.body.map(item => constructElementFromJson(item))}
      </div>
    </div>
  );
}

// pack everything onto resume component
Resume.Header = ResumeHeader;
Resume.Summary = ResumeSummary;
Resume.Separator = ResumeSeparator;
Resume.Job = ResumeJob;
Resume.Uni = ResumeUni;
Resume.Extra = ResumeExtra;

export default Resume;