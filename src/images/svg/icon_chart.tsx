import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg width={20} height={18} viewBox="0 0 20 18" {...props}>
      <Path
        d="M18.516 2.402l-2.473 4.534h1.484v3.021L20 5.425h-1.484zM0 0v18h20v-2.007L16 16H2V0zm10 3.86v11.494h4V3.859zM4 7v8.354h4V7zm12 4v4.354h4V11z"
        strokeWidth={0.811573}
        fill={ props.color ? props.color : "#373435" }
      />
    </Svg>
  );
}

export default SvgComponent;
