import React from 'react';
import { Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Container } from './styles';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

const name = Platform.OS === 'ios' ? 'chevron-left' : 'arrow-left';

interface BackButtonProps extends BorderlessButtonProps {}

export const BackButton: React.FC<BackButtonProps> = props => {
  return (
    <Container {...props}>
      <Feather name={name} size={24} />
    </Container>
  );
};
