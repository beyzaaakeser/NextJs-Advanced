import React from 'react';

const Label = () => {
  console.log('label bileşeni render edildi');
  return (
    <div>
      <h1>Label</h1>
      <span className="bg-blue-500 px-3 py-1 rounded-md text-base font-semibold">
        Server component
      </span>
    </div>
  );
};

export default Label;
