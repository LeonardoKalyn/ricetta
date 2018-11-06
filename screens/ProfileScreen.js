import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

import User from '../components/User';
import RecipesGrid from '../components/RecipesGrid';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    const user = {
      photo: "https://img.itdg.com.br/tdg/assets/default/users_avatars/user_avatar_original.png?mode=crop&width=60&height=60",
      name: 'Leo Kalyn'
    };

    const recipesList = [
      {
        id: 1,
        first_name: "George",
        last_name: "Bluth",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
      },
      {
        id: 2,
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
      },
      {
        id: 3,
        first_name: "Emma",
        last_name: "Wong",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
      },
      {
        id: 4,
        first_name: "Eve",
        last_name: "Holt",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
      },
      {
        id: 5,
        first_name: "Charles",
        last_name: "Morris",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
      },
      {
        id: 6,
        first_name: "Tracey",
        last_name: "Ramos",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
      }
    ];

    return (
      <ScrollView style={styles.container}>
        <User user={user} />
        <View style={styles.actionsContainer}>
          <Icon type='Feather' name='grid' style={styles.icon} />
          <Icon type='Foundation' name='book-bookmark' style={styles.icon} />
          <Icon type='SimpleLineIcons' name='book-open' style={styles.icon} />
        </View>
        <RecipesGrid recipes={recipesList} />
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
