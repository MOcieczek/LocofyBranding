import { memo, useMemo } from "react";
import "./App1.css";

const App1 = memo(
  ({
    union,
    appPosition,
    appTop,
    appLeft,
    unionIconWidth,
    unionIconHeight,
  }) => {
    const appStyle = useMemo(() => {
      return {
        position: appPosition,
        top: appTop,
        left: appLeft,
      };
    }, [appPosition, appTop, appLeft]);

    const unionIconStyle = useMemo(() => {
      return {
        width: unionIconWidth,
        height: unionIconHeight,
      };
    }, [unionIconWidth, unionIconHeight]);

    return (
      <div className="app" style={appStyle}>
        <img className="union-icon" alt="" src={union} style={unionIconStyle} />
      </div>
    );
  }
);

export default App1;
