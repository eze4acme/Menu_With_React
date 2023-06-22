import menu from "../data";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <MenuList />
      </div>
    </div>
  );
}
// nav-bar section
function NavBar() {
  return (
    <nav className="nav-section">
      <h1 className="logo">
        <span>Rest</span>urant
      </h1>
      <div className="nav-caption">
        <h1 className="title">our menu</h1>
        <ul>
          <li>all</li>
          <li>breakfast</li>
          <li>lunch</li>
          <li>shakes</li>
        </ul>
      </div>
    </nav>
  );
}
//menu listing
function MenuList() {
  const menuItems = menu.map(menuItem => {
    console.log(menuItem);
    return (<Menu 
      key={menuItem.id}
      {...menuItem} />);

  })
  return(
    <section>
       {menuItems}
    </section>
  )
}

//single menu
function Menu(props) {
  const {name, description, price, healthBenefits, image, reviews} =props
  const url = "https://randomuser.me/api/portraits/med/men/75.jpg";
  return (
    <div className="menu">
      <img className="menu-img" src={image} alt="" />
      <div className="title-section">
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
      <div className="description">
        <p className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <p className="health-benefit">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="customer-reviews">
        <img src={url} alt="" />
        <h4 className="username">mark</h4>
        <p className="rating">6.9</p>
        <p className="comment">Lorem, ipsum dolor.</p>
      </div>
    </div>
  );
}

export default App;
