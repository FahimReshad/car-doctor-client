import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Booking from "./Booking/Booking";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure()
  const url = `/checkout?email=${user?.email}`;
  useEffect(() => {
    axiosSecure.get(url, { withCredentials: true })
      .then((res) => {
        setBookings(res.data);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
      });
  }, [url, axiosSecure]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/checkout/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleConfirm = (id) => {
    fetch(`http://localhost:5000/checkout/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id !== id);
          updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };
  return (
    <div className="overflow-x-auto">
      <h2>{bookings.length}</h2>
      <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
        <thead>
          <tr className="bg-[#0095FF] text-white">
            <th className="py-4 px-6 text-lg text-left border-b"></th>
            <th className="py-4 px-6 text-lg text-left border-b">
              Service Image
            </th>
            <th className="py-4 px-6 text-lg text-left border-b">
              Service Name
            </th>
            <th className="py-4 px-6 text-lg text-left border-b">Price</th>
            <th className="py-4 px-6 text-lg text-left border-b">Date</th>
            <th className="py-4 px-6 text-lg border-b text-end">Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <Booking key={booking._id}
              booking={booking}
              handleDelete={handleDelete}
              handleConfirm={handleConfirm}
            ></Booking>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
