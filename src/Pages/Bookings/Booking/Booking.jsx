

const Booking = ({booking, handleDelete, handleConfirm}) => {
    const {_id, img, date, service, price, status} = booking;
    
    return (
        
            <tr className="hover:bg-gray-50 border-b transition duration-300">
                <td><button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-sm btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button></td>
                <td className="py-4 px-4 flex justify-start">
                    {img && < img src={img} alt="table navigate ui" className="h-16 w-16 object-cover bg-gray-300" />}
                </td>
                <td className="py-4 px-6 border-b text-xl font-medium">{service}</td>
                <td className="py-4 px-6 border-b text-lg font-medium">${price}</td>
                <td className="py-4 px-6 border-b text-lg font-medium">{date}</td>
                <td className="py-4 px-6 border-b text-end">
                    {
                       status ==='confirm' ? <span className="font-bold">Confirm</span> :
                        <button onClick={() => handleConfirm(_id)} className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Confirm</button>}
                </td>
            </tr>
        
    );
};

export default Booking;