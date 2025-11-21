import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="w-full px-6 py-10 lg:px-30">
      <div className="flex flex-col lg:flex-row gap-8">

        <div
          className="relative flex-1 h-96 rounded-2xl p-10 flex justify-between overflow-hidden"
          style={{ backgroundColor: "#DB8D3E" }}
        >
          <div className="space-y-4 z-10">
            <p className="text-3xl md:text-5xl font-bold leading-tight">
              Gadgets you'll love. <br /> Prices you'll trust.
            </p>

            <p className="text-xl md:text-2xl font-bold">Starts From</p>

            <p className="text-xl md:text-2xl font-bold">$4.90</p>

            <button className="px-8 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition-all">
              Learn More
            </button>
          </div>

          <img
            src={image1}
            className="absolute bottom-0 right-0 w-48 md:w-72 object-contain"
            alt="Main Product"
          />
        </div>

        <div className="flex flex-col gap-8 w-full lg:w-1/3">

          <div className="relative bg-amber-300 h-44 rounded-2xl p-6 overflow-hidden">
            <p className="text-4xl font-bold">Best</p>
            <p className="text-4xl font-bold">Products</p>

            <div className="flex items-center gap-2 pt-2">
              <p className="font-medium">View More</p>
              <FaArrowRight />
            </div>

            <img
              src={image3}
              className="absolute bottom-0 right-0 w-32 md:w-72 object-contain"
              alt="Product 1"
            />
          </div>

          <div className="relative bg-amber-700 h-44 rounded-2xl p-6 overflow-hidden text-white">
            <p className="text-4xl font-bold">20%</p>
            <p className="text-4xl font-bold">Discounts</p>

            <div className="flex items-center gap-2 pt-2">
              <p className="font-medium">View More</p>
              <FaArrowRight />
            </div>

            <img
              src={image2}
              className="absolute bottom-0 right-0 w-28 md:w-60 object-contain"
              alt="Product 2"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;