import { memo, useMemo } from "react";
import "./AssetLogo.css";

const AssetLogo = memo(
  ({
    rectangle9,
    assetLogoWidth,
    assetLogoHeight,
    rectangleIconTop,
    rectangleIconLeft,
    rectangleIconBorderRadius,
    rectangleIconWidth,
    rectangleIconHeight,
  }) => {
    const assetLogoStyle = useMemo(() => {
      return {
        width: assetLogoWidth,
        height: assetLogoHeight,
      };
    }, [assetLogoWidth, assetLogoHeight]);

    const rectangleIcon1Style = useMemo(() => {
      return {
        top: rectangleIconTop,
        left: rectangleIconLeft,
        borderRadius: rectangleIconBorderRadius,
        width: rectangleIconWidth,
        height: rectangleIconHeight,
      };
    }, [
      rectangleIconTop,
      rectangleIconLeft,
      rectangleIconBorderRadius,
      rectangleIconWidth,
      rectangleIconHeight,
    ]);

    return (
      <div className="assetlogo" style={assetLogoStyle}>
        <div className="assetlogo-inner">
          <img
            className="frame-child"
            alt=""
            src={rectangle9}
            style={rectangleIcon1Style}
          />
        </div>
      </div>
    );
  }
);

export default AssetLogo;
