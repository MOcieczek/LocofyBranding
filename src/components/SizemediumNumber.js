import { memo, useMemo } from "react";
import SelectedtrueSizemediumSt from "./SelectedtrueSizemediumSt";
import SelectedfalseSizemediumS from "./SelectedfalseSizemediumS";
import "./SizemediumNumber.css";

const SizemediumNumber = memo(
  ({
    tabLabelText,
    tabTitleText,
    sizemediumNumber2Position,
    sizemediumNumber2Bottom,
    sizemediumNumber2Left,
    onTabItemContainerClick,
    onTabItemContainer1Click,
    brandTab,
  }) => {
    const sizemediumNumber2Style = useMemo(() => {
      return {
        position: sizemediumNumber2Position,
        bottom: sizemediumNumber2Bottom,
        left: sizemediumNumber2Left,
      };
    }, [
      sizemediumNumber2Position,
      sizemediumNumber2Bottom,
      sizemediumNumber2Left,
    ]);

    return (
      <div className="sizemedium-number2" style={sizemediumNumber2Style}>
        <div className="tab-stack">
          <SelectedtrueSizemediumSt brandTab="Tab label" badge={false} />
          <SelectedfalseSizemediumS tabLabel="Tab label" badge={false} />
        </div>
      </div>
    );
  }
);

export default SizemediumNumber;
