import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ImageBackground, Text, TouchableOpacity } from 'react-native'

const Items = ({ item }) => {
   const navigation = useNavigation()
   return (
      <TouchableOpacity 
         onPress={() => 
            navigation.navigate('Product', {
               id: item.id,
               name: item.name,
               dsc: item.dsc,
               img: item.img,
               rate: item.rate,
               price: item.price
            })}
         className='w-32 h-52 rounded-xl my-3 overflow-hidden mx-2'
      >
         <ImageBackground 
            source={ item.img } 
            className='w-full h-full' 
         />   
            <Text 
               className='text-white text-lg z-10 font-black absolute bottom-0 text-center w-full'>
               { item.name }
            </Text>
      </TouchableOpacity>
   )
}

export default Items