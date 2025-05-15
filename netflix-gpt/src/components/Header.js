import React from 'react';

function Header() {
  return (
    <div>
      {/* Dark overlay to boost logo contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Logo section */}
      <div className="absolute top-0 left-35 p-6 z-10">
        <img
          className="w-52 drop-shadow-lg"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
        />
      </div>
    </div>
  );
}

export default Header;
