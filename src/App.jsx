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
    <nav className='nav-section'>
      <h1>our menu</h1>
      <ul>
        <li>all</li>
        <li>breakfast</li>
        <li>lunch</li>
        <li>shakes</li>
      </ul>
    </nav>
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