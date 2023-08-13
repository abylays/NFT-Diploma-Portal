import React from 'react';
import { Collapse, Checkbox } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const Filters = ({ metadata, selectedFilters, onFilterChange }) => {
  const traitTypes = [
    ...new Set(
      metadata.flatMap((item) => item.attributes.map((attr) => attr.trait_type_ru))
    ),
  ].filter((traitType) => traitType && traitType.trim() !== "ФИО"); // Exclude empty or "ФИО" trait type

  const handleOptionToggle = (traitType, value) => {
    const selectedValues = selectedFilters[traitType] || [];
    const isSelected = selectedValues.includes(value);
  
    let updatedSelectedValues;
    if (isSelected) {
      updatedSelectedValues = selectedValues.filter((val) => val !== value);
    } else {
      updatedSelectedValues = [...selectedValues, value];
    }
  
    const updatedFilters = {
      ...selectedFilters,
      [traitType]: updatedSelectedValues,
    };
  
    onFilterChange(updatedFilters);
  };
  const isOptionSelected = (traitType, value) => {
    const selectedValues = selectedFilters[traitType] || [];
    return selectedValues.includes(value);
  };

  return (
    <div className="filters-container">
      <Collapse
        defaultActiveKey={['']}
        expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        className="trait-types-collapse"
      >
        {traitTypes.map((traitType, index) => (
          <Panel header={traitType} key={index} className="trait-type-panel">
            <ul>
              {[...new Set(metadata.flatMap((item) =>
                item.attributes
                  .filter((attr) => attr.trait_type_ru === traitType)
                  .map((attr) => attr.value)
              ))].map((value) => (
                <li key={value}>
                  <Checkbox
                    checked={isOptionSelected(traitType, value)}
                    onChange={() => handleOptionToggle(traitType, value)}
                  >
                    {value}
                  </Checkbox>
                </li>
              ))}
            </ul>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default Filters;
