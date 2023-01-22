import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Grid(props) {
  const filteredEmojis = props.data.filter(
    (emo) =>
      !emo.unicodeName.startsWith('E0') &&
      !emo.unicodeName.startsWith('E1') &&
      !emo.unicodeName.startsWith('E2') &&
      !emo.unicodeName.startsWith('E3') &&
      !emo.unicodeName.startsWith('E4') &&
      !emo.unicodeName.startsWith('E5') &&
      !emo.unicodeName.startsWith('E6') &&
      !emo.unicodeName.startsWith('E7') &&
      !emo.unicodeName.startsWith('E8') &&
      !emo.unicodeName.startsWith('E9')
  );

  const elements = filteredEmojis.map((emoji) => (
    <div
      key={emoji.unicodeName}
      className='p-4 cursor-pointer flex justify-center items-center text-base bg-midnight border border-secondary hover:border-main w-12 h-12 rounded-md transition-all ease-in-out md:text-2xl'
      onClick={() => Copied(emoji.character)}
    >
      <h3>{emoji.character}</h3>
    </div>
  ));

  const noData = (
    <div>
      <h3>No Data!</h3>
    </div>
  );

  function Copied(character) {
    navigator.clipboard.writeText(character);
    toast.success('Copied! 🎉', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      closeButton: false,
      transition: Slide,
      draggablePercent: 60,
      theme: 'dark',
    });
  }

  return (
    <div className='flex flex-wrap gap-[10px] md:gap-3'>
      {elements}
      <ToastContainer limit={3} />
    </div>
  );
}
