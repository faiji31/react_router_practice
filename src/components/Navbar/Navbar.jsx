import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
      return (
            <div>
                  <h2>This is Navbar</h2>
                  <nav className='bg-gray-800 p-4'>
                        <Link to="/" className='text-white mx-2'>Home</Link>
                        <Link to="/mobiles" className='text-white mx-2'>Mobiles</Link>
                        <Link to="/laptops" className='text-white mx-2'>Laptops</Link>
                  </nav>
            </div>
      );
};

export default Navbar;