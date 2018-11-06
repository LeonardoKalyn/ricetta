import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Icon } from 'native-base';
import User from './User';
import Carousel from './Carousel';
import Ingredients from './Ingredients';

export default class Recipe extends React.Component {
  render() {
    const { recipe, showIngredients } = this.props;
    return (
      <View style={styles.container}>
        <User user={recipe.user} />
        <Carousel photos={recipe.photos} />
        <View style={styles.actionsContainer}>
          <View style={styles.actionsLeft}>
            <Icon type='Entypo' name='heart-outlined' style={styles.icon} />
            <Icon type='FontAwesome' name='comment-o' style={styles.icon} />
            <Icon type='Feather' name='send' style={styles.icon} />
          </View>
          <View style={styles.actionsRight}>
            <Icon type='Entypo' name='link' style={styles.icon} />
            <Icon type='MaterialIcons' name='add-shopping-cart' style={styles.icon} />
            <Icon type='Entypo' name='bookmark' style={styles.icon} />
          </View>
        </View>
        {
          showIngredients &&
          <Ingredients ingredients={recipe.ingredients} directions={recipe.directions} />
        }
      </View>
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
    justifyContent: 'space-between',
  },
  actionsLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
  },
  actionsRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 5,
  },
  icon: {
    color: 'gray',
    padding: 5,
    margin: 5,
  },
});
