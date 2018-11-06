import React, { Fragment } from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
} from 'react-native';

const formatIngredient =  (ingredient) => {
  const unity = ingredient.unity ? ingredient.unity.concat(' de ') : '';
  return `${ingredient.quantity} `.concat(unity, ingredient.name);
}
const renderRow = (data, index) =>(
  <Text key={index}>{`\u2022 ${data}`}</Text>
);

const Ingredients = ({
  ingredients,
  directions,
}) => (
  <View style={{flexDirection: "column"}}>
    <View style={styles.container}>
      <Text style={styles.title}>Ingredients</Text>
      {Object.keys(ingredients).map(part => (
        <View key={`ingredient-${part}`} style={styles.partContainer}>
          <Text style={styles.part}>{part}</Text>
          <FlatList 
            data={ingredients[part]}
            renderItem={({item}) => (<Text>{formatIngredient(item)}</Text>)}
            keyExtractor={({item, index})=> `ingredient-${part}-${index}`}
          />
        </View>
      ))}
    </View>
    <View style={styles.container}>
      <Text style={styles.title}>Directions</Text>
      {Object.keys(directions).map(part => (
        <View key={`direction-${part}`} style={styles.partContainer}>
          <Text style={styles.part}>{part}</Text>
          <FlatList 
            data={directions[part]}
            renderItem={({item}) => (renderRow(item))}
            keyExtractor={({item, index})=> `direction-${part}-${index}`}
          />
        </View>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 5,
    marginTop: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  part: {
    fontSize: 16,
    fontWeight: "600",
  },
  partContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  }
});

export default Ingredients;