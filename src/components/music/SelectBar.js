import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { ic_arrow_drop_down, ic_arrow_drop_up } from "react-icons-kit/md/";

import "./SelectBar.css";

const SelectBar = ({ getGenre }) => {
  const [isVisibil, setIsVisibil] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [isClick, setIsClick] = useState(false);

  const genres = ["Jazz", "Classic", "LoFi", "BossaNova", "Rap", "Fork"];

  const genreClicked = (genre) => {
    //사용자가 장르를 클릭하면 useState변경해주고 Music으로 장르 보내준다
    setSelectedGenre(genre);
    getGenre(genre);
  };

  return (
    <div className="body-wrapper">
      <div
        className="select"
        onClick={() => {
          setIsVisibil(!isVisibil);
          setIsClick(() => {
            if (isClick === false) return true;
            else return false;
          });
        }}
      >
        <div className="selected-option">
          <span>
            {selectedGenre === ""
              ? "오늘의 무드는?"
              : selectedGenre.length <= 20
              ? selectedGenre
              : `${selectedGenre.slice(0, 20)}...`}
          </span>
          <Icon
            className="material-icons"
            size={25}
            icon={isClick ? ic_arrow_drop_up : ic_arrow_drop_down}
          />
        </div>
        {isVisibil && (
          <div className="options">
            {genres.map((genre, index) => (
              <li
                key={index}
                className={selectedGenre === genre ? "active-option" : null}
                onClick={() => genreClicked(genre)}
              >
                {genre}
              </li>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectBar;

// import React, { useState } from "react";
// import { Icon } from "react-icons-kit";
// import { ic_arrow_drop_down, ic_arrow_drop_up } from "react-icons-kit/md/";

// import "./SelectBar.css";

// const SelectBar = (props) => {
//   const [isVisibil, setIsVisibil] = useState(false);
//   const [selectedGenre, setSelectedGenre] = useState("");
//   const [isClick, setIsClick] = useState(false);

//   const options = ["Jazz", "Classic", "LoFi", "BossaNova", "Rap", "Fork"];

//   const genreClicked = (e) => {
//     console.log(e);
//   };

//   return (
//     <div className="body-wrapper">
//       <div
//         className="select"
//         onClick={() => {
//           setIsVisibil(!isVisibil);
//           setIsClick(() => {
//             if (isClick === false) return true;
//             else return false;
//           });
//         }}
//       >
//         <div className="selected-option">
//           <span>
//             {selectedGenre === ""
//               ? "오늘의 무드는?"
//               : selectedGenre.length <= 20
//               ? selectedGenre
//               : `${selectedGenre.slice(0, 20)}...`}
//           </span>
//           <Icon
//             className="material-icons"
//             size={25}
//             icon={isClick ? ic_arrow_drop_up : ic_arrow_drop_down}
//           />
//         </div>
//         {isVisibil && (
//           <div className="options">
//             {options.map((option, index) => (
//               <li
//                 key={index}
//                 className={selectedGenre === option ? "active-option" : null}
//                 onClick={() => setSelectedGenre(option)}
//               >
//                 {option}
//               </li>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SelectBar;
