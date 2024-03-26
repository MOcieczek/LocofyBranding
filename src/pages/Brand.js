import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import "./Brand.css";

const Brand = () => {
  return (
    <form className="brand">
      <header className="top2">
        <div className="logo-wrapper">
          <div className="logo1">
            <div className="image3">
              <img
                className="image-icon3"
                loading="lazy"
                alt=""
                src="/image@2x.png"
              />
              <div className="src3">null</div>
              <div className="alt3">INSERT_ALT</div>
            </div>
          </div>
        </div>
        <div className="tabs">
          <div className="tab3">
            <div className="children6">Brand</div>
          </div>
          <div className="tab4">
            <div className="children7">Assets</div>
          </div>
          <div className="tab5">
            <div className="children8">Tabs</div>
          </div>
        </div>
        <div className="top-child">
          <div className="select-parent">
            <div className="select">
              <div className="placeholder3">Project name</div>
              <img className="icon1" alt="" src="/icon.svg" />
            </div>
            <div className="button">
              <img className="left-icon1" alt="" src="/lefticon.svg" />
              <div className="children9">Export</div>
              <img className="right-icon1" alt="" src="/lefticon.svg" />
            </div>
          </div>
        </div>
      </header>
      <main className="image-container-wrapper">
        <section className="image-container">
          <div className="frame-group">
            <div className="frame-container">
              <FrameComponent1 image="/image-1@2x.png" />
              <FrameComponent1 image="/image-1@2x.png" />
            </div>
            <div className="frame-parent1">
              <FrameComponent1 image="/image-1@2x.png" />
              <FrameComponent1 image="/image-1@2x.png" />
            </div>
          </div>
          <FrameComponent />
        </section>
      </main>
    </form>
  );
};

export default Brand;
