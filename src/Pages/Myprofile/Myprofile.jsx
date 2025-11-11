import React, { use } from "react";

import { toast } from "react-toastify";
import { AuthContext } from "../../Authprovider/Context/Context";

const Myprofile = () => {
  const { user, updateUser, setuser } = use(AuthContext);

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photo.value;
    updateUser({ displayName: name, photoURL: photoURL })
      .then(() => {
        setuser({ ...user, displayName: name, photoURL: photoURL });
        toast("update!succesfully");
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex justify-center items-center p-4">
      <div className="bg-white shadow-xl rounded-3xl grid md:grid-cols-2 w-full max-w-4xl overflow-hidden">
        <div className="flex flex-col justify-center items-center bg-green-600 text-white p-8">
          <img
            src={
              user?.photoURL || "https://i.ibb.co/4f5fyzL/default-avatar.png"
            }
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <h2 className="text-2xl font-bold mt-4">
            {user?.displayName || "User Name"}
          </h2>
          <p className="text-sm text-indigo-200 mt-1">{user?.email}</p>
        </div>

        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Update Profile
          </h2>
          <form onSubmit={handleChange} className="space-y-5">
            <div>
              <label className="block text-gray-600 mb-1">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName || ""}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                placeholder="Enter new name"
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1">Photo URL</label>
              <input
                type="text"
                name="photo"
                defaultValue={user?.photoURL || ""}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                placeholder="Enter new photo URL"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 text-white rounded-lg py-2 hover:bg-indigo-700 transition"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
