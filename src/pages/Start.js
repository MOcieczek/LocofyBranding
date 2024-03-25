import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Start.css";

const Start = () => {
  const navigate = useNavigate();

  const onInputContainerClick = useCallback(() => {
    navigate("/visuals");
  }, [navigate]);

  return (
    <div className="start">
      <header className="top2">
        <div className="image7">
          <img className="image-icon7" alt="" src="/image@2x.png" />
          <div className="src7">null</div>
          <div className="alt7">INSERT_ALT</div>
        </div>
      </header>
      <div className="input1" onClick={onInputContainerClick}>
        <div className="placeholder2">|Name your brand</div>
      </div>
    </div>
  );
};

export default Start;
