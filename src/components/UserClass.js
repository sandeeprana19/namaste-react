import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };

    // console.log(this.props.name + "Child constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child componentDidMount");

    const data = await fetch("https://api.github.com/users/sandeeprana19");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    this.timer = setInterval(() => {
      // console.log("NAMASTE REACT OP");
    }, 1000);
  }

  componentDidUpdate() {
    // console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    // console.log("componentWillUnmount");
    clearInterval(this.timer);
  }

  render() {
    // console.log(this.props.name + "Child render");

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} alt="Avatar url" />
        <h2>Name: {name}</h2>
        <div>
          LoggedInUser:
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h2 className="font-bold text-xl">{loggedInUser}</h2>
            )}
          </UserContext.Consumer>
        </div>
        <h3>Location: {location}</h3>
        <h4>Contact: @swe_sandeep</h4>
      </div>
    );
  }
}

/**
 * MOUNTING CYCLE START
 *
 * Constructor(dummy)
 * Render(dummy)
 * <HTML(dummy) />
 *
 * ComponentDidMount
 *    API call
 *    this.setState => state variable is updated
 *
 * UPDATING CYCLE START
 *
 * Render(API data)
 * <HTML (new API data) />
 * componentDidUpdate
 *
 *
 *
 */

export default UserClass;
