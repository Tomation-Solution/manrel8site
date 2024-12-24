// import React from "react";
// import Marquee from "react-fast-marquee";

// const MerryChristmasBanner = () => {
//   return (
//     <div style={{ background: "#f00", color: "#fff", padding: "10px" }}>
//       <Marquee speed={50} gradient={false}>
//         Merry Christmas 🎄✨ Merry Christmas 🎄✨ Merry Christmas 🎄✨
//       </Marquee>
//     </div>
//   );
// };

// export default MerryChristmasBanner;


import React from "react";
import Marquee from "react-fast-marquee";

function MerryChristmasBanner() {
  return (
    <Marquee
      gradient={false}
      speed={50}
      style={{
        // backgroundColor: "#f00",
        padding: "10px",
        color: '#000'
        // fontSize: "18px",
      }}
    >
        {/* Merry Christmas 🎄✨ Merry Christmas 🎄✨ Merry Christmas 🎄✨ */}
        MAN wishes her esteemed members and the general public a merry Christmas and a prosperous New Year 🎄✨
    </Marquee>
  );
}

export default MerryChristmasBanner;
