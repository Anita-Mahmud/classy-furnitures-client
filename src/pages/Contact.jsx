import { Helmet } from "react-helmet-async";


const Contact = () => {
    return (
        <section className="my-12">
           <Helmet>
        <title>Contact Us</title>
       
      </Helmet>
            <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Contact Us!</h1>
      <p className="py-6">Enjoy exceptional customer service. Our support team is here to assist you with any questions or concerns, ensuring a smooth shopping experience.</p>
    </div>
    <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
      <form className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          {/* <input type="password" placeholder="password" className="input input-bordered" required /> */}
          <textarea name="message" id="" className="textarea textarea-bordered h-24"></textarea>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </section>
    );
};


export default Contact;