import React from 'react'

const Footer = () => {
  return (
   
    <div className="m-5  w-full px-30 bg-white">
    <footer className="py-4 ">
      <ul className="flex justify-center border-b  ">
        <li className="nav-item"><a href="#" className="nav-link px-2 text-black">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-black">Features</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-black">Pricing</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-black">FAQs</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-black">About</a></li>
      </ul>
      <p className="text-center text-black">© 2025 Team Anveshak</p>
    </footer>
  </div>
  
  )
}

export default Footer;
