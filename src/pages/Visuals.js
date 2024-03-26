import FrameComponent2 from "../components/FrameComponent2";
import "./Visuals.css";

const Visuals = () => {
  return (
    <div className="visuals">
      <header className="top3">
        <div className="logo2">
          <div className="image4">
            <img
              className="image-icon4"
              loading="lazy"
              alt=""
              src="/image@2x.png"
            />
            <div className="src4">null</div>
            <div className="alt4">INSERT_ALT</div>
          </div>
        </div>
        <div className="top-inner1">
          <div className="rectangle-div" />
        </div>
      </header>
      <FrameComponent2 />
    </div>
  );
};

export default Visuals;
