import { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Modal, Image } from 'react-native';
import ListGoals from './components/ListGoals';
import { StatusBar } from 'expo-status-bar';



export default function App() {

const [goal, setGoal]= useState('');
const [listGoals, setListGoals]= useState([]);
const [checkModal, setCheckModal]= useState(false)
const handleChange= (enteredText)=>{
setGoal(enteredText)
}
const handlePress= ()=>{
setListGoals(listGoals=>[...listGoals, {
  name:goal,
  id: Math.random()
}])
setGoal('')
setCheckModal(checkModal=> !checkModal)
}
const handleDelete=(id)=>{
setListGoals(listGoals=>{
 return listGoals.filter((item)=>item.id!==id)
})
}
const modalCheck= ()=>{
  setCheckModal(true)
}
const handleCancel= ()=>{
  setCheckModal(false)
}
  return (<>
  <StatusBar style='light'/>
    <View style={styles.container}>
      <Button title='Add a Goal' onPress={modalCheck} color='blue'/>
      <Modal visible={checkModal} animationType='slide'>
       
      <View style={styles.inputContainer}>
      <Image style={styles.image} source={require('./assets/photos/goal.png')}/>
      <TextInput style={styles.input} placeholder='add your goals...' onChangeText={handleChange} value={goal}/>
      
      <View style={styles.buttonContainer}>
      <View style={styles.buttons}>
      <Button onPress={handlePress} title='ADD GOAL' color={'#5e0acc'} />
      </View>
      <View style={styles.buttons}>
      <Button onPress={handleCancel} title='CANCEL' color={'red'} />
      </View>
      </View>
      </View></Modal>
      <View  style={styles.goalsContainer}>
        {/* <ScrollView alwaysBounceVertical={false}>
      {listGoals.map((goal,index)=> <View style={styles.goalItem}><Text style={styles.goal} key={index}>{goal}</Text></View>)}
      </ScrollView> */}
      <ListGoals listGoals={listGoals} handleDelete={handleDelete}/>

      </View>   
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:50,
    paddingHorizontal: 16,
    backgroundColor:'#1e085a'
  },
  inputContainer:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#3609b5'
  },
  input:{
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
    marginRight:8,
    width: '70%',
    color: 'white',
    backgroundColor: '#9baaff',
    borderRadius: 7
  },
  goalsContainer:{
    flex: 5
  },
  buttonContainer:{
  flexDirection: 'row',
  marginVertical:20
  },
  buttons:{
    marginHorizontal:10,
  },
  image:{
    width: 100,
    height: 100,
    margin: 20
  }
 
});
