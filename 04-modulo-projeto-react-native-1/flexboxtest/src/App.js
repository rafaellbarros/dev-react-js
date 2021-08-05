import * as React from 'react'
import {View, StyleSheet} from 'react-native'

export default class App extends React.Component {
	render() {
		return (
			<View style={sytles.container}>
				<View style={sytles.box1}></View>
				<View style={sytles.box2}></View>
				<View style={sytles.box3}>
					<View style={sytles.subbox}></View>
					<View style={sytles.subbox}></View>
					<View style={sytles.subbox}></View>
				</View>
			</View>
		)
	}
}

const sytles = StyleSheet.create({
	container: {
		flex: 1, // line
		flexDirection: 'column',
		backgroundColor: '#fff',
		alignItems: 'stretch',
		justifyContent: 'space-between',
	},
	box1: {
		// padding: 30,
		flex: 1,
		backgroundColor: 'steelblue',
		margin: 4,
	},
	box2: {
		// padding: 30,
		flex: 2,
		backgroundColor: 'steelblue',
		margin: 4,
	},
	box3: {
		// padding: 30,
		flex: 1,
		height: 120,
		backgroundColor: 'steelblue',
		margin: 4,
		flexDirection: 'row',
	},
	subbox: {
		flex: 1,
		margin: 4,
		backgroundColor: 'yellow',
	},
})
