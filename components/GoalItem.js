import React from 'react'
import {Text,  View, StyleSheet, Pressable } from 'react-native';

const GoalItem = ({name,id,handleDelete}) => {
  return (
    <Pressable android_ripple={{color:'gray'}} style={({pressed})=> (pressed && styles.pressedItem)} key={id} onPress={handleDelete.bind(this, id)}>
    <View style={styles.goalItem} ><Text style={styles.goal}>{name}</Text></View>
    </Pressable>
  )
}

const styles= StyleSheet.create({
    goalItem:{
        backgroundColor: 'purple',
        color: 'white',
        margin:8,
        padding:10,
        borderRadius: 10
      },
      goal:{
        color: 'white'
      },
      pressedItem:{
        opacity: 0.5
      }
})

export default GoalItem