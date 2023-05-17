import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-900">
      <Text className="text-4xl font-bold text-white">Hello Word</Text>
      <StatusBar style="light" translucent />
    </View>
  )
}
