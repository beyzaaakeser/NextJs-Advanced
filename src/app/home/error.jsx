'use client';

const Error = ({ error, reset }) => {
  return (
    <div className="flex flex-col gap-5 my-20 items-center justify-center">
      <h1>Oppss... An error occurred.</h1>
      <p>{error.message}</p>
      <button onClick={reset}>Try Again</button>
    </div>
  );
};

export default Error;
