
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
        <div>
          <h1 className='resume-header-name'>Maciej Lewicki</h1>
          <p className='resume-header-location'>Warsaw, Poland 04-761</p>
        </div>
        <p className='resume-header-links'>+48 (534)-777-460 &bull; lewickimapl@gmail.com &bull; <br />
          linkedin.com/in/maciej-lewicki &bull; github.com/mlewicki12 &bull; mlewicki.me</p>
      </div>
    </div>
  );
};

export default ResumeHeader;