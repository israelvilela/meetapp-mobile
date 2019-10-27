import React from 'react';
import { ImageBackground } from 'react-native';

import background from '~/assets/background.png';

export default function Background() {
  return (
    <ImageBackground
      source={background}
      style={{ width: '100%', height: '100%' }}
    />
  );
}
