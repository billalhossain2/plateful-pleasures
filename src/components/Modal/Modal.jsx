import { useContext } from "react";
import { userContext } from "../../Contexts/UserContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Modal = ({isOpen, setIsOpen, userName, photoLink}) => {
  const {user, addExtraUserInfo} = useContext(userContext)
  const handleSubmit = (e)=>{
    const form = e.target;
    const name = form.userName.value;
    const photoUrl = form.photoUrl.value;
    //update user profile image and name
    addExtraUserInfo({
      displayName: name, photoURL: photoUrl
    })
    .then(()=>{
      console.log("User profile updated!")
      toast("Profile updated successfully !", {autoClose:1000})
    })
    .catch((error)=>console.log("Profile update error====> ", error.message))
    setIsOpen(false)
  }
  return (
    <dialog  id="my_modal_1" className="modal" open={isOpen}>
      <ToastContainer></ToastContainer>
      <div className="modal-box  border-[1px] border-solid border-[#5F8D0A]">
        <h3 className="font-bold text-lg">Update User</h3>
        <div className="my-5">
          <form method="dialog" onSubmit={handleSubmit}>
            <div>
            <input className="px-4 py-2 outline-none border-[1px] border-solid border-[#dfdada] rounded-md mb-3 w-full" type="text" name="userName" defaultValue={userName} placeholder="Your Name"/>
            </div>
            <div>
            <input className="px-4 py-2 outline-none border-[1px] border-solid border-[#dfdada] rounded-md mb-3 w-full" type="text" name="photoUrl" defaultValue={photoLink} placeholder="Photo Url"/>
            </div>
            <div>
            <textarea className="w-full outline-none border-[1px] border-solid border-[#dfdada] p-3 h-40 mb-3" name="" id="" cols="30" rows="10" placeholder="Write about yourself"></textarea>
            </div>
            <button className="btn w-full bg-[#5F8D0A] hover:bg-[#425321] text-white font-bold">Save</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
