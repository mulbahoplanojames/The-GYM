import { useState } from "react";

export default function () {
  const [donor, setDonor] = useState({
    name: "",
    city: "",
    phone: "",
    blood_type: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(donor);

    try {
      const response = await fetch("/api/donors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(donor),
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }

      setDonor({
        name: "",
        city: "",
        phone: "",
        blood_type: "",
      });

      const data = await response.json();
      console.log("Data from the try block", data);
    } catch (error) {
      console.log(`Error creating donor from the catch: ${error}`);
    }
  };

  return (
    <div className="bg-slate-600 p-20 text-white">
      <h1 className="text-2xl pb-4">Creating a donor</h1>

      <form className="" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="">
            <label htmlFor="name">Donor Name</label>
            <input
              type="text"
              id="name"
              value={donor.name}
              onChange={(e) => setDonor({ ...donor, name: e.target.value })}
              className="w-full border-2 outline-none py-1 px-4 rounded-4xl mt-2"
            />
          </div>

          <div className="mt-2">
            <label htmlFor="city">Location</label>
            <input
              type="text"
              id="city"
              value={donor.city}
              onChange={(e) => setDonor({ ...donor, city: e.target.value })}
              className="w-full border-2 outline-none py-1 px-4 rounded-4xl mt-2"
            />
          </div>

          <div className="">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              value={donor.phone}
              onChange={(e) => setDonor({ ...donor, phone: e.target.value })}
              className="w-full border-2 outline-none py-1 px-4 rounded-4xl mt-2"
            />
          </div>

          <div className="">
            <label htmlFor="blood-group">Blood Group</label>
            <input
              type="text"
              id="blood-group"
              value={donor.blood_type}
              onChange={(e) =>
                setDonor({ ...donor, blood_type: e.target.value })
              }
              className="w-full border-2 outline-none py-1 px-4 rounded-4xl mt-2"
            />
          </div>
        </div>

        <button
          type="submit"
          className="py-2 px-5 rounded-4xl bg-amber-500 cursor-pointer mt-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
