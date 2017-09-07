import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    const people = this.props.contacts;

    return <ol>{people.map(person => (<li key={person.name}>{person.name}</li>))}</ol>
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList contacts = {[
          {name: 'Prijesh'},
          {name: 'Jijina'},
          {name: 'Aadhith'}
        ]}/>
        <ContactList contacts = {[
          {name: 'Insaf'},
          {name: 'Sijo'},
          {name: 'Albert'},
          {name: 'Sachin'}
        ]}/>
      </div>
    );
  }
}

export default App;
