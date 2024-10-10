import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const login = () => {
  return (
    <SafeAreaView>
      <View className='bg-gray-500'>
      <Text className='text-3xl font-semibold justify-center text-red-400'>login</Text>
      </View>
    </SafeAreaView>
  )
}

export default login