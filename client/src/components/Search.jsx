import React from "react";
import ClassCard from "./ClassCard";

const Search = ({ searchClasses }) => {
  const classes = searchClasses?.data?.data;
  console.log(classes);
  return (
    <div className="search">
      <div className="search-grid">
        {classes?.map((singleClass) => (
          <ClassCard
            id={singleClass._id}
            key={singleClass._id}
            classTitle={singleClass.className}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
