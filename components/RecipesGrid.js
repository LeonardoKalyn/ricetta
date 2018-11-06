import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';

const {width} = Dimensions.get('window');
const numberGrid = 3;
const itemWidth = width / numberGrid;

export default class Recipe extends React.Component {
  renderItem = ({item}) => {
    return (
      <View>
        <Image source={{uri: item.avatar}} style={styles.itemImage} />
      </View>
    );
  }

  render() {
    const { recipes } = this.props;
    return (
      <View style={styles.container}>
        <FlatList  
          keyExtractor={(_, index) => index} 
          numColumns={numberGrid} data={recipes} 
          renderItem={this.renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemImage:{
    width: itemWidth,
    height: itemWidth
  }
});
