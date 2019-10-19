import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left capitalize">
        {name} {''}
        <span
          style={{ float: 'right' }}
          className={
            type === 'personal' ? 'badge badge-primary' : 'badge badge-success'
          }
        >
          {type}
        </span>
      </h3>

      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open text-primary"></i> {email}
          </li>
        )}

        {phone && (
          <li>
            <i className="fas fa-phone text-primary "></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <button className="btn-dark btn-sm ">Edit</button>
        <button className="btn-danger btn-sm">Delete</button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
