import React from 'react'
import {Text,  FlatList, StyleSheet } from 'react-native';
import GoalItem from './GoalItem';

const ListGoals = ({listGoals, handleDelete}) => {
  return (
  <FlatList style={styles.list} data={listGoals} keyExtractor={(item)=>(item.key)} renderItem={(item)=>(
    <GoalItem name={item.item.name} id={item.item.id} handleDelete={handleDelete}/>
  )}/>
  )
}
const styles= StyleSheet.create({
  list:{
    marginTop:20,
  }
})
export default ListGoals