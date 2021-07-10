
import { ReactLiquid } from 'react-liquid';
import ReactHTMLParser from 'react-html-parser';
import { ResumeComponent } from '../../types';

import * as ResumeTemplate from '../../themes/default';
import { ResumeComponentType }  from '../../types';

type ResumeElement = {
  component: ResumeComponent;
};

const getTemplate = (type: ResumeComponentType): string => {
  switch(type) {
    case 'extra':
      return ResumeTemplate.Extra;

    case 'header':
      return ResumeTemplate.Header;

    case 'job':
      return ResumeTemplate.Job;

    case 'separator':
      return ResumeTemplate.Separator;

    case 'summary':
      return ResumeTemplate.Summary;

    case 'uni':
      return ResumeTemplate.Uni;

    default:
      // error case
      return `<h1 style='color: red; font-weight: bold'>Invalid element ${type}</h1>`;

  }

}

const ResumeElement = ({
  component
}: ResumeElement) => {
  return (
    <ReactLiquid
      template={getTemplate(component.type)}
      data={component}
      render={(rendered: any) => {
        return ReactHTMLParser(rendered.__html);
      }}
    />
  );
};

export default ResumeElement;