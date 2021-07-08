
import ResumeHeader from './header';
import ResumeSummary from './summary';
import ResumeSeparator from './separator';
import ResumeJob from './job';
import ResumeUni from './uni';
import ResumeExtra from './extra';

type Resume = {
  children: JSX.Element | JSX.Element[];
}

const Resume = ({
  children
}: Resume) => {
  return (
    <div className='resume-root'>
      {children}
    </div>
  );
}

const Body = ({
  children
}: Resume) => {
  return (
    <div className='resume-body'>
      {children}
    </div>
  );
}

// pack everything onto resume component
Resume.Header = ResumeHeader;
Resume.Body = Body;

Resume.Summary = ResumeSummary;
Resume.Separator = ResumeSeparator;
Resume.Job = ResumeJob;
Resume.Uni = ResumeUni;
Resume.Extra = ResumeExtra;

export default Resume;