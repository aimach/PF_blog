import { useState } from 'react';
import Modal from "../components/Modal";

const About = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className='flex flex-col items-center my-8'>
      <h1 className='text-3xl font-bold my-8'>About</h1>
      <p className='m-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <button type='button' onClick={() => setOpenModal(true)} className='bg-primary-color hover:bg-[#C2753A] text-white py-2 px-4 rounded my-8'>Contact form</button>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}

export default About;