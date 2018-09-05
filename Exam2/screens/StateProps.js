
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export class StatePropScreen extends Component {

  static navigationOptions = {
    title: 'State & Props Exam',
  };

	render() {

	    const { navigate } = this.props.navigation;

		return (
			<View>
				<Text>{this.props.name}</Text>

				<Button
		          title="Back to Hello Sceen"  onPress={() => navigate('HelloScreen') }
		        />
			</View>		
			)
	}

}