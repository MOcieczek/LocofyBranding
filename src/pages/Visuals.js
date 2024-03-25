import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Visuals.css";

const Visuals = () => {
  const navigate = useNavigate();

  const onDragAndDropAreaClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="visuals">
      <header className="top1">
        <div className="image6">
          <img className="image-icon6" alt="" src="/image@2x.png" />
          <div className="src6">null</div>
          <div className="alt6">INSERT_ALT</div>
        </div>
      </header>
      <div className="drag-and-drop-area" onClick={onDragAndDropAreaClick}>
        <img className="add-big-icon1" alt="" src="/24--addbig@2x.png" />
        <div className="drag-and-drop-or-browse-to-cho-parent">
          <div className="drag-and-drop">Drag and drop visuals you like</div>
          <div className="max-file-size">Max. File Size: 25 MB</div>
        </div>
      </div>
    </div>
  );
};

export default Visuals;
