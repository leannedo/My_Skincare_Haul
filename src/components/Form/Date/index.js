import React from "react";
import { DatePicker } from "antd";
import moment from "moment";

const Date = ({ name, label, value, changedHandler }) => {
  const dateFormat = "DD/MM/YYYY";
  const currentDate = moment();
  return (
    <div className="product-form-input">
      <label htmlFor={name}>{label}</label>
      <br />
      <DatePicker
        id={name}
        name={name}
        value={value || currentDate}
        format={dateFormat}
        bordered={false}
        allowClear={false}
        onChange={(date) => changedHandler(date, name)}
      />
      <br />
    </div>
  );
};

export default Date;
