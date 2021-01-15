import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" {...props}>
      <Path d="M13 1c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3m7 13c0-2.36-1.83-4.4-4.5-5.38C15 9.45 14.06 10 13 10a3 3 0 01-2.76-1.83c-.24.03-.46.06-.67.12L7 7v2.32c-1.5.9-2.55 2.18-2.88 3.68H2v4h3.08c.5.65 1.15 1.22 1.92 1.68V22h2v-2.44c.93.28 1.94.44 3 .44s2.07-.16 3-.44V22h2v-3.32c1.15-.68 2.03-1.62 2.54-2.68H22v-2h-2M7 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
      fill={ props.color ? props.color : "#373435" } />
    </Svg>
  );
}

export default SvgComponent;
