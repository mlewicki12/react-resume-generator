
import './style.scss';

type Extra = {
  title: string;
  description: string;

  start?: string;
  end?: string;
}

const ResumeExtra = ({
  title, description, start, end
}: Extra) => {
  return (
    <div className='resume-extra'>
      <p className='resume-extra-title'><span style={{fontWeight: 'bold'}}>{title}:</span>&nbsp;{description}</p>
      {start && (
        <p className='resume-extra-date'>{start} {end && `- ${end}`}</p>
      )}
    </div>
  );
}

export default ResumeExtra;