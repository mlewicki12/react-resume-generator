
import './style.scss';

type Header = {
  name: string;
  profile: string;
  position: string;
  
  info: string[];
}

const ResumeHeader = ({
  name, profile, position, info
}: Header) => {
  return (
    <div className='resume-header'>
      <img
        src={profile}
        className='resume-photo'
        alt='Profile'
      />
      <div className='resume-info'>
        <div className='resume-info-main'>
            <h1 className='resume-header-name'>{name}</h1>
            <h2 className='resume-header-position'>{position}</h2>
        </div>
        <p className='resume-header-links'>
          {info.map((item, index, array) => {
            if(item === 'br') {
              return (<br />);
            }

            if(index + 1 === array.length) {
              return (<> {item} </>);
            }

            return <> {item} &bull; </>
          })}
        </p>
      </div>
    </div>
  );
};

export default ResumeHeader;