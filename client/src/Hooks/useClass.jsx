import { useState } from "react";

const useClass = () => {
  const [currntClass, setCurrntClass] = useState("");
  const [toggledClass, setToggledClass] = useState(false);

  const choseClass = (id, classesList) => {
    const filteredList = classesList.filter((singleClass) => {
      return singleClass.id === id;
    });
    const filteredClass = filteredList[0];
    setCurrntClass(filteredClass);
    setToggledClass(!toggledClass);
  };

  return { choseClass, currntClass, toggledClass, setToggledClass };
};

export default useClass;
