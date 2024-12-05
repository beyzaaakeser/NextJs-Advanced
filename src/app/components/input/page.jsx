'use client';

const Input = () => {
  console.log('input bileşeni render edildi');
  return (
    <div>
      <h1>Input</h1>
      {/* <input type="text" onChange={() => {}} /> */}
      <span className="bg-red-500 px-3 py-1 rounded-md text-base font-semibold">
        client component
      </span>
    </div>
  );
};

export default Input;
