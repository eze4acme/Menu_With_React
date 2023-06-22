import menu from '../data'
import './App.css'


function App (){
  return (
   <div className="section">
     <div className="container">
      <NavBar />
      <MenuList />
    </div>
   </div>
  )
}

function NavBar() {
  return(
    <h1>navbar</h1>
  )
}

function MenuList() {
  return (

    <Menu />
  )
}
function Menu() {
  return (
    <h1>working</h1>
  )
}



export default App;