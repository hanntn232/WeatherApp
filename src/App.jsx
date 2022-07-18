import logo from './logo.svg';
import './App.css';
import { Introduction } from './day1'
import {Star} from './Component/Start'
import {Weather} from './Component/Weather'
function App() {
  // const myArr = [
  //   <Star active={true} ></Star>,
  //   <Star active={true}></Star>,
  //   <Star active={true}></Star>,
  //   <Star active={false}></Star>,
  //   <Star active={false}></Star>
  // ]


  // const myArr2 = [
  //   true, true, true, false, false
  // ].map((value,index) => <Star active={value} key={index}></Star>)

  
  // return (
  //  <div className='text-align'>
  //   {myArr2}
  //  </div>
  // );
  return <Weather></Weather>
}

export default App;
