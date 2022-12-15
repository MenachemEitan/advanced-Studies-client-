

export const Admin = () => {


    return (
        <div>
            <div>
                <h3>Add new field</h3>
                <input type="text" placeholder="Field Name" />
                <button>Add</button>
            </div>
            <div>
                <h3>Add new class</h3>
                <input type="text" placeholder="Class Name" />
                <input type="text" placeholder="Question" />
                <button>Add</button>
            </div>
            <div>
                <h3>Add new questions </h3>
                <textarea name="questions"cols="30" rows="10"></textarea>
                <button>Add</button>
            </div>
        </div>
    )
} 