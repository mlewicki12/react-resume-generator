
import { ReactLiquid } from 'react-liquid';

import template from './template.js';

type Summary = {
  body: string;
}

const ResumeSummary = (summary: Summary) => {
  return (
    <ReactLiquid template={template} data={summary} html />
  );
};

export default ResumeSummary;