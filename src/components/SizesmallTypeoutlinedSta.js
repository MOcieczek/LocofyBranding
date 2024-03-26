import { memo, useMemo } from "react";
import "./SizesmallTypeoutlinedSta.css";

const SizesmallTypeoutlinedSta = memo(
  ({
    sizesmallTypeoutlinedStaS,
    leadingIcon1,
    label = "Label",
    trailingIcon1,
    leadingIcon = false,
    trailingIcon = false,
    sizesmallTypeoutlinedStaBorderRadius,
    sizesmallTypeoutlinedStaBackgroundColor,
    sizesmallTypeoutlinedStaBorder,
    sizesmallTypeoutlinedStaDisplay,
    sizesmallTypeoutlinedStaFlexDirection,
    sizesmallTypeoutlinedStaPadding,
    labelColor,
  }) => {
    const sizesmallTypeoutlinedStaStyle = useMemo(() => {
      return {
        borderRadius: sizesmallTypeoutlinedStaBorderRadius,
        backgroundColor: sizesmallTypeoutlinedStaBackgroundColor,
        border: sizesmallTypeoutlinedStaBorder,
        display: sizesmallTypeoutlinedStaDisplay,
        flexDirection: sizesmallTypeoutlinedStaFlexDirection,
        padding: sizesmallTypeoutlinedStaPadding,
      };
    }, [
      sizesmallTypeoutlinedStaBorderRadius,
      sizesmallTypeoutlinedStaBackgroundColor,
      sizesmallTypeoutlinedStaBorder,
      sizesmallTypeoutlinedStaDisplay,
      sizesmallTypeoutlinedStaFlexDirection,
      sizesmallTypeoutlinedStaPadding,
    ]);

    const labelStyle = useMemo(() => {
      return {
        color: labelColor,
      };
    }, [labelColor]);

    return (
      <div
        className="sizesmall-typeoutlined-sta"
        style={sizesmallTypeoutlinedStaStyle}
      >
        {leadingIcon && (
          <img className="leading-icon" alt="" src={leadingIcon1} />
        )}
        <div className="label">
          <div className="label1" style={labelStyle}>
            {label}
          </div>
        </div>
        {trailingIcon && (
          <img className="trailing-icon" alt="" src={trailingIcon1} />
        )}
      </div>
    );
  }
);

export default SizesmallTypeoutlinedSta;
