
import React from 'react';

type Separator = {
  title: string;
};

const ResumeSeparator = ({
  title
}: Separator) => {
  return (
    <div className='resume-separator'>
      <div className='left' />
      <h2>{title}</h2>
      <div className='right' />
    </div>
  );
};

export default ResumeSeparator;