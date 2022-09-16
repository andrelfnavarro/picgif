import React, { useEffect, useMemo, useState } from 'react';
import { FlatList, Keyboard, StatusBar, View } from 'react-native';
import {
  BorderlessButton,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import { GifShowcase } from '../../components/GifShowcase';
import { IGif } from '../../interfaces/IGif';
import api from '../../services/api';
import { useDebounce } from '../../hooks/useDebounce';

import {
  CancelSearchButton,
  CancelSearchButtonText,
  Container,
  Header,
  ResultItem,
  ResultItemContainer,
  ResultItemTouchable,
  SearchBar,
  SearchClearIcon,
  SearchIcon,
  SearchInput,
  Title,
} from './styles';

export const Home = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState<IGif[]>([]);

  const debouncedSearch = useDebounce(searchText, 275);
  const navigation = useNavigation();
  const theme = useTheme();

  const handleOnFocus = () => {
    setIsSearching(true);
  };

  const handleOnBlur = () => {
    setIsSearching(false);
  };

  const handleCancelSearch = () => {
    setIsSearching(false);
    setSearchText('');
    setResults([]);
    Keyboard.dismiss();
  };

  const handleClearSearch = () => {
    setSearchText('');
  };

  const navigateToGifDetails = (gif: IGif) => {
    navigation.navigate('GifDetails', { gif });
  };

  const title = useMemo(() => {
    return results.length === 0 && !isSearching
      ? 'Random selected GIF:'
      : 'Search results:';
  }, [isSearching, results.length]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get('/search', {
        params: {
          q: debouncedSearch,
        },
      });

      setResults(data.data);
    };

    if (debouncedSearch) {
      fetchData();
    } else {
      setResults([]);
    }
  }, [debouncedSearch]);

  return (
    <Container>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={theme.colors.background_primary}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Header>
          <SearchBar>
            <BorderlessButton>
              <SearchIcon />
            </BorderlessButton>

            <SearchInput
              value={searchText}
              placeholder="Search for a gif"
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
              onChangeText={setSearchText}
              returnKeyType="search"
              placeholderTextColor={theme.colors.text_detail}
            />

            {searchText.length > 0 && (
              <BorderlessButton onPress={handleClearSearch}>
                <SearchClearIcon />
              </BorderlessButton>
            )}
          </SearchBar>

          {(searchText.length > 0 || isSearching) && (
            <CancelSearchButton onPress={handleCancelSearch}>
              <View accessible accessibilityRole="button">
                <CancelSearchButtonText>Cancel</CancelSearchButtonText>
              </View>
            </CancelSearchButton>
          )}
        </Header>
      </TouchableWithoutFeedback>

      <Title>{title}</Title>

      {results.length === 0 && !isSearching ? (
        <GifShowcase />
      ) : (
        <FlatList
          data={results}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ResultItemContainer>
              <ResultItemTouchable onPress={() => navigateToGifDetails(item)}>
                <ResultItem source={{ uri: item.images.fixed_height.url }} />
              </ResultItemTouchable>
            </ResultItemContainer>
          )}
        />
      )}
    </Container>
  );
};
