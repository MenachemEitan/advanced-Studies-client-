import ClassCard from "./ClassCard";

const MyClasses = ({ myClasses, choseClass, myClassesIds }) => {
  let i = 1;
  return (
    <div className="MyClasses">
      <div className="classes row left">
        <div className="col left">
          <div className="cards-title row ">My Classes</div>
          <div className="row my-classes">
            {myClasses.map((singleClass) => (
              <ClassCard
                classes={myClasses}
                singleClass={singleClass}
                choseClass={choseClass}
                id={singleClass.id}
                classTitle={singleClass.className}
                photoUrl={singleClass.photoUrl}
                isOpen={true}
                index={i++}
                precent={
                  !myClassesIds[singleClass.id].length
                    ? 0
                    : (singleClass?.question?.length /
                        myClassesIds[singleClass.id]?.length) *
                      180
                }
                num={
                  !myClassesIds[singleClass.id].length
                    ? 0
                    : (singleClass?.question?.length /
                        myClassesIds[singleClass.id]?.length) *
                      100
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
