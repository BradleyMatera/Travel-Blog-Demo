import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

const CustomInput = ({
  name,
  control,
  defaultValue = '',
  rules = {},
  placeholder = '',
  className = ''
}) => (
  <Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
    rules={rules}
    render={({ field, fieldState: { error } }) => (
      <div>
        <input
          {...field}
          placeholder={placeholder}
          className={className}
        />
        {error && <span className="text-red-500">{error.message}</span>}
      </div>
    )}
  />
);

CustomInput.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.shape({}).isRequired,
  defaultValue: PropTypes.string,
  rules: PropTypes.shape({}),
  placeholder: PropTypes.string,
  className: PropTypes.string
};

export default CustomInput;
