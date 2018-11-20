import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, TextInput, Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello",
      listTodo: []
    }
  }

  submitText = () => {
    let todos = this.state.listTodo.concat(this.state.text)
    this.setState({
      listTodo: todos,
      text: ""
    })
  }

  showTodo = todos => {
    let result = null
    result = todos.map((todo, index) => {
      return (<Text key={index} style={styles.textTodo}>{todo}</Text>)
    })
    return result
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Todo App</Text>
        </View>
        <View style={styles.main}>
          <ScrollView>
            {this.showTodo(this.state.listTodo)}
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={text => this.setState({text})}
              value={this.state.text}
            />
            <Button
              onPress={this.submitText}
              title="Submit"
              color="#841584"
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 30,
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    backgroundColor: '#f29900',
    flex: 1
  },
  textHeader: {
    textAlign: 'center',
    color: 'white',
    margin: 10,
    fontSize: 20
  },
  main: {
    flex: 16
  },
  textTodo: {
    fontSize: 26,
    padding:10
  }
});
