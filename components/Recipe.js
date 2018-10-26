import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Thumbnail, Icon } from 'native-base';
import Carousel from './Carousel';

export default class Recipe extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { user, photos } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Thumbnail small source={user.photo} />
          <Text style={styles.profileName}>
            {user.name}
          </Text>
        </View>
        <Carousel photos={photos} />
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5,
  },
  profileName: {
    marginLeft: 10,
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
