import React, { Fragment } from 'react';
import Conversations from './Conversations';
import Header from './Header';
import Search from './Search';

export default function Menu() {
  return (
      <Fragment>
        <Header />
        <Search />
        <Conversations />
      </Fragment>
  );
}
