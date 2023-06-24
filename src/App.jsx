import { useState } from "react";
import data from "../data";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <MenuList />
      </div>
      <Footer />
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
  const [menu, setMenu] = useState(data)
  const menuItems = menu.map((menuItem) => {
    return <Menu key={menuItem.id} {...menuItem} />;
  });
  return <section>{menuItems}</section>;
}

//single menu
function Menu(props) {
  const { name, description, price, healthBenefits, image, reviews } = props;
  console.log(props.reviews.img);
  const healthSection = healthBenefits.map((healthBenefit) => {
    return <li className="list">{healthBenefit}</li>;
  });
  const url = "https://randomuser.me/api/portraits/thumb/women/75.jpg";
  return (
    <div className="menu">
      <img className="menu-img" src={image} alt="" />
      <div className="title-section">
        <h3>{name}</h3>
        <p>$ {price}</p>
      </div>
      <div className="description-section">
        <p className="description">{description}</p>
        <p className="health-benefit">
          <strong>Health Benefit:</strong>
          <ul>{healthSection}</ul>
        </p>
      </div>
      <div className="customer-reviews">
        {reviews.map((review) => {
          const { img, username, rating, comment } = review;
          const url = `https://randomuser.me/api/portraits/thumb/women/${img}.jpg`;
          return (
            <div key={img} className="username-section">
                <img src={url} alt="" />
                <div className="comment-section">
                  <h4 className="username">@{username}</h4>
                  <p className="comment">{comment}</p>
                  <p className="rating">Rating: {rating}</p>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
// footer section
function Footer() {
  return(
    <h4 className="footer"> Develop By &copy; Eze. {new Date().getFullYear()} </h4>
  )
}

export default App;
