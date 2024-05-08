import person from "../../../src/assets/person.jpg";
import parts from "../../../src/assets/parts.jpg";

const About = () => {
  return ( 
      <section className="flex  w-full items-center justify-center bg-white my-28">
        <div className="flex w-full  gap-10 lg:flex-row-reverse flex-col items-center justify-around">
          <div className="max-w-md md:space-y-6 sm:space-y-5 space-y-4">
            <h2 className="text-xl text-[#FF3811] font-semibold">About Us</h2>
            <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold leading-tight text-gray-900">
            We are qualified & of experience in this field
            </h1>
            <p className="lg:text-lg sm:text-base text-sm text-gray-600">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
            </p>
            <p className="lg:text-lg sm:text-base text-sm text-gray-600">
            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  
            </p>
            
              <button className="inline-flex flex-nowrap items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#FF3811CC] h-10 px-4 py-2 bg-[#FF3811] text-white">
                Get More Info
              </button>
          </div>
          <div className="relative lg:-ml-44">
            <img
              src={person}
              className="relative md:h-[500px]  sm:h-[500px] h-[300px]  w-[500px] bg-gray-400 object-cover rounded-md"
              alt="hero navigate ui"
            />
            <img
              src={parts}
              className="absolute -right-40 -bottom-20 md:h-[300px]  sm:h-[100px] h-[300px] rounded-sm w-[300px] bg-gray-400 object-cover"
              alt="hero navigate ui"
            />
          </div>
        </div>
      </section>
  );
};

export default About;
