/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      numberOfAttempt:0,
      matchedValue:'',
      numberOfMatch:0,
      cardData:['A','B','C','D','E','F','G','H','A','B','C','D','E','F','G','H'],
      newNumberOfAttempt:0

    }
  }
 
  shuffleArray(array){
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  
  onClickCard=(item,index)=>{
  const{numberOfAttempt}=this.state;
  this.setState({matchedValue:item,numberOfAttempt:numberOfAttempt+1/2})
  }
  componentDidUpdate(prevProps,prevState){
    const{matchedValue,numberOfMatch,cardData}=this.state;
   if(prevState.matchedValue==matchedValue && prevState.numberOfMatch==numberOfMatch)
    {
      alert("Matched")
      this.setState({numberOfMatch:numberOfMatch+1,cardData: cardData.filter((pr, ind) => pr !== matchedValue)})
    }

  }
  render (){
    const shuffled = this.shuffleArray(this.state.cardData);
    const {numberOfMatch,numberOfAttempt}=this.state;
  return (
    <SafeAreaView>
         <View style={styles.mainContainer}> 
        <Text style={styles.headingStyle}>Memory Card Game</Text>
        <FlatList
        data={shuffled}
        extraData={shuffled}
        numColumns={4}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{padding:10}}
        renderItem={({item, index}) => {
      return (
      <View style={ styles.cardContainer }>
      <TouchableOpacity style={ styles.card } onPress={(index) => this.onClickCard(item,index)} >
        <Text style={styles.label}>{item}</Text></TouchableOpacity>
      </View>
      );
     }}
    
    />
   
   <Text>Number Of Match:{numberOfMatch}</Text>
   <Text>Number of Attempt:{numberOfAttempt}</Text> 
    </View>
    </SafeAreaView>
  );
 }
};

const styles = StyleSheet.create({
  mainContainer:{
    justifyContent:'center',
    alignItems:'center',
    top:60
  },
  headingStyle:{
    fontWeight:'bold',
    fontSize:20,
    padding:20
  },
  cardContainer: {
    width: 50,
    height: 100,
    marginLeft:10
  },
  card: {
    width: 50,
    height: 100,
    backgroundColor: 'orange',
    borderRadius: 5,
    shadowColor: 'gray',
    padding:10,
    paddingTop:20,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  card1: {
    backgroundColor: 'blue',
  },
  card2: {
    backgroundColor: 'blue',
  },
  label: {
    lineHeight:50,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'System',
    color: 'black',
    backgroundColor: 'yellow',
  },
});


