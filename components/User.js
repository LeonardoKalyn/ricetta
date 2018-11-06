import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Thumbnail } from 'native-base';

const User = ({
  user
}) => (
  <View style={styles.profileContainer}>
    <Thumbnail small source={{uri: user.photo}} />
    <Text style={styles.profileName}>
      {user.name}
    </Text>
  </View>
);

const styles = StyleSheet.create({
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
});

export default User;