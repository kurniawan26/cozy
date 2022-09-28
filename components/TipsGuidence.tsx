import { View, Text, Image } from 'react-native';
import React from 'react';

interface TipsGuidenceProps {
  image: any;
  text: string;
  text2: string;
}

const TipsGuidence = (props: TipsGuidenceProps) => {
  const { text, text2, image } = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 16,
      }}
    >
      <Image
        style={{ width: 80, height: 80, marginRight: 16 }}
        source={image}
      />
      <View>
        <Text style={{ fontFamily: 'poppins-medium', fontSize: 18 }}>
          {text}
        </Text>
        <Text style={{ fontFamily: 'poppins-light', fontSize: 14 }}>
          {text2}
        </Text>
      </View>
    </View>
  );
};

export default TipsGuidence;
