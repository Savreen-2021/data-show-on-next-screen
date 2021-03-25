import React, {useState} from 'react';
function Dog() {
    const [object, setFormData] = useState({});

    const saveData = () => {
        console.log(object)
    }

    return (
        <div>
            
            <h2>this day</h2>
            <form onSubmit={(e)=>e.preventDefault()}>
                <input type="text" value={object.firstname}
                onChange={(e) => setFormData({...object,firstname:e.target.value})} />
                
                <input type="text" value={object.lastname} 
                onChange={(e) => setFormData({...object,lastname:e.target.value})} />

                <button onClick={() => saveData()}>submit</button>
            </form>
        </div>
    )
}
export default Dog;




