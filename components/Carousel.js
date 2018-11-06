import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';
import Carousel from 'react-native-carousel-view';

export default class PhotoCarousel extends Component {
  render() {
    const { photos } = this.props;
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={styles.container}>
          <Carousel
            width={375}
            height={300}
            delay={2000}
            indicatorAtBottom={true}
            indicatorSize={20}
            indicatorColor="red"
            animate={false}
          >
            {photos.map( (photo, index) => (
              <View style={styles.contentContainer} key={index} >
                <Image style={styles.image} source={{uri:photo}} />
              </View>
            ))}
          </Carousel>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    borderWidth: 2,
    borderColor: '#CCC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 375,
    height: 300,
  },
});
