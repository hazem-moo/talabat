import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { products } from '../data/products'
import Items from './Items'

const SyrFoods = () => {
   let syr = products.filter(el => el.tags === 'syr')
  return (
    <View className='mb-16'>
      <View className='bg-orange-600 my-2 flex-row justify-center'>
         <Text className='text-white text-lg font-bold py-2'> حلويات شرقيه </Text>
      </View>
      <FlatList
         data={syr}
         renderItem={({item}) => <Items item={item} /> }
         horizontal
         showsHorizontalScrollIndicator={ false }
      />
    </View>
  )
}

export default SyrFoods