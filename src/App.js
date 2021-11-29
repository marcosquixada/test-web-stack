import "./App.scss";
import "./animations.scss";
import Img from "./photo.jpg";

function App() {
  
  const showModalFunc = () => {
    let array = ["one", "two", "five"];
    var buttonId = array[Math.floor(Math.random() * 3)];
    
    document.getElementById("modal-container").removeAttribute("class");
    document.getElementById("modal-container").classList.add(buttonId);
    document.body.classList.add("modal-active");
  };

  const hideModal = () => {
    document.getElementById("modal-container").classList.add("out");
    document.body.classList.remove("modal-active");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="header">
          <span className="users-list">Users List</span>
          <input className="search" type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="row">
        <div className="card" onClick={(e) => showModalFunc()}>
          <img src={Img} alt="" />
          <span className="user-name">MARK LANDBERG</span>
          <span className="user-desc">
            Lorem ipsum dolor sit amet, consectetur…
          </span>
        </div>
        <div className="card" onClick={(e) => showModalFunc()}>
          <img src={Img} alt="" />
          <span className="user-name">MARK LANDBERG</span>
          <span className="user-desc">
            Lorem ipsum dolor sit amet, consectetur…
          </span>
        </div>
        <div className="card" onClick={(e) => showModalFunc()}>
          <img src={Img} alt="" />
          <span className="user-name">MARK LANDBERG</span>
          <span className="user-desc">
            Lorem ipsum dolor sit amet, consectetur…
          </span>
        </div>
      </div>
      <div className="row">
        <div className="card" onClick={(e) => showModalFunc()}>
          <img src={Img} alt="" />
          <span className="user-name">MARK LANDBERG</span>
          <span className="user-desc">
            Lorem ipsum dolor sit amet, consectetur…
          </span>
        </div>
        <div className="card" onClick={(e) => showModalFunc()}>
          <img src={Img} alt="" />
          <span className="user-name">MARK LANDBERG</span>
          <span className="user-desc">
            Lorem ipsum dolor sit amet, consectetur…
          </span>
        </div>
        <div className="card" onClick={(e) => showModalFunc()}>
          <img src={Img} alt="" />
          <span className="user-name">MARK LANDBERG</span>
          <span className="user-desc">
            Lorem ipsum dolor sit amet, consectetur…
          </span>
        </div>
      </div>
      <div className="row load-more">
        <button className="button">LOAD MORE</button>
      </div>

      <div id="modal-container">
        <div className="modal-background">
          <div className="modal">
            <div className="row">
              <span className="edit-user">Edit user</span>
            </div>
            <div className="row">
              <div className="map"></div>
              <div className="form">
                <label htmlFor="name" className="label-form">
                  Name
                </label>
                <input id="name" className="input-form" type="text" />
                <label htmlFor="address" className="label-form">
                  Address
                </label>
                <input id="address" className="input-form" type="text" />
                <label htmlFor="description" className="label-form">
                  Description
                </label>
                <input id="description" className="input-form" type="text" />
                <div className="buttons">
                  <input type="button" value="Save" className="button" />
                  <input
                    type="button"
                    className="button"
                    value="Cancel"
                    onClick={(e) => hideModal()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {
        <div id="myModal" class="modal">
          <div class="modal-content">
            <div className="row">
              <span className="edit-user">Edit user</span>
            </div>
            <div className="row map-form">
              <div className="map"></div>
              <div className="form">
                <label for="name" className="label-form">
                  Name
                </label>
                <input id="name" className="input-form" type="text" />
                <label for="address" className="label-form">
                  Address
                </label>
                <input id="address" className="input-form" type="text" />
                <label for="description" className="label-form">
                  Description
                </label>
                <input id="description" className="input-form" type="text" />
                <div className="buttons">
                  <input type="button" value="Save" className="button" />
                  <input
                    type="button"
                    className="button"
                    value="Cancel"
                    onClick={(e) => modal(false, "auto")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      } */}
    </div>
  );
}

export default App;
