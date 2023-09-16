import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const User = () => {
  // Sample user data
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    avatarUrl: "https://via.placeholder.com/150",
  };

  return (
    <>
    <Navbar></Navbar>
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">User Profile</h1>
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="p-4">
          <div className="flex items-center">
            <img
              src={user.avatarUrl}
              alt={user.name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Bio</h3>
          <p className="text-gray-700">
          John Doe is a versatile professional with expertise in technology, a passion for photography, and a commitment to giving back. He's a skilled coder, an avid outdoor enthusiast, and a dedicated philanthropist. John's journey exemplifies a life driven by curiosity, creativity, and purpose.
          </p>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default User;
