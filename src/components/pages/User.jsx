import React, { useContext, useState } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import useTitle from "../Hooks/useTitle";
import { userContext } from "../../Contexts/UserContext";
import Modal from "../Modal/Modal";

const User = () => {
    useTitle("User")
    const {user} = useContext(userContext)

    const [isOpen, setIsOpen] = useState(false)

    const handleModal = ()=>{
      setIsOpen(true)
    }

  return (
    <>
    <Navbar></Navbar>
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}></Modal>
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-4">User Profile</h1>
      <div className="rounded-lg overflow-hidden shadow-md">
        <div className="p-4">
          <div className="flex items-center">
            <img
              src={user?.photoURL}
              alt={user?.name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold">{user?.displayName}</h2>
              <p className="text-gray-600">{user?.email}</p>
            </div>
          </div>
        </div>
        <button onClick={handleModal} className="btn btn-info text-white">Edit Profile</button>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Bio</h3>
          <p className="text-gray-700">
          {user?.displayName} is a versatile professional with expertise in technology, a passion for photography, and a commitment to giving back. He's a skilled coder, an avid outdoor enthusiast, and a dedicated philanthropist. John's journey exemplifies a life driven by curiosity, creativity, and purpose.
          </p>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default User;
