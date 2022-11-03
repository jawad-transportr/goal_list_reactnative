import {Button, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';

const InputButton = ({setInputText, inputText, setGoals}) => {
    const {t, i18n} = useTranslation();
    const handleAddGoal = () => {
        if (inputText.length) {
            setGoals(prev => [...prev, inputText]);
            setInputText('');
        } else {
            alert('Please Input Goal !');
        }
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                // placeholder="Place your goals"
                placeholder={t('inputPlaceHolder')}
                onChangeText={setInputText}
                value={inputText}
            ></TextInput>
            {/* <Button title="Add Goal" onPress={handleAddGoal}></Button> */}
            <Button
                title={t('buttonTitle')}
                onPress={handleAddGoal}
            ></Button>
        </View>
    );
};

export default InputButton;
