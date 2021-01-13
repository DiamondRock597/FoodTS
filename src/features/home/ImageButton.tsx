import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

import VectorImage from '@assets/image/Vector.png';
import OrdersImage from '@assets/image/orders.png';

export enum AllImages {
  Vector = 'vector',
  Orders = 'orders',
}

const imagesProps = {
  [AllImages.Vector]: VectorImage,
  [AllImages.Orders]: OrdersImage,
};

interface Props {
  onPress: () => void;
  title: AllImages;
}

export const ImageButton: React.FC<Props> = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress}>
    <Image source={imagesProps[title]} />
  </TouchableOpacity>
);
