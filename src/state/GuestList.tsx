import { useState } from "react";

const GuestList: React.FC = () => {
    const [name, setName] = useState('');
    return <div>
        <h3>Guest List</h3>

        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button>Add Guest</button>

        {/*   <small> (들어갈 부분 들어갈)  </small> */}

    </div>
}

export default GuestList;