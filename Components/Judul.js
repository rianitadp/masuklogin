import React, {Component} from 'react';
import {View,Text,StyleSheet,Button,Alert,Image} from 'react-native';

export default class Judul extends Component{
	redirect()
	{
			Alert.alert = ("This Button is ready")
			
	}

	render(){
		return(
			<View style = {styles.container}>
			<Image source ={require('./sapa.jpg')} style={{width: 200, height: 200}}/> 
			<Text style = {warna.tin}> Selamat datang Atin !! </Text>
			<Text style = {salon.atin} > Nama : Rianita Dwi Pangestu </Text>
			<Text style = {salon.atin} > Kelas : XI RPL 1 </Text>
			<Text style = {salon.atin} > SMK TELKOM Purwokerto</Text>
			   <Text style = {{ marginBottom : 100}}></Text>
			   <Button title = " Next " color = "#56a6d5" onPress = {() => {this.redirect()}}/>
			</View>


			)
	}
}

const styles = StyleSheet.create({
	container : {
	flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#bee8f0',
	}
});
const warna = {
	tin  : {
		color : "#000000",
		fontSize : 20,
		fontWeight : 'bold',
	}
}

const salon = {
	atin : {
		color : "#4c5057",
		fontSize : 20,
	}
}