import { memo } from "react";
import "./SelectedfalseSizemediumS.css";

const SelectedfalseSizemediumS = memo(
  ({ tabLabel, badge = false, onTabItemContainer1Click }) => {
    return (
      <div
        className="selectedfalse-sizemedium-s"
        onClick={onTabItemContainer1Click}
      >
        <div className="label3">
          <div className="tab-label1">{tabLabel}</div>
          {badge && (
            <div className="badge1">
              <div className="label-frame1">
                <div className="text1">5</div>
                <div className="min-width1" />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default SelectedfalseSizemediumS;
