import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

interface SvgProps {
  color: string;
}

function HomeSvg(props: SvgProps) {
  const { color } = props;
  return (
    <Svg width={22} height={21} fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.335.478a1.083 1.083 0 0 1 1.33 0l9.75 7.584a1.083 1.083 0 0 1-1.33 1.71l-.418-.326v9.22c0 1.197-.97 2.167-2.167 2.167h-13a2.167 2.167 0 0 1-2.167-2.166v-9.22l-.418.325a1.083 1.083 0 0 1-1.33-1.71l9.75-7.584ZM9.917 13.25c-.599 0-1.084.485-1.084 1.083v4.334h4.334v-4.334c0-.598-.485-1.083-1.084-1.083H9.917Z"
        fill={color}
      />
    </Svg>
  );
}

function MessageSvg(props: SvgProps) {
  const { color } = props;
  return (
    <Svg width={26} height={26} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.417 5.417a3.25 3.25 0 0 0-3.25 3.25v8.666a3.25 3.25 0 0 0 3.25 3.25h15.166a3.25 3.25 0 0 0 3.25-3.25V8.667a3.25 3.25 0 0 0-3.25-3.25H5.417Zm.537 2.309A1.083 1.083 0 1 0 4.88 9.607l7.584 4.334c.333.19.741.19 1.074 0l7.584-4.334a1.083 1.083 0 0 0-1.075-1.88L13 11.751 5.954 7.726Z"
        fill={color}
      />
    </Svg>
  );
}

function CardSvg(props: SvgProps) {
  const { color } = props;
  return (
    <Svg width={22} height={16} fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.417.417a3.25 3.25 0 0 0-3.25 3.25v8.666a3.25 3.25 0 0 0 3.25 3.25h15.166a3.25 3.25 0 0 0 3.25-3.25V3.667a3.25 3.25 0 0 0-3.25-3.25H3.417Zm0 4.333a1.083 1.083 0 1 0 0 2.167h15.166a1.083 1.083 0 0 0 0-2.167H3.417Zm0 4.333a1.083 1.083 0 0 0 0 2.167h5.416a1.083 1.083 0 1 0 0-2.167H3.417Z"
        fill={color}
      />
    </Svg>
  );
}

function LoveSVg(props: SvgProps) {
  const { color } = props;
  return (
    <Svg width={22} height={20} fill="none" {...props}>
      <Path
        d="M1.826 10.334A5.958 5.958 0 0 1 6.125.25C8.14.25 9.922 2.47 11 4 12.078 2.47 13.86.25 15.875.25a5.958 5.958 0 0 1 4.145 10.24l-8.244 8.463a1.083 1.083 0 0 1-1.552 0l-8.398-8.619Z"
        fill={color}
      />
    </Svg>
  );
}

export { HomeSvg, MessageSvg, CardSvg, LoveSVg };
