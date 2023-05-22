import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons'
import CardIcon from '../components/CardIcon'
import { useDispatch, useSelector } from 'react-redux'
import { additems, removeitems, selectWithId } from '../redux/cardSlice'
import { setBasket } from '../redux/basketSlice'

const Product = ({ route, navigation }) => {
  const { id, name, dsc, rate, img, price } = route.params
  const color = "#ea580c" // mean color 
  const icons2 = `*`
  const star2 = icons2.repeat( rate )
  // redux 
  const items = useSelector(state => selectWithId(state, id))
  const dispatch = useDispatch()
  const addToBasket = () => dispatch(additems({ id, name, dsc, rate, img, price }))
  let removeFromBasket = () => dispatch( removeitems({ id }) )
   
  return (
    <SafeAreaView className='flex-1'>
      <ScrollView>
        {/* icon go to back */}
        <TouchableOpacity 
          className='absolute left-4 top-8 z-20' 
          onPress={ navigation.goBack }
        >
          <FontAwesome 
            name='arrow-circle-right' 
            color={ color } 
            size={ 39 } 
          />
        </TouchableOpacity>
        {/* image */} 
        <Image source={ img } className='w-full h-96' />
        {/* container */}
        <View 
          style={{ 
            marginLeft: 8, 
            marginRight: 8 
          }}
        >
          {/* name product */}
          <Text className='text-orange-600 text-xl font-black my-2'>
            { name }
          </Text>
          <View className='flex-row w-1/3 justify-between my-1'>
            <Text className='font-bold'>
              التقييم : ({rate}) 
            </Text>
            <Text className='text-xl text-orange-600 px-2'>{ star2 }</Text>
          </View>
          <Text className='text-center '>{ dsc }</Text>
          {/* price product  */}
          <View className='flex-row justify-between mt-5 mb-6'>
            { /* price */ }
            <Text className='text-orange-600 pr-4 font-extrabold text-base'>
              { price }
            </Text>
            {/* container icons */}
            <View className='flex-row justify-around w-1/3'>
              <TouchableOpacity onPress={ addToBasket }>
                <FontAwesome name='plus-circle' size={ 33 } color={ color }/>
              </TouchableOpacity>
              <Text className='p-2 font-black'>
                { items.length }
              </Text>
              <TouchableOpacity 
                onPress={ removeFromBasket }
              >
                <FontAwesome 
                  name='minus-circle' 
                  size={ 33 } 
                  color={items.length === 0 ? '#999' : color} 
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <CardIcon />
    </SafeAreaView>
  )
}

export default Product