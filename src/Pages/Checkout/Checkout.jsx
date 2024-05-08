import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const {_id, title, price, img} = service;
  const {user} = useContext(AuthContext)
  const handleCheckout = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const phone = form.phone.value;
   const checkout = {
    customerName: name,
    email,
    phone,
    date,
    img,
    service: title,
    service_id: _id,
    price: price
   }
   console.log(checkout);


   fetch('http://localhost:5000/checkout', {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
   },
   body: JSON.stringify(checkout)
   })
   .then(res => res.json())
   .then(data => {
    console.log(data);
    if(data.insertedId){
      alert('service checkout successfully')
    }
   })

  }

  return (
    <div>
      <h2>book: {title}</h2>
      
          
          <div className="card shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={handleCheckout} className="card-body lg:px-32">
              <div className="grid md:grid-cols-2 md:gap-6 lg:gap-x-12 lg:gap-y-8">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  placeholder="Date"
                  className="input input-bordered"
                  required
                />
               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Phone</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Your phone"
                  className="input input-bordered"
                  required
                />
               
              </div>
              </div>
              <div className="form-control mt-6">
                <input className="btn bg-[#FF3811] text-white text-xl font-semibold" type="submit" value="Order Confirm" />
              </div>
            </form>
          </div>
        </div>
  );
};

export default Checkout;
