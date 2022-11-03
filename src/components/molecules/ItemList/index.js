import {FlatList, Pressable, Text, View} from 'react-native';
import React from 'react';
import {styles} from './style';

const ItemList = ({goals, setGoals}) => {
    const deleteGoal = index => {
        const goal = goals.filter((_, itemIndex) => itemIndex !== index);
        setGoals(goal);
    };

    return (
        // FlatList is for lazy loading, we can also use ScrollView
        <FlatList
            data={goals}
            style={styles.container}
            renderItem={itemData => {
                return (
                    <View key={itemData.index} style={styles.goalItem}>
                        <Text style={styles.text}>{itemData.item}</Text>
                        <Pressable onPress={() => deleteGoal(itemData.index)}>
                            <Text style={styles.text}>X</Text>
                        </Pressable>
                    </View>
                );
            }}
        ></FlatList>
    );
};

export default ItemList;
