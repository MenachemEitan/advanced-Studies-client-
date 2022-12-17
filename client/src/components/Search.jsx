import React from "react";
import ClassCard from "./ClassCard";

const Search = ({
  searchClasses,
  setToggledResult,
  choseClass,
  currntClass,
}) => {
  const classes = searchClasses?.data?.data;
  console.log("classes", classes);

  return (
    <div className="search">
      <div className="search-grid">
        {classes?.map((singleClass) => (
          <ClassCard
            currntClass={currntClass}
            classes={classes}
            singleClass={singleClass}
            choseClass={choseClass}
            id={singleClass.id}
            key={singleClass.id}
            classTitle={singleClass.className}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
