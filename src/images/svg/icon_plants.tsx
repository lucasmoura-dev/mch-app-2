import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      id="svg855"
      viewBox="0 0 3460.7098 2738.9799"
      height="27.389799mm"
      width="34.607098mm"
      xmlSpace="preserve"
      clipRule="evenodd"
      fillRule="evenodd"
      imageRendering="optimizeQuality"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      {...props}
    >
      <G transform="translate(-3.069 -20.319)" id="Camada_x0020_1">
        <Path
          id="path852"
          d="M2995.058 20.319h-501.14l239.81 794.79h501.14zm-578.38 0h-501.15l239.81 794.79h501.15zm-578.39 0h-466.44l239.81 794.79h466.44zm1625.49 1655.92l-228.91-783.88h-501.14l228.91 783.88zm-1623.22 0h466.44l-228.9-783.88h-466.44zm543.69 0h501.14l-228.9-783.88h-501.15zm673.28 963.22c0 85.32-13.4 119.84-98.72 119.84H520.498c-85.32 0-62.57-93.8-62.57-179.12v-1218.57c0-7.14-91.43 10.47-90.49 3.58h-97.65c-387.59 0-314.63 52.68-24.51-237.44l993.81-895.66 475.09 1585.22 1344.82 21.29z"
          fill={ props.color ? props.color : "#373435" }
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
