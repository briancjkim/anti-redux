import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this._deleteNotification = id => {
      this.setState(currentState => {
        const newState = delete currentState.notification[id];
        return newState;
      });
    };
    this._seeNotification = id => {
      this.setState(currentState => {
        return {
          ...currentState,
          notification: {
            ...currentState.notification,
            [id]: {
              ...currentState.notification[id],
              seen: true
            }
          }
        };
      });
    };

    //state안에 함수를 포함하려면 constructor안에서 메서드 정의해야함.
    this.state = {
      notification: {
        "1": {
          id: 1,
          text: "something",
          seen: false
        },
        "2": {
          id: 2,
          text: "else",
          seen: false
        },
        "3": {
          id: 3,
          text: "differnet",
          seen: false
        }
      },
      deleteNotification: this._deleteNotification,
      seeNotification: this._seeNotification
    };
  }

  render() {
    return (
      <Store.Provider value={this.state}>
        <AppPresenter />
      </Store.Provider>
    );
  }
}

export default AppContainer;
