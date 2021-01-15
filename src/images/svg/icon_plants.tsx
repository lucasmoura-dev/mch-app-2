import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 20 20.130297" height={20.130297} width={20} {...props}>
      <Path
        d="M4.67.193v1.872l1.753-.939L4.67.193m-.417 2.99L3.045 4.482l1.85.66-.64-1.957M.152 4.9l.873 1.873.879-1.873H.153M3.957 0H.01v4.22c.281.09.577.132.873.132 1.767.005 3.203-1.53 3.208-3.429A3.655 3.655 0 003.957 0m14.545 3.5l-2.491 5.232h1.495v3.485l2.492-5.23h-1.496zM0 7.802V20.13h20v-2.007l-4 .007H2V7.802zm10 .707v8.975h4V8.509zm-6 2.036v6.939h4v-6.94zm12 2.585v4.354h4V13.13z"
        strokeWidth={0.510181}
        fill={ props.color ? props.color : "#373435" }
      />
    </Svg>
  );
}

export default SvgComponent;
