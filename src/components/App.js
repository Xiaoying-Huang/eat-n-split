import { useState } from "react";
import { Friends } from "./Friends";
import { Calculator } from "./Calculator";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friendList, setFriendList] = useState([...initialFriends]);
  const [selected, setSelected] = useState(null);
  const [billTotal, setBillTotal] = useState("");
  const [selfExpense, setSelfExpense] = useState("");
  const [payer, setPayer] = useState(1);


  const selectedFriendData = friendList.filter(item => item.id === selected)[0];

  function handleAddFriend(friendObj) {
    const updatedList = [...friendList, friendObj];
    setFriendList(currentList => updatedList);
  }
  function handleSelect(id) {
    setSelected(currentSelected => id);
    setBillTotal(current => "");
    setSelfExpense(current => "");
    setPayer(current => 1);
  }

  function handleUpdate(obj) {
    const updatedList = friendList.map(item => { if (item.id === obj.id) { return obj } else { return item } });
    setFriendList(updatedList);
  }
  return (<>
    <div className="app">
      <Friends friendList={friendList} handleSelect={handleSelect} selected={selected} handleAddFriend={handleAddFriend} />
      <Calculator selectedFriend={selectedFriendData} handleUpdate={handleUpdate} billTotal={billTotal} setBillTotal={setBillTotal} selfExpense={selfExpense} setSelfExpense={setSelfExpense} payer={payer} setPayer={setPayer} setSelected={setSelected} />
    </div>
  </>);
}


