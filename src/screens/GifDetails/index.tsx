import React from 'react';
import { StatusBar, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import { IGif } from '../../interfaces/IGif';
import { BackButton } from '../../components/BackButton';
import { GifShowcase } from '../../components/GifShowcase';

import { Container, Header, Title, TitleContainer } from './styles';

export interface GifDetailsRouteParams {
  gif: IGif;
}

export const GifDetails: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { gif } = route.params as GifDetailsRouteParams;
  const theme = useTheme();

  return (
    <Container>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={theme.colors.background_primary}
      />
      <Header>
        <BackButton onPress={() => navigation.goBack()} />

        <TitleContainer>
          <Title numberOfLines={1} length={gif.title.length}>
            {gif.title}
          </Title>
        </TitleContainer>

        <View style={{ height: 24, width: 24 }} />
      </Header>

      <GifShowcase gif={gif} />
    </Container>
  );
};
