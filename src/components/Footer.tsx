import React from "react";

const Footer = () => {
  return (
    <div className="h-[20rem] flex flex-col items-center justify-center w-full px-12 bg-black outline outline-red-400 ">
      <div className="grid grid-cols-1 sm:grid-cols-4 items-center justify-center gap-16 mx-auto ">
        <div className="h-56 w-[350px] p-4 flex items-start justify-start gap-6 flex-col">
          <p className="text-2xl font-semibold">About Us</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quis
            amet, porro ab eaque dolore, tenetur ex obcaecati iste repudiandae
            est dolores at! Excepturi repudiandae similique at necessitatibus
            molestias assumenda.
          </p>
        </div>
        <div className="h-56 w-[350px] p-4 flex items-start justify-start gap-6 flex-col">
          <p className="text-2xl font-semibold">Quick Links</p>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="h-56 w-[350px] p-4 flex items-start justify-start gap-6 flex-col">
          <p className="text-2xl font-semibold">Follow Us</p>
    
            <ul>
              <li>Facebook</li>
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
      
        </div>
        <div className="h-56 w-[350px] p-4 flex items-start justify-start gap-6 flex-col">
          <p className="text-2xl font-semibold">Contact Us</p>
          
            <ul>
              <li>New Delhi,India</li>
              <li>Delhi, 11012</li>
              <li>Email : info@xyz.in</li>
              <li>Phone: (123) 456 7890</li>
            </ul>
     
        </div>
      </div>
      <div className="mt-10">
        <p> &copy; 2024 | All rights reserved</p>{" "}
      </div>
    </div>
  );
};

export default Footer;
