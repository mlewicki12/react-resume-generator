
import profile from './photo.jpg';
import './style.scss';

const ResumeHeader = () => {
  return (
    <div className='resume-header'>
      <img
        src={profile}
        className='resume-photo'
        alt='Profile'
      />
      <div className='resume-info'>
        <h1>Maciej Lewicki</h1>
        <p>Warsaw, Poland 04-761</p>
        <p>+48 (534)-777-460 &bull; lewickimapl@gmail.com &bull; github.com/mlewicki12 &bull; mlewicki.me</p>
      </div>
    </div>
  );
};

export default ResumeHeader;