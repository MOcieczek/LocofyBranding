import { memo } from "react";
import "./FrameComponent1.css";

const FrameComponent1 = memo(({ image }) => {
  return (
    <div className="lorem-ipsum-parent">
      <div className="lorem-ipsum1">Colour palette</div>
      <div className="image5">
        <img className="image-icon5" alt="" src={image} />
        <div className="src5">null</div>
        <div className="alt5">INSERT_ALT</div>
      </div>
    </div>
  );
});

export default FrameComponent1;
