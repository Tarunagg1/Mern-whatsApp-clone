import React, { Fragment, useState } from 'react';
import Conversations from './Conversations';
import Header from './Header';
import Search from './Search';

export default function Menu() {
  const [text, settext] = useState('');
  return (
      <Fragment>
        <Header />
        <Search settext={settext} />
        <Conversations text={text} />
      </Fragment>
  );
}
