import { Linking } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  Gif,
  Description,
  Info,
  Rating,
  RatingText,
  Title,
  Url,
  Loader,
  UrlError,
} from './styles';

import api from '../../services/api';
import { IGif } from '../../interfaces/IGif';

interface GifShowcaseProps {
  gif?: IGif;
}

let randomInterval: NodeJS.Timer;
export const GifShowcase: React.FC<GifShowcaseProps> = ({ gif }) => {
  const [randomGif, setRandomGif] = useState<IGif>(gif);

  const goToUrl = () => {
    Linking.openURL(randomGif.bitly_url);
  };

  useEffect(() => {
    const fetchRandomGif = async () => {
      const { data } = await api.get('/random');

      /* 
        the reason for this is because the api returns an object with a data property
        which then comes with an images object that contains a series of images with different sizes.
        We pick here the fixed_height following the api documentation, since it declares it as 
        the a good size for mobile devices (souce: https://developers.giphy.com/docs/api/schema#image-object)
        */
      setRandomGif(data.data);
    };

    if (!gif) {
      fetchRandomGif();
      randomInterval = setInterval(fetchRandomGif, 10000);

      return () => clearInterval(randomInterval);
    }
  }, []);

  if (!randomGif) {
    return <Loader />;
  }

  return (
    <>
      {randomGif.images.fixed_height.url ? (
        <Gif
          source={{
            uri: randomGif.images.fixed_height.url,
          }}
        />
      ) : (
        <UrlError>Imagem possui link inválido...</UrlError>
      )}

      <Info>
        <Description>
          <Title>
            {randomGif.title.trim().length > 0
              ? randomGif.title
              : '[picgif]: gif has no title'}
          </Title>
          <Url onPress={goToUrl}>{randomGif.bitly_url}</Url>
        </Description>

        <Rating rating={randomGif.rating}>
          <RatingText>{randomGif.rating}</RatingText>
        </Rating>
      </Info>
    </>
  );
};
