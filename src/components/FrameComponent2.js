import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent2.css";

const FrameComponent2 = memo(() => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/brand");
  }, [navigate]);

  return (
    <section className="drag-and-drop-area-wrapper">
      <div className="drag-and-drop-area">
        <div className="dropzone">
          <img
            className="add-big-icon1"
            loading="lazy"
            alt=""
            src="/24--addbig@2x.png"
          />
        </div>
        <div className="drag-and-drop">Drag and drop visuals you like</div>
        <div className="max-file-size">Max. File Size: 25 MB</div>
        <div className="button4">
          <div className="button5" onClick={onButtonContainerClick}>
            <img className="left-icon5" alt="" src="/lefticon.svg" />
            <div className="children13">Continue</div>
            <img className="right-icon5" alt="" src="/lefticon.svg" />
          </div>
        </div>
      </div>
    </section>
  );
});

export default FrameComponent2;
