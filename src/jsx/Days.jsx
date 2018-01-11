import React from 'react';
import { Link } from 'react-router-dom';

const Days = ({count}) => {
  let content = [...Array(count).keys()].map((_, i) => (
    <Link key={i} to={"/day/" + (i + 1)}>
      <div>{i + 1}</div>
    </Link>
  ));

  return <div className="Days"><div className="header">Days</div>{content}</div>
};

export default Days;
