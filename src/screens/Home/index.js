import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Goal from '../../components/organism/Goal'
import {useTranslation} from 'react-i18next';

const Home = () => {
  const {t, i18n} = useTranslation();
  return (
    <View style={styles.container}>
      <Goal/>
      <Button title='Change Language' style={styles.langButton} onPress={() => i18n.changeLanguage(i18n.language === "en" ? "es" : "en")}></Button>
    </View>
  )
}

export default Home

