import React from 'react'
import { ScrollView, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from '../components/Logo'
import EgyFoods from '../components/EgyFoods'
import CardIcon from '../components/CardIcon'
import KsaFoods from '../components/KsaFoods'
import SyrFoods from '../components/SyrFoods'

const Home = () => {
  return (
    <SafeAreaView className='flex-1'>
      <CardIcon />
      <ScrollView>
        <Logo />
        <EgyFoods />
        <KsaFoods />
        <SyrFoods />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home