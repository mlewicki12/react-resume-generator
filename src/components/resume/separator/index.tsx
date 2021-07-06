
import './style.scss';

type Separator = {
  title?: string;
};

const ResumeSeparator = ({
  title
}: Separator) => {
  return (
    <div className='resume-separator'>
      <div className='border' />
      {title &&
        <>
          <h2>{title}</h2>
          <div className='border' />
        </>
      }
    </div>
  );
};

export default ResumeSeparator;