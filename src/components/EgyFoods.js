import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { products } from '../data/products'
import Items from './Items'

const EgyFoods = () => {
  let egy = products.slice(0, 6)
  const render = ({ item }) =>  <Items item={ item }/>
  return (
    <View>
      <View className='bg-orange-600 my-2'>
        <Text className='font-bold text-white py-2 text-center text-lg'> اكلات مصريه </Text>
      </View>
      <FlatList
        data={ egy }
        renderItem={ render }
        horizontal
      showsHorizontalScrollIndicator={ false }
      showsVerticalScrollIndicator={ false }
      keyExtractor={item => item.id}
      />
    </View>
  )
}

export default EgyFoods