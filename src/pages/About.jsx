import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <section className="py-16">
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
        <p className="text-lg text-center mb-12">
          Welcome to <span className="font-semibold">Classy Furnitures</span>,
          where craftsmanship meets comfort and style. Our journey began with a
          simple idea: to create high-quality, sustainable furniture that
          transforms houses into homes. We believe that furniture should not
          only be beautiful but also durable and functional, enhancing the lives
          of our customers for years to come.
        </p>

        <div className="mb-12">
          <div className="w-full md:w-1/2 lg:w-2/3 p-4">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg mb-6">
              At <span className="font-semibold">Classy Furnitures</span>, our
              mission is to create furniture that brings joy, comfort, and
              functionality to your home. We are committed to using eco-friendly
              materials and innovative techniques to produce pieces that not
              only look great but also stand the test of time.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
            <ul className="list-disc list-inside text-lg">
              <li>
                <strong>Quality:</strong> We meticulously craft each piece with
                attention to detail and a focus on durability.
              </li>
              <li>
                <strong>Sustainability:</strong> We use responsibly sourced
                materials and environmentally friendly practices.
              </li>
              <li>
                <strong>Customer Satisfaction:</strong> Your happiness is our
                top priority. We strive to provide exceptional service and
                products that exceed your expectations.
              </li>
              <li>
                <strong>Innovation:</strong> We constantly seek new ideas and
                methods to improve our designs and processes.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
