import React, { Component } from 'react';
import { Alert, AsyncStorage, StatusBar, Image } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Thumbnail, View, Left, Right, Button, Icon, Text, Footer } from 'native-base';
import { connect } from 'react-redux';

class Splash extends Component {

	static navigationOptions = ({ navigation }) => ({
		header: null,
	})

	componentWillMount(){
		setTimeout(()=> this.props.navigation.navigate('home'), 2000)
		
	}

	render() {
		return (
			<Container>
			<StatusBar hidden={true} backgroundColor='#282828'/>
				<Content style={{backgroundColor: '#282828'}}>
					<View style={{alignItems: 'center', alignContent: 'center', paddingTop: 260, flexDirection: 'column' }}>
						<Image style={{borderRadius: 60, height: 120, width: 120}} source={require('../assets/img/logo1.png')}/>
						<Text 
						style={{color: '#999', paddingTop: 20, fontFamily: '', fontSize: 30 }}  
						onPress={()=> this.props.navigation.navigate('login')} >t e r a m u</Text>
					</View>
				</Content>
				<Footer style={{backgroundColor: '#282828'}}>
					<Text style={{color: '#969696', fontSize: 12}}>Copyright {'\u00A9'} 2019 「テラム」, by teramuza.xyz </Text>
				</Footer>
			</Container>
		);
	}
	
}


const mapStateToProps = (state) => {
	return {
		auth: state.auth
	}
}

export default connect(mapStateToProps)(Splash)