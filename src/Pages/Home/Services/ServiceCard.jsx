import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {_id, img, title, price} = service;
    return (
        <div className="rounded-2xl bg-slate-100/70 px-6 py-4 shadow-md ">
        {/* Card Image */}
        <img width={350} height={190} className="h-[300px] w-full rounded-2xl" src={img} alt="card navigate ui" />
        {/* Card Heading */}
        <div className="space-y-2 mt-4">
            <h2 className="font-medium sm:text-lg lg:text-2xl md:text-xl lg:font-semibold text-start">{title}</h2>          
        </div>
        {/* Price and action button */}
        <div className="mt-3 flex items-center justify-between font-semibold">
            <h2 className="font-medium text-[#FF3811] md:text-xl">Price: ${price}</h2>
           <Link to={`/checkout/${_id}`}> <button className="text-[#FF3811]"><FaArrowRight></FaArrowRight></button></Link>
        </div>
      </div>
    );
};

export default ServiceCard;