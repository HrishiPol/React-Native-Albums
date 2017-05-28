import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = ({ record }) => {

const { title, artist, thumbnail_image, image, url } = record;
const { headerContentStyle, thumbnail_style, thumbnail_container_style, headerTextStyle, image_Style } = styles;

  return (
      <Card>
        <CardSection>
          <View style={thumbnail_container_style}>
            <Image
            style={thumbnail_style}
            source={{ uri: thumbnail_image }}
            />
          </View>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
          </CardSection>

          <CardSection>
            <Image
              style={image_Style}
              source={{ uri: image }}
              />
          </CardSection>

          <CardSection>
            <Button onPress={() => Linking.openURL(url)} />
          </CardSection>
      </Card>
  );
};

const styles = {

  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  headerTextStyle: {
    fontSize: 18
  },

  thumbnail_style: {
    height: 50,
    width: 50
  },

  thumbnail_container_style: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },

  image_Style: {
    height: 300,
    flex: 1,
    width: null
  }


};

export default AlbumDetails;
