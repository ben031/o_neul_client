import React from "react";

const SelectFilter = ({ onPublic, filteringPublic }) => {
  return (
    <div>
      <select value={onPublic} onChange={filteringPublic}>
        <option value="">전체</option>
        <option value="true">공개일기</option>
        <option value="false">비밀일기</option>
      </select>
    </div>
  );
};

export default SelectFilter;
