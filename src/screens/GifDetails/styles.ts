import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

interface TitleProps {
  length: number;
}

export const Container = styled.View`
  flex: 1;
  padding: ${getStatusBarHeight() + 48}px 16px;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 32px;
`;

export const TitleContainer = styled.View`
  flex: 1;
  padding: 0 16px;
`;

export const Title = styled.Text<TitleProps>`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${({ length }) => RFValue(20)}px;
  text-align: center;
`;
