import useStylesheet from "../../hooks/stylesheet"
import { ResumeComponent } from "../../types"
import ResumeElement from "../resume-element";

type CoverLetter = {
  header: ResumeComponent;
  content: string[];
}

const CoverLetter = ({
  header, content
}: CoverLetter) => {
  useStylesheet('style.css');

  return (
    <div className='resume-root'>
      <ResumeElement component={header} />
      {content.map(item => (
        <p style={{width: '100%', textAlign: 'left'}}>{item}</p>
      ))}
    </div>
  )
}

export default CoverLetter;