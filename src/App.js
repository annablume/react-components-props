import React from 'react';
import './App.css';
import ReactPlayer from 'react-player';

function GreetingMessage() {
  const message = 'Hello Anna Blume!';
  return (
    <div>
      <u>{message}</u>
    </div>
  );
}

function Student(props) {
      return <div>Student is: { props.name } { props.age }</div>
}

function StudentList(props) {
  return <div> { props.children } </div>
}

function Classroom() {
  return (
    <div>
      <em>Welcome</em><Student /><em>It is pleasure to have you here!</em>
    </div>
  )
}





function WelcomeBlock() {
  return (
    <div>
      <GreetingMessage />
      <em>Welcome to our cool page. It is pleasure to have you here!</em>
    </div>
  );
}

function User(props) {
  return <div>User is: { props.firstName }</div>
}

function UserList(props) {
  return <div> { props.children } </div>
}


class Color extends React.Component {
  render() {
    return (
      <div>
        {this.props.favColor}
      </div>
    )
  }
}

 
function App() {
  return (
    <div className="App">
      <GreetingMessage />
      <hr />
      <WelcomeBlock />
      <hr />
      <Student />
      <hr />
      <Classroom />
      <hr />
      <UserList>
        <User firstName="Harper" />
        <User firstName="Mike" />
        <User firstName="Alvaro" />
        <User firstName="Andrea" />
        <hr/>
      </UserList>
      <StudentList>
        <Student name="Eric" age="31" />
        <Student name="Kitty" age="28" />
        <Student name="Mia" age="26" />
        <Student name="Anna" age="19" />
      </StudentList>
      <hr />
      <Color favColor="blue" />
      <hr/>
      <ReactPlayer url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
          playing
          controls
          volume="0.5" />
    </div>
  );
}

export default App;
