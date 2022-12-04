const Modal = ({ open, onClose }) => {
  if (!open) return null
  return (
    <>

      <div className="w-screen h-screen bg-slate-500/75 fixed top-0" onClick={onClose}>
      </div>
      <div className="border rounded bg-white w-3/5 h-fit p-3 fixed  top-20 shadow-md">
        <form className="flex flex-col mx-8">
          <h1 className="text-2xl pb-5">Contact form</h1>
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." className="border rounded my-3 p-2" />

          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." className="border rounded my-3 p-2" />

          <label for="email">Email</label>
          <input type='email' id="email" name="email" className="border rounded my-3 p-2" />

          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." className="border rounded my-3 p-2" ></textarea>

          <input type="submit" value="Submit" className='bg-primary-color hover:bg-[#C2753A] text-white py-2 px-4 rounded my-8 w-1/5' />
        </form>
        <button onClick={onClose} className="absolute top-3 right-5 text-slate-500">X</button>
      </div>
    </>
  );
}

export default Modal;