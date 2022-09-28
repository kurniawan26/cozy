import React from 'react';
import { Text, TextProps } from './Themed';

export function MonoText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
  );
}

interface CommonText {
  text: string;
}

export function MediumText(props: CommonText) {
  const { text } = props;
  return (
    <Text
      style={{
        paddingTop: 24,
        fontFamily: 'poppins-medium',
        fontSize: 24,
      }}
    >
      {text}
    </Text>
  );
}

export function LightText(props: any) {
  return (
    <Text
      {...props}
      style={{ fontSize: 16, fontFamily: 'poppins-light', color: '#82868E' }}
    />
  );
}

export function RegularText(props: any) {
  return (
    <Text {...props} style={{ fontFamily: 'poppins-regular', fontSize: 16 }} />
  );
}
