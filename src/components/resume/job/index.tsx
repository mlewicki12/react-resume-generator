
import './style.scss';

type Job = {
  company: string;
  location: string;
  title: string;

  start: string | string[];
  end: string | string[];

  responsibilities?: string[];
};

const ResumeJob = ({
  company, location, title,
  start, end, responsibilities
}: Job) => {
  // null check so i can map without null checking
  responsibilities = responsibilities ?? [];
  console.log(responsibilities);

  let time = <>{start} - {end}</>;
  if(Array.isArray(start)) {
    time = start.map((item, index) =>
      <>{item} - {end[index]}</>
    ).reduce((prev, next, index, array) => {
      if(index + 1 === array.length) {
        // last element
        return <>{prev}{next}</>;
      }

      return <>{prev}{next} /<br /></>;
    }, <></>);
  }
  
  return (
    <div className='resume-job'>
      <div className='resume-job-header'>
        <div className='resume-job-company'>
          <h3>{company} / {location}</h3>
          <h4>{title}</h4>
        </div>
        {time}
      </div>
      <ul>
        {responsibilities.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeJob;