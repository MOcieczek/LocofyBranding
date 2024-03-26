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
      <header className="top">
        <div className="logo">
          <div className="image">
            <img
              className="image-icon"
              loading="lazy"
              alt=""
              src="/image@2x.png"
            />
            <div className="src">null</div>
            <div className="alt">INSERT_ALT</div>
          </div>
        </div>
        <div className="top-inner">
          <div className="frame-child" />
        </div>
      </header>
      <div className="input-wrapper">
        <div className="input" onClick={onInputContainerClick}>
          <div className="placeholder">|Name your brand</div>
        </div>
      </div>
    </div>
  );
};

export default Start;
