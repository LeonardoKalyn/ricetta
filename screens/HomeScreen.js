import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';
import Recipe from '../components/Recipe';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const user = {
      photo: require('../assets/images/user01.png'),
      name: 'Leo Kalyn'
    };
    const photos = [
      require('../assets/images/food01.jpg'),
      require('../assets/images/food02.jpg'),
      require('../assets/images/food03.jpg'),
    ];
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Recipe user={user} photos={photos} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
