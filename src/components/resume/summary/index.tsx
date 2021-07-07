
import React from 'react';

type Summary = {
  body: string;
}

const ResumeSummary = ({
  body
}: Summary) => {
  return (
    <p className='resume-summary'>
      {body}
    </p>
  );
};

export default ResumeSummary;