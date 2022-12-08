const choseClass = (id) => {
  const filteredList = petsList.filter((pet) => {
    return pet._id === id;
  });
  const filteredPet = filteredList[0];
  setCurrentPet(filteredPet);
};
