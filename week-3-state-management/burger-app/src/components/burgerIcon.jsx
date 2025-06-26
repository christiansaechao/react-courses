import React from "react"

const BurgerIcon = () => {
    return (
      <div className="w-16 h-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="w-full h-full"
        >
          {/* Top Bun */}
          <rect x="8" y="12" width="48" height="12" rx="6" fill="#F4A460" />
          {/* Lettuce */}
          <rect x="8" y="24" width="48" height="4" fill="#228B22" />
          {/* Tomato */}
          <rect x="8" y="28" width="48" height="4" fill="#FF3B3B" />
          {/* Patty */}
          <rect x="8" y="32" width="48" height="8" fill="#4B2E1B" />
          {/* Bottom Bun */}
          <rect x="8" y="40" width="48" height="8" rx="4" fill="#F4A460" />
        </svg>
      </div>
    );
  };
  
  export default BurgerIcon;