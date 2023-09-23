const Modal = ({isOpen, setIsOpen}) => {
  return (
    <dialog  id="my_modal_1" className="modal" open={isOpen}>
      <div className="modal-box  border-[1px] border-solid border-[#5F8D0A]">
        <h3 className="font-bold text-lg">Update User</h3>
        <div className="my-5">
          <form method="dialog">
            <div>
            <input className="px-4 py-2 outline-none border-[1px] border-solid border-[#dfdada] rounded-md mb-3 w-full" type="text" placeholder="Your Name"/>
            </div>
            <div>
            <input className="px-4 py-2 outline-none border-[1px] border-solid border-[#dfdada] rounded-md mb-3 w-full" type="file" placeholder="Photo"/>
            </div>
            <div>
            <textarea className="w-full outline-none border-[1px] border-solid border-[#dfdada] p-3 h-40 mb-3" name="" id="" cols="30" rows="10" placeholder="Write about yourself"></textarea>
            </div>
            <button onClick={()=>setIsOpen(false)} className="btn w-full bg-[#5F8D0A] hover:bg-[#425321] text-white font-bold">Save</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
