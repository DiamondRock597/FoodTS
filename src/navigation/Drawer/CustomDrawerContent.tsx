import React from 'react';
import {View, Text, Image} from 'react-native';

import IconFont from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RootScreens} from 'navigation/screens';
import {DrawerContentComponentProps, DrawerContentOptions} from '@react-navigation/drawer';

import {styles} from './styles/custom_drawer_content';

import DrawerImage from '@assets/image/drawer.png';

export const CustomDrawerContent: React.FC<DrawerContentComponentProps<DrawerContentOptions>> = ({navigation}) => (
  <View style={styles.container}>
    <View style={styles.menuBlock}>
      <TouchableOpacity onPress={() => navigation.navigate(RootScreens.Profile)} style={styles.menu}>
        <IconFont name="user" color="#FFFFFF" size={24} />
        <Text style={styles.menuTitle}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(RootScreens.Home)} style={styles.menu}>
        <IconMaterial name="shopping-cart" color="#FFFFFF" size={24} />
        <Text style={styles.menuTitle}>orders</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(RootScreens.Home)} style={styles.menu}>
        <IconMaterial name="local-offer" color="#FFFFFF" size={24} />
        <Text style={styles.menuTitle}>offer and promo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menu}>
        <IconMaterial name="sticky-note-2" color="#FFFFFF" size={24} />
        <Text style={styles.menuTitle}>Privacy policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menu}>
        <IconFont name="shield-alt" color="#FFFFFF" size={24} />
        <Text style={styles.menuTitle}>Security</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(RootScreens.Register)} style={styles.signOutBlock}>
        <Text style={styles.signOutText}>Sign-out</Text>
        <IconMaterial name="arrow-forward" size={22} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
    <View>
      <Image source={DrawerImage} />
    </View>
  </View>
);
