import { memo } from "react";
import "./SelectedtrueSizemediumSt.css";

const SelectedtrueSizemediumSt = memo(
  ({ brandTab = "Brand", badge = false, onTabItemContainerClick }) => {
    return (
      <div
        className="selectedtrue-sizemedium-st"
        onClick={onTabItemContainerClick}
      >
        <div className="label2">
          <div className="tab-label">{brandTab}</div>
          {badge && (
            <div className="badge">
              <div className="label-frame">
                <div className="text">5</div>
                <div className="min-width" />
              </div>
            </div>
          )}
        </div>
        <div className="selection-indicator" />
      </div>
    );
  }
);

export default SelectedtrueSizemediumSt;
