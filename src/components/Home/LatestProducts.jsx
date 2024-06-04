import { Link } from "react-router-dom";

const LatestProducts = () => {
  return (
    <div className="container mx-auto my-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-8">
        Our Latest Products
      </h2>
      <div className="grid grid-cols-6 gap-4 ">
  <div className="col-start-2 col-span-4 justify-center border-2 border-sky-500  ">
    <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlfGVufDB8fDB8fHww" alt="" className="w-full h-96"/>
  </div>
  <div className="col-start-1 col-end-3 border-2 border-sky-500">
  <img src="https://plus.unsplash.com/premium_photo-1673548917423-073963e7afc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnVybml0dXJlfGVufDB8fDB8fHww" alt="" className="w-full h-80"/>
  </div>
  <div className="col-start-3 col-span-2 border-2 border-sky-500">
  <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fHww" alt="" className="w-full h-80"/>
  </div>
  <div className="col-end-7 col-span-2 border-2 border-sky-500">
  <img src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnVybml0dXJlfGVufDB8fDB8fHww" alt="" className="w-full h-80"/>
  </div>
  <div className="col-start-2 col-span-4 border-2 border-sky-500">
  <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D" alt="" className="w-full h-96"/>
  </div>
</div>
<div className="flex justify-center my-10">
<button className="btn btn-outline btn-primary btn-wide">
            <Link to=''>Shop Now</Link>
        </button>
</div>
    </div>
  );
};

export default LatestProducts;
