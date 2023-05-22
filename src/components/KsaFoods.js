import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { products } from '../data/products'
import Items from './Items'

const KsaFoods = () => {
   let ksa = products.filter(el => el.tags === 'ksa' ) 
   return (
      <View>
         <View className='bg-orange-600 my-2 flex-row justify-center'>
            <Text className='text-white text-lg font-bold py-2'> اكالات خليجية </Text>
         </View>
         <FlatList
            data={ksa}
            renderItem={({ item }) => <Items item={item} /> }
            horizontal
            showsHorizontalScrollIndicator={ false }
         />
      </View>
   )
}

export default KsaFoods