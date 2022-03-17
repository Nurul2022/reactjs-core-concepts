import logo from './logo.svg';
import './App.css';

const number = 5555;
const singers = [
 {name: 'Dr. Mahfuz', job: 'Singer'},
 {name: 'Ena Rahman', job: 'Singer2'},
 {name: 'Agun', job: 'sopno'},
 {name: 'Asif', job: 'Opria'}
]

const singerStyle = {
  color: 'purple',
  backgroundColor: 'White'
}
function App() {
  const nayoks = ['Mohammad', 'Abu Bakr', 'Omar', 'Osman', 'Hazrat Ali', 'Abu Hamza' ]
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }
      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}
      {
        singers.map(singer => <Person name= {singer.name}></Person>)
      }
      {/* <Person name= {nayoks[0]} nayika= 'Mousumi'></Person>
      <Person name= {nayoks[1]} nayika= 'cheka'></Person>
      <Person name= {nayoks[2]} nayika= 'Kopila'></Person> */}
      <h5>New component. YAY</h5>
      <p>React is RocK Mama</p>
      <Friend movie= 'Hazrat Ali' phone= '01971' ></Friend>
      <Friend phone= '01741'></Friend>
    </div>
  );
}

function Person(props) {
  console.log(props);
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
    </div>
  )
}
function Friend(props) {
  console.log(props)
  return (
    <div className='container'>
      <h3>Name: {props.movie}</h3>
      <p>phone: {props.phone}</p>
    </div>
  )
}

export default App;
