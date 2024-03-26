import { memo } from "react";
import "./FrameComponent.css";

const FrameComponent = memo(() => {
  return (
    <div className="button-parent">
      <div className="button1">
        <img
          className="left-icon2"
          loading="lazy"
          alt=""
          src="/lefticon1.svg"
        />
        <div className="children10">Export</div>
        <img className="right-icon2" alt="" src="/righticon.svg" />
      </div>
      <div className="accordionbutton">
        <div className="accordion-button">Accordion Button</div>
        <img className="accordionicon" alt="" src="/accordionicon.svg" />
      </div>
      <div className="accordionbutton1">
        <div className="accordion-button1">Accordion Button</div>
        <img className="accordionicon1" alt="" src="/accordionicon.svg" />
      </div>
      <div className="accordionbutton2">
        <div className="accordion-button2">Accordion Button</div>
        <img className="accordionicon2" alt="" src="/accordionicon.svg" />
      </div>
      <div className="accordionbutton3">
        <div className="accordion-button3">Accordion Button</div>
        <img className="accordionicon3" alt="" src="/accordionicon.svg" />
      </div>
      <div className="accordionbutton4">
        <div className="accordion-button4">Accordion Button</div>
        <img className="accordionicon4" alt="" src="/accordionicon.svg" />
      </div>
      <div className="accordionbutton5">
        <div className="accordion-button5">Accordion Button</div>
        <img className="accordionicon5" alt="" src="/accordionicon.svg" />
      </div>
      <div className="accordionbutton6">
        <div className="accordion-button6">Accordion Button</div>
        <img className="accordionicon6" alt="" src="/accordionicon.svg" />
      </div>
      <div className="accordionbutton7">
        <div className="accordion-button7">Accordion Button</div>
        <img className="accordionicon7" alt="" src="/accordionicon.svg" />
      </div>
      <div className="button-group">
        <div className="button2">
          <img className="left-icon3" alt="" src="/lefticon-1.svg" />
          <div className="children11">Add property</div>
          <img className="right-icon3" alt="" src="/righticon.svg" />
        </div>
        <div className="button3">
          <img className="left-icon4" alt="" src="/lefticon.svg" />
          <div className="children12">Refresh</div>
          <img className="right-icon4" alt="" src="/lefticon.svg" />
        </div>
      </div>
    </div>
  );
});

export default FrameComponent;
