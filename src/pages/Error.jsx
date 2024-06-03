
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    return (
       
    <div id="error-page" className='text-2xl text-center font-bold my-20'>
     <img src="https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_1280.png" className='size-80 mx-auto mb-8'></img>
     
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <div>
      <button className="btn btn-wide btn-outline btn-warning my-12">
        <Link to='/'>Go to Home</Link>
      </button>
      </div>
    </div>
  
    );
};

export default Error;