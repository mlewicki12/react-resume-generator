
import { ReactLiquid } from 'react-liquid';

import './style.scss';
import template from './template.js';

type Header = {
  name: string;
  profile: string;
  position: string;
  separator?: boolean;
  
  info: string[];
}

const ResumeHeader = (header: Header) => {
  return (
    <ReactLiquid template={template} data={header} html />
  );
};

export default ResumeHeader;