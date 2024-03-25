import { memo, useCallback } from "react";
import "./TopTab.css";

const TopTab = memo(() => {
  const onTabContainer1Click = useCallback(() => {
    // Please sync "Assets" to the project
  }, []);

  return (
    <header className="toptab4">
      <div className="image8">
        <img className="image-icon8" alt="" src="/image@2x.png" />
        <div className="src8">null</div>
        <div className="alt8">INSERT_ALT</div>
      </div>
      <div className="tabs">
        <div className="tab3">
          <div className="children6">Brand</div>
        </div>
        <div className="tab4" onClick={onTabContainer1Click}>
          <div className="children6">Assets</div>
        </div>
        <div className="tab5">
          <div className="children6">Tabs</div>
        </div>
      </div>
      <div className="select-parent">
        <div className="select">
          <div className="placeholder3">Project name</div>
          <img className="icon1" alt="" src="/icon.svg" />
        </div>
        <div className="button">
          <img className="left-icon1" alt="" src="/lefticon.svg" />
          <div className="children9">Export</div>
          <img className="left-icon1" alt="" src="/lefticon.svg" />
        </div>
      </div>
    </header>
  );
});

export default TopTab;
