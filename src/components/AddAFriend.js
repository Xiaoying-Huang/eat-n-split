import { useState } from "react";


export function AddAFriend({ handleAddFriend, isOpen, setIsOpen }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [id, setId] = useState(100000);


    function handleSubmit(e) {
        if (name === null || image === null) {
            return;
        }
        e.preventDefault();
        const newFriend = { id, name, image, balance: 0 };
        handleAddFriend(newFriend);
        setId(c => c + 1);
        setName("");
        setImage("");
        setIsOpen(false);
    }
    return (<>
        <div className="sidebar">

            {isOpen ? (
                <div>
                    <form className="form-add-friend" onSubmit={handleSubmit}>
                        <label>👩🏻‍🤝‍👩🏻Friend name</label>
                        <input type="text" placeholder="" required onChange={(e) => setName(e.target.value)} value={name} />
                        <label> 🖼️Image URL</label>
                        <input type="url" placeholder="" required onChange={(e) => setImage(e.target.value)} value={image} />
                        <button type="submit" className="button">Add</button>
                    </form>
                    <button className="button" onClick={() => setIsOpen(c => !isOpen)}> Close</button>
                </div>
            ) : null}

        </div>

    </>);
}
