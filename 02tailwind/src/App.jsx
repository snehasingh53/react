

import './App.css'
import Card from './components/Card'

function App() {

let myObj={
  username:"sneha",
  age:21
}
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind test</h1>
     <Card channel="chai aur code"  someObj={myObj}/>
     <Card btnText="click me"/>
   

   
    </>
  )
}

export default App
