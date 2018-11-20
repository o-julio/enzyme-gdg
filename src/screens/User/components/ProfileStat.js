import PropTypes from 'prop-types';
import React from 'react';

export default ProfileStat;

function ProfileStat({value, label}) {
  return (
    <span>
      <h2>{value}</h2>
      <small>{label}</small>
    </span>
  );
}

ProfileStat.propTypes = {
  value: PropTypes.number,
  label: PropTypes.string,
};
