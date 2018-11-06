import React from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import Recipe from '../components/Recipe';
import RecipesList from '../constants/recipes.json';

export default class RecipeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Recipe recipe={RecipesList[0]} showIngredients />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
  },
  icon: {
    color: 'gray',
    padding: 5,
    margin: 5,
  },
});
