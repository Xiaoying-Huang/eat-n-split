import { useState } from "react";
import { AddAFriend } from "./AddAFriend";
import { Friend } from "./Friend";

export function Friends({ friendList, selected, handleSelect, handleAddFriend }) {
    const [isOpen, setIsOpen] = useState(false);
    return (<>
        <div className="sidebar">
            <ul>
                {friendList.map(friend => (
                    <li key={friend.id}>
                        <Friend key={friend.id}
                            data={friend}
                            selected={selected}
                            handleSelect={handleSelect} />
                    </li>
                )
                )}
            </ul>
            {isOpen ? null : <button className="button" onClick={() => setIsOpen(c => !isOpen)}>Add a friend</button>}
            <AddAFriend friendList={friendList} handleAddFriend={handleAddFriend} isOpen={isOpen} setIsOpen={setIsOpen} />

        </div>
    </>);
}
