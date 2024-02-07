import react from "react";
import waldo from "../../assets/waldo-stamp.jpeg";
import wilma from "../../assets/wilma-stamp.jpg";

const CharacterBar = () => {
  return (
    <div>
      <div className="character-bar">
        <div className="character">
          <img className="character-image" src={waldo} alt="Waldo" />
          Waldo
        </div>
        <div className="character">
          <img
            className="character-image wilma-image"
            src={wilma}
            alt="Wilma"
          />{" "}
          Wilma
        </div>
      </div>
    </div>
  );
};

export default CharacterBar;
