import React from 'react';
import { ScrollView, StyleSheet, Button } from 'react-native';
import PopularCities from '../components/PopularCities';
import RecommendedSpace from '../components/RecommendedSpace';

import SafeArea from '../components/SafeArea';
import { LightText, MediumText, RegularText } from '../components/StyledText';
import { View } from '../components/Themed';
import TipsGuidence from '../components/TipsGuidence';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <SafeArea>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <MediumText text="Explore Now" />
          <LightText>Mencari kosan yang cozy</LightText>
        </View>
        <View style={styles.popularSection}>
          <RegularText>Popular Cities</RegularText>
          <View style={{ marginTop: 16 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <PopularCities />
              <PopularCities />
              <PopularCities />
              <PopularCities />
            </ScrollView>
          </View>
        </View>
        <View style={styles.popularSection}>
          <RegularText>Recommended Space</RegularText>
          <View style={{ marginTop: 16 }}>
            <RecommendedSpace />
            <RecommendedSpace />
            <RecommendedSpace />
          </View>
        </View>
        <View style={styles.popularSection}>
          <RegularText>Tips &amp; Guidance</RegularText>
          <TipsGuidence
            text="City Guidelines"
            image={require(`../assets/images/CG.png`)}
            text2="Updated 20 Apr"
          />
          <TipsGuidence
            text="Jakarta Fairship"
            image={require(`../assets/images/JF.png`)}
            text2="Updated 11 Dec"
          />
        </View>
      </ScrollView>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  popularSection: {
    marginTop: 30,
  },
});
