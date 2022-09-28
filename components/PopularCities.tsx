import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PopularCities = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        /* 1. Navigate to the Details route with params */
        navigation.navigate('Detail', {
          id: 86,
        });
      }}
    >
      <View
        style={{
          width: 120,
          height: 150,
          borderRadius: 18,
          overflow: 'hidden',
          marginRight: 20,
          borderColor: '#cdd',
          borderWidth: 0.7,
        }}
      >
        <Image
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
          }}
          source={{
            uri: 'https://pix10.agoda.net/hotelImages/65496/-1/acfa2d5d5504ac0b67fdf3dd79eeefa2.jpg?ca=8&ce=1&s=1024x768',
          }}
        />
        <View
          style={{
            width: '100%',
            backgroundColor: '#F6F7F8',
            position: 'absolute',
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              padding: 13,
              fontSize: 16,
              fontFamily: 'poppins-medium',
            }}
          >
            Jakarta
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularCities;
