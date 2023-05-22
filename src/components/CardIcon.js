import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { counterCard, findItems, selectWithId } from '../redux/cardSlice'

const CardIcon = _ => {
   const navigation = useNavigation()
   const { items } = useSelector(state => state.cart )
   // const items = useSelector(state => findItems())

   if (items.length === 0 ) return null 
   return (
      <TouchableOpacity 
         onPress={() => navigation.navigate('Basket')}
         className='bg-orange-600 rounded-full w-16 h-16 items-center justify-center absolute bottom-2 z-20 left-3'
      >
         <Text className='text-white font-bold '>
            { items.length }
         </Text>
         <FontAwesome name='cart-plus' size={ 30 } color='#fff' />
      </TouchableOpacity>
   )
}

export default CardIcon