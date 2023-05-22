import { View, Text, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { removeitems, selectedItems, totalPrice } from '../redux/cardSlice'
import { FontAwesome } from '@expo/vector-icons'

const Basket = ({ navigation }) => {
  const totalPrices = useSelector( totalPrice )
  const items = useSelector( selectedItems )
  const dispatch = useDispatch()

  // select one object with id 
  const render = ({ item, id }) => {
    if (items.id === id) {
      items.find(el => el.id === id )
    }
    return (
      <View className='flex-row justify-between my-5 bg-slate-300 rounded-xl w-full h-32 overflow-hidden p-1'>
        <TouchableOpacity 
          onPressOut={() => dispatch( removeitems({ id })) }
          className='absolute -top-1 -right-0.5 z-20'
        >
          <FontAwesome name='times-circle' size={35} color={ color } />
        </TouchableOpacity>
        <Image source={item.img} className='w-2/4 h-full' />
        <View className='justify-evenly w-full h-full items-start ml-1'>
          <Text className='text-orange-600 font-black text-lg'>{ item.name }</Text>
          <Text className='text-orange-600 font-bold text-base'>{ item.price }</Text>
        </View>
      </View>
    )
  }

  const color = "#ea580c" // mean color 
  return (
    <SafeAreaView className='bg-slate-300'>
      <ScrollView>
        <TouchableOpacity 
          onPressOut={ navigation.goBack }
          className='absolute top-10 left-5 z-10'
        >
          <FontAwesome name='times-circle' size={35} color={ color } />
        </TouchableOpacity>
        <View>
          <Image source={require('../../assets/cover/logo2.jpg')} className='h-96 w-full' />
          <View className='absolute top-24'>
            <Text className='text-orange-600 text-xl font-bold'> السعر الاجمالي: {totalPrices} </Text>
          </View>
        </View>
        <View className='mx-4'>
          {
            items.length === 0 ?
            (
              <View className='flex-1 justify-evenly items-center h-80'>
                <FontAwesome name='shopping-basket' size={50} color={color} />
                <Text className='text-4xl text-orange-600 font-bold'>
                  السله فارغة
                </Text>
              </View>
            ) :
            (
              <FlatList
                data={ items }
                renderItem={ render }
                keyExtractor={item => item.id}
              />

            )
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Basket