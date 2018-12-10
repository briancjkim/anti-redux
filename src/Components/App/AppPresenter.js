import React, { Fragment } from "react";
import Header from "Components/Header";
import Flex from "styled-flex-component";
import Notification from "Components/Notification";
import Store from "store";

const AppPresenter = () => (
  <Fragment>
    <Header />
    <Flex alignCenter full column>
      <Store.Consumer>
        {store => {
          return Object.keys(store.notification).map(key => {
            const { id, text, seen } = store.notification[key];
            return (
              <Notification
                id={store.notification[key].id}
                {...store.notification[key]}
              />
            );
          });
        }}
      </Store.Consumer>
    </Flex>
  </Fragment>
);

export default AppPresenter;
