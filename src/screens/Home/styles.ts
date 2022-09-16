import styled from 'styled-components/native';
import { Image, TextInput } from 'react-native';
import {
  BorderlessButton,
  TouchableHighlight,
} from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  padding: ${getStatusBarHeight() + 48}px 16px 0;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;

  align-items: center;
  margin-bottom: 32px;
`;

export const SearchBar = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const SearchInput = styled(TextInput)`
  flex: 1;
  border-radius: 4px;
  padding: 16px;

  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const SearchButton = styled(BorderlessButton)``;

export const SearchIcon = styled(Feather).attrs({
  name: 'search',
})`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};

  margin-left: 8px;
`;

export const SearchClearIcon = styled(Feather).attrs({
  name: 'x-circle',
})`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text};

  margin-right: 8px;
`;

export const CancelSearchButton = styled(BorderlessButton)`
  margin-left: 16px;
  justify-content: center;
`;

export const CancelSearchButtonText = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const Title = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary_400};

  margin-bottom: 16px;
`;

export const ResultItemContainer = styled.View`
  flex-grow: 1;
  flex-basis: 0;
`;

export const ResultItemTouchable = styled(TouchableHighlight)`
  margin: 2px;
`;

export const ResultItem = styled(Image)`
  aspect-ratio: 1;
  width: 100%;
`;
