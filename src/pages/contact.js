import React from 'react';
import { Link } from 'gatsby';

const Contact = () => {
  return (
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Header headerText="Contact" />
    </div>
  )
};

export default Contact;