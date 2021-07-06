
import './style.scss';

type Uni = {
  university: string;
  location: string;
  degree: string;

  start: string;
  end: string;

  gpa?: string;
  relevantCoursework?: string[];
  awards?: string[];
  extracurriculars?: string[];
};

const ResumeUni = ({
  university, location, degree,
  start, end, gpa,
  relevantCoursework, awards, extracurriculars
}: Uni) => {
  return (
    <div className='resume-uni'>
      <div className='resume-uni-header'>
        <div className='resume-uni-info'>
          <h3>{university} / {location}</h3>
          <h4 className='resume-uni-degree'>{degree}</h4>
        </div>
        <p>{start} - {end}</p>
      </div>
      {gpa && (
        <p><span style={{fontWeight: 'bold'}}>GPA:</span> {gpa}</p>
      )}

      {relevantCoursework && (
        <p><span style={{fontWeight: 'bold'}}>Relevant coursework:</span> {relevantCoursework.join(', ')}</p>
      )}

      {awards && (
        <p><span style={{fontWeight: 'bold'}}>Awards & Honors:</span> {awards.join(', ')}</p>
      )}

      {extracurriculars && (
        <p><span style={{fontWeight: 'bold'}}>Extracurricular activities:</span> {extracurriculars.join(', ')}</p>
      )}
    </div>
  );
};

export default ResumeUni;