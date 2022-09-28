import { View, Text } from 'react-native';
import React from 'react';
import { Image } from 'react-native';

const RecommendedSpace = () => {
  return (
    <View
      style={{
        width: 329,
        height: 110,
        flexDirection: 'row',
        marginBottom: 30,
      }}
    >
      <Image
        style={{
          width: 130,
          height: 110,
          borderRadius: 18,
          marginRight: 20,
        }}
        source={{
          uri: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVkcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80',
        }}
      />
      <View style={{ justifyContent: 'space-between', padding: 8 }}>
        <View>
          <Text style={{ fontSize: 18, fontFamily: 'poppins-medium' }}>
            Roemah Nenek
          </Text>
          <Text style={{ fontFamily: 'poppins-light', fontSize: 16 }}>
            <Text
              style={{
                fontFamily: 'poppins-medium',
                fontSize: 16,
                color: '#5843BE',
              }}
            >
              $52 /
            </Text>
            month
          </Text>
        </View>
        <Text style={{ fontSize: 14, fontFamily: 'poppins-light' }}>
          Bandung
        </Text>
      </View>
    </View>
  );
};

export default RecommendedSpace;
