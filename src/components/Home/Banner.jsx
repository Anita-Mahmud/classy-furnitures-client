import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero lg:w-[1280px] h-96 object-cover" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D)'}}>
    <div className="hero-overlay bg-opacity-70"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Classy Furnitures</h1>
        <p className="mb-5 text-2xl">where craftsmanship meets comfort and style. </p>
        <button className="btn btn-primary">
            <Link to=''>Shop Now</Link>
        </button>
      </div>
    </div>
  </div>
  );
};

export default Banner;
