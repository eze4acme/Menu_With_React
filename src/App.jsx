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
  const menuItems = menu.map((menuItem) => {
    return <Menu key={menuItem.id} {...menuItem} />;
  });
  return <section>{menuItems}</section>;
}

//single menu
function Menu(props) {
  const { name, description, price, healthBenefits, image, reviews } = props;
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
                </div>
              <p className="rating">{rating}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
