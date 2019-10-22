import React from 'react';
import { Link } from "@reach/router"

const Navigation:React.FC = (props) => {
  return(
      <nav>
        <Link to="/">Main</Link>
        <Link to="category">Category</Link>
      </nav>
  )
};

export default Navigation;
