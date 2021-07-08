
import { ReactLiquid } from 'react-liquid';

import template from './template.js';
import './style.scss';

type Separator = {
  title?: string;
};

const ResumeSeparator = (separator: Separator) => {
  return (
    <ReactLiquid template={template} data={separator} html />
  );
};

export default ResumeSeparator;