import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ItemList from '../../molecules/ItemList';
import InputButton from '../../molecules/InputButton';
import {styles} from './styles';


const Goal = () => {
    const [goals, setGoals] = useState([]);
    const [inputText, setInputText] = useState('');
    return (
        <View style={styles.goalContainer}>
            <View style={styles.inputSession}>
                <InputButton
                    setInputText={setInputText}
                    inputText={inputText}
                    setGoals={setGoals}
                />
            </View>
            <View style={styles.itemSession}>
                <ItemList goals={goals} setGoals={setGoals} />
            </View>
        </View>
    );
};

export default Goal;


