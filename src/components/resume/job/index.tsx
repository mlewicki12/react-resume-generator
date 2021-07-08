
import { ReactLiquid, liquidEngine } from 'react-liquid';

import './style.scss';
import template from './template.js';

type Job = {
  company: string;
  location: string;
  title: string;

  start: string | string[];
  end: string | string[];

  responsibilities?: string[];
};

const ResumeJob = (job: Job) => {

  return (
    <ReactLiquid template={template} data={job} html />
  );
};

export default ResumeJob;