import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <main className='grid min-h-[100vh] place-items-center px-8'>
        <div className='text-center'>
          <h1 className=''>Page not found</h1>
          <p>we can't seem to find page you are looking for </p>
          <Link to='/' className='btn btn-success'>
            back home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div>
        <h1>there was an error</h1>
      </div>
    </main>
  );
};

export default Error;
