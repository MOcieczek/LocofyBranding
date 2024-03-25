import { memo, useMemo } from "react";
import "./Input.css";

const Input = memo(
  ({
    title,
    showDepth7Frame0,
    inputHeight,
    depth6Frame0AlignSelf,
    depth7Frame0AlignSelf,
    depth7Frame0Width,
    depth8Frame0BackgroundColor,
    depth8Frame0Height,
    depth8Frame0Flex,
  }) => {
    const inputStyle = useMemo(() => {
      return {
        height: inputHeight,
      };
    }, [inputHeight]);

    const depth6Frame0Style = useMemo(() => {
      return {
        alignSelf: depth6Frame0AlignSelf,
      };
    }, [depth6Frame0AlignSelf]);

    const depth7Frame0Style = useMemo(() => {
      return {
        alignSelf: depth7Frame0AlignSelf,
        width: depth7Frame0Width,
      };
    }, [depth7Frame0AlignSelf, depth7Frame0Width]);

    const depth8Frame0Style = useMemo(() => {
      return {
        backgroundColor: depth8Frame0BackgroundColor,
        height: depth8Frame0Height,
        flex: depth8Frame0Flex,
      };
    }, [depth8Frame0BackgroundColor, depth8Frame0Height, depth8Frame0Flex]);

    return (
      <div className="input" style={inputStyle}>
        <div className="depth-6-frame-0" style={depth6Frame0Style}>
          {showDepth7Frame0 && (
            <div className="depth-7-frame-0" style={depth7Frame0Style}>
              <div className="title3">{title}</div>
            </div>
          )}
          <div className="depth-8-frame-0" style={depth8Frame0Style}>
            <div className="depth-6-frame-0">
              <div className="depth-10-frame-0">
                <div className="type">Type</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Input;
