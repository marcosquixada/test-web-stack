import "./App.scss";
import "./animations.scss";
import Img from "./photo.jpg";
import { useState, useEffect } from "react";

function App() {
  let [users, setUsers] = useState([]);

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

  const loadMore = () => {
    fetch(
      "https://api.unsplash.com/photos/?client_id=1iU80BRXpOFHRDk1itZWN3wDONPS21lSZqj6drllJZ0"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setUsers([...users, ...data])
      });
  };

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/?client_id=1iU80BRXpOFHRDk1itZWN3wDONPS21lSZqj6drllJZ0"
    )
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="header">
          <span className="users-list">Users List</span>
          <input className="search" type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="main-content">
        {users.map((user) => (
          <ul>
            <li className="card">
              <img
                className="card-image"
                src={
                  user.user &&
                  user.user.profile_image &&
                  user.user.profile_image.medium
                }
                alt=""
              />
              <h2 className="card-title">{user.user && user.user.name}</h2>
              <p className="card-subtitle">
                Lorem ipsum dolor sit amet, consectetur…
              </p>
            </li>
          </ul>
        ))}
      </div>

      <div className="row load-more">
        <button className="button" onClick={(e) => loadMore()}>
          LOAD MORE
        </button>
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
    </div>
  );
}

export default App;
