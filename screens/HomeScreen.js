import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';
import Recipe from '../components/Recipe';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };


  render() {
    const recipe = {
      user: {
        photo: 'https://www.profiletalent.com.au/wp-content/uploads/2017/05/profile-talent-ant-simpson-feature.jpg',
        name: 'Leo Kalyn'
      },
      photos: [
        "https://www.lifeloveandsugar.com/wp-content/uploads/2018/04/Raspberry-Chocolate-Layer-Cake6.jpg",
        "https://www.lifeloveandsugar.com/wp-content/uploads/2018/04/Raspberry-Chocolate-Layer-Cake4.jpg",
        "https://www.lifeloveandsugar.com/wp-content/uploads/2018/04/Raspberry-Chocolate-Layer-Cake7.jpg"
      ],
    };
  
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Recipe recipe={recipe} />
          <Recipe recipe={recipe} />
          <Recipe recipe={recipe} />
          <Recipe recipe={recipe} />
          <Recipe recipe={recipe} />
          <Recipe recipe={recipe} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
