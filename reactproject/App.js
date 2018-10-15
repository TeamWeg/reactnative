import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Yeet name="Will"/>
      </View>
    );
  }
}

class Yeet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowing: true,
    };

    setInterval(() => {
      this.setState(previousState => {
        return { isShowing: !previousState.isShowing };
      });
    }, 100)
  }
  render() {
    let pic = {
      'uri': 'https://upload.wikimedia.org/wikipedia/commons/2/22/Joseph_Campbell_Company_%283093577454%29.jpg'
    };
    let display = this.state.isShowing ? <Text>Yeet, {this.props.name}!</Text> : '';
    return (
      <View style={styles.container}>
        <Text>{display}</Text>
        <View>
          <Image source={pic} style={{height:200, width:150}}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
