import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'

const Logo = () => {
   return (
      <View className='bg-orange-600 flex-row justify-around py-3'>
         <Image 
            source={require('../../assets/cover/logo.png')} 
            className='w-7 h-7 rounded-full p-1'
         />
         <TextInput
            className='bg-white w-3/4'
            placeholder='search her'
         />
      </View>  
   )
}

export default Logo