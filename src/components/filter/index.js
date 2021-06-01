import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

function SelectFilter({ label, options, value, updateValue }) {
  function handleChange(event) {
    console.log("event.target.value", event.target.value);
    updateValue(event.target.value);
  }
  return (
    <div>
      <label className="text" for="pet-select">
        {label}
      </label>

      <select
        className="select-filter"
        onChange={handleChange}
        value={value}
        name="pets"
        id="pet-select"
      >
        {options.map((option) => {
          return (
            <>
              <option value={option.value}>{option.optionName}</option>;
            </>
          );
        })}
      </select>
    </div>
  );
}

export default SelectFilter;
