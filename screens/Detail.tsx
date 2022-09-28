import {
  View,
  Text,
  Button,
  Image,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import { AntDesign, Octicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const Detail = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <View style={{ height: 350, width: '100%' }}>
        <Image
          style={{ width: '100%', height: '100%', zIndex: -1 }}
          source={{
            uri: 'https://awsimages.detik.net.id/community/media/visual/2022/07/21/kedubes-australia-habiskan-rp75-miliar-sewa-hotel-yang-terkait-dengan-junta-militer-myanmar.jpeg?w=700&q=90',
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{ position: 'absolute', marginTop: 30, marginLeft: 24 }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#fff',
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <AntDesign name="left" size={20} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#fff',
          borderRadius: 30,
          width: '100%',
          height: '100%',
          zIndex: 100,
          marginTop: -30,
          paddingHorizontal: 24,
          paddingVertical: 30,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View>
            <Text style={{ fontFamily: 'poppins-medium', fontSize: 22 }}>
              Jakarta
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
          <View style={{ flexDirection: 'row' }}>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <Octicons
                  name="star-fill"
                  key={i}
                  size={20}
                  style={{ marginRight: i < 4 ? 4 : 0 }}
                  color={i < 4 ? '#FF9376' : '#989BA1'}
                />
              ))}
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontSize: 16, fontFamily: 'poppins-regular' }}>
            Main Facilities
          </Text>
          <View
            style={{
              marginTop: 12,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <View>
              <Image
                style={{ width: 31.87, height: 32 }}
                source={require('../assets/icons/bar-counter.png')}
              />
              <Text style={{ fontSize: 14, fontFamily: 'poppins-medium' }}>
                1 <Text style={{ fontFamily: 'poppins-light' }}>Dapur</Text>
              </Text>
            </View>
            <View>
              <Image
                style={{ width: 31.87, height: 32 }}
                source={require('../assets/icons/bed.png')}
              />
              <Text style={{ fontSize: 14, fontFamily: 'poppins-medium' }}>
                2 <Text style={{ fontFamily: 'poppins-light' }}>Kasur</Text>
              </Text>
            </View>
            <View>
              <Image
                style={{ width: 31.87, height: 32 }}
                source={require('../assets/icons/cupboard.png')}
              />
              <Text style={{ fontSize: 14, fontFamily: 'poppins-medium' }}>
                3 <Text style={{ fontFamily: 'poppins-light' }}>Lemari</Text>
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={{ fontSize: 16, fontFamily: 'poppins-regular' }}>
              Photos
            </Text>
            <View style={{ marginTop: 16 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View
                  style={{
                    width: 110,
                    height: 88,
                    marginRight: 18,
                  }}
                >
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 16,
                      overflow: 'hidden',
                    }}
                    source={{
                      uri: 'https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg',
                    }}
                  />
                </View>
                <View
                  style={{
                    width: 110,
                    height: 88,
                    marginRight: 18,
                  }}
                >
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 16,
                      overflow: 'hidden',
                    }}
                    source={{
                      uri: 'https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg',
                    }}
                  />
                </View>
                <View
                  style={{
                    width: 110,
                    height: 88,
                    marginRight: 18,
                  }}
                >
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 16,
                      overflow: 'hidden',
                    }}
                    source={{
                      uri: 'https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg',
                    }}
                  />
                </View>
                <View
                  style={{
                    width: 110,
                    height: 88,
                    marginRight: 18,
                  }}
                >
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 16,
                      overflow: 'hidden',
                    }}
                    source={{
                      uri: 'https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg',
                    }}
                  />
                </View>
                <View
                  style={{
                    width: 110,
                    height: 88,
                    marginRight: 18,
                  }}
                >
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 16,
                      overflow: 'hidden',
                    }}
                    source={{
                      uri: 'https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg',
                    }}
                  />
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Detail;
