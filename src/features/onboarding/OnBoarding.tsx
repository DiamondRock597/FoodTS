import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Dimensions, Image, ScaledSize, Text, View} from 'react-native';
import {CustomButton} from '../../components/CustomButton';
import {styles} from './onboarding';
import {RootScreens, RootStackParamList} from '../../screens/screens';

const {height, width}: ScaledSize = Dimensions.get('window');

interface Props {
  navigation: StackNavigationProp<RootStackParamList, RootScreens.OnBoarding>;
}

export const OnBoarding: React.FC<Props> = ({navigation}: Props) => (
  <View style={styles.bckg}>
    <View style={styles.container}>
      <View style={styles.icon}>
        <Image source={require('../assets/image/icon.png')} />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Food for Everyone</Text>
      </View>
      <View style={styles.imageBlock}>
        <Image
          source={require('../assets/image/logo.png')}
          style={{
            width,
            height: height / 1.6,
            resizeMode: 'stretch',
            position: 'absolute',
            top: 20,
          }}
        />
      </View>
      <View style={{paddingTop: height / 2}}>
        <CustomButton
          onPress={() => navigation.navigate(RootScreens.Register)}
          title="Get started"
          color="#FF460A"
          backgroundColor="white"
        />
      </View>
    </View>
  </View>
);
