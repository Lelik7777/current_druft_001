import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


/*const Clock = ({date}:{date:Date}) => {
  return(
      <div>
          <h1>Current time:{date.toLocaleTimeString()}</h1>
      </div>
  )
}*/
const getFullName = (user: { name: string, secondName: string }) => {
    return user.name + ' ' + user.secondName;
}
const user = {
    name: 'alex',
    secondName: 'ivanov',
}
type PropsType = {
    title: string;
}
type StateType = {
    date: Date;
}

class Clock extends React.Component<PropsType, StateType> {
    timerId: ReturnType<typeof setInterval> | undefined;

    constructor(props: PropsType) {
        console.log('CONSTRUCTOR');
        super(props);
        this.state = {date: new Date()};
        //this.timerId=setInterval(()=>tick(),1000);
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.timerId = setInterval(() => this.tick(), 1000);
    }
componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<StateType>, snapshot?: any) {
        if(prevState.date!==this.state.date)
            console.log('componentDidUPdate')
}

    componentWillUnmount() {
        console.log('componentWilUnmount');
        this.timerId && clearInterval(this.timerId);
    }

    tick() {
        console.log('tick')
        this.setState({date: new Date()});
    }
    render() {
        return (
            <div>
                <h1>{name}</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>

            </div>
        );
    }
}
class Example extends React.Component {
    state = {
        name: "qww"
    }


    changeState = () => {
        this.setState({name: "qwwer"}, () => this.setState({name: 'qwertyu'}))//этот callback сработает сразу же после срабатывания this.setState
        console.log(this.state.name)
    }
    render() {
        return <div>{this.state.name}
            <button onClick={this.changeState}>CHANGE NAME</button>
        </div>;
    }
}
/*useEffect(() => {
    console.log('qqwer')
    return () => clearInterval
},[])*/

const name = 'alex';
const element = <div>hello,{name}</div>;
const tick = () => {
    ReactDOM.render(
        <Clock title={'Moscow time'}/>,
        document.getElementById('root')
    );
}
setInterval(tick, 1000);
//
// function fullName(name: string = '', surname: string = '') {
//     let fullName = name + ' ' + surname;
//     if (fullName) {
//         return <div>
//             <h1>hello,{fullName}</h1>
//         </div>
//     } else {
//         return <div>
//             <h1>hello,stranger</h1>
//         </div>
//     }
// }
//
// ReactDOM.render(fullName('alex', 'pupkin'), document.getElementById('root1'));
//
// function tick() {
//     let element = <h1>it`s {new Date().toLocaleTimeString()}</h1>
//     ReactDOM.render(element, document.getElementById('root'));
// }
//
// //setInterval(tick, 1000);

//ReactDOM.render(element1, document.getElementById('root1'));
// If you want to start measuring performance in your app, pass a function
reportWebVitals();
