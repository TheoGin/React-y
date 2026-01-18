import PropTypes from "prop-types";

export const datasTypes = PropTypes.arrayOf(
  PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
);

export const nameType = PropTypes.string.isRequired;

export const onChangeType = PropTypes.func.isRequired;

