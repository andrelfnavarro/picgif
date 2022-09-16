import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { IGif } from '../../interfaces/IGif';
import { Dimensions } from 'react-native';

interface RatingProps {
  rating: IGif['rating'];
}

export const Gif = styled.Image`
  width: 100%;
  aspect-ratio: 1;
`;

export const Info = styled.View`
  width: 100%;

  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  margin-top: 16px;
`;

export const Description = styled.View`
  margin-right: 16px;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};

  margin-bottom: 8px;
`;

export const Url = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};

  color: ${({ theme }) => theme.colors.url};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.url};
`;

export const Rating = styled.View<RatingProps>`
  height: 48px;
  width: 48px;

  border-radius: 24px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme, rating }) => theme.colors[rating]};
`;

export const RatingText = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};

  color: ${({ theme }) => theme.colors.text};

  text-transform: uppercase;
`;

export const Loader = styled.ActivityIndicator`
  margin-top: ${Dimensions.get('window').width / 2 - 32}px;
`;

export const UrlError = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.primary_700};
  color: ${({ theme }) => theme.colors.shape_dark};

  margin: ${Dimensions.get('window').width / 2 - 32}px 0;

  text-align: center;
`;
