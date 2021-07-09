
import { ReactLiquid } from 'react-liquid';

import template from './template.js';
import './style.scss';

type Uni = {
  university: string;
  location: string;
  degree: string;

  start: string;
  end: string;

  gpa?: string;
  coursework?: string[];
  awards?: string[];
  extracurriculars?: string[];
};

const ResumeUni = (uni: Uni) => {
  return (
    <ReactLiquid template={template} data={uni} html />
  );
};

export default ResumeUni;