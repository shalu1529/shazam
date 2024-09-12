import React from 'react'
import img1 from "../assets/phnimages.webp"
import img2 from "../assets/qrshazam.webp"
import { GoArrowUpRight } from "react-icons/go";


const GettheApp = () => {
  return (
   <>

 <div className='bg-[#F8F8F8]  '>
    <img src={img1} alt="bg-img " className='mt-4'/>
    <h1 className='text-4xl font-bold mt-8 mx-auto'> Identify, listen and discover <br></br> songs with the Shazam app </h1>
    <p className='text-gray-500 font-normal text-xl'>Listen and add songs you discover to your Apple Music or Spotify playlists. Sing along with time-synced lyrics. Watch your favorite music videos with Apple Music or YouTube.</p>

 
 <div className='bg-white w-[40%] h-40 mx-auto rounded-md flex p-4'>
    <img src={img2} alt="qr" className='w-36 h-36 mt-4'/>
    <div className='ml-4'>
    <h2 className='font-bold text-lg mx-auto'>Download the free App</h2>
    <p className='text-gray-500 font-normal'>Scan the code with your smart phone camera to download the free app</p>
    <p className='mt-6 '>AVAILABLE ON</p>
    <div className='flex'>
        <span className='text-lg text-blue-500 mr-2 font-bold flex' >iOS <GoArrowUpRight className='mx-auto my-auto ' size={20}/></span>
        <span className='text-lg text-blue-500 mr-2 font-bold' >| </span>
        <span className='text-lg text-blue-500 mr-2 font-bold flex' >Android <GoArrowUpRight className='mx-auto my-auto ' size={20}/></span>
    </div>
    </div>


 </div>
 </div>
   </>
  )
}

export default GettheApp