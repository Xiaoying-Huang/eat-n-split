export function Calculator({ selectedFriend, handleUpdate, billTotal, setBillTotal, selfExpense, setSelfExpense, payer, setPayer, setSelected }) {

    const friendExpense = billTotal - selfExpense;


    function handleSubmit(e) {
        e.preventDefault();
        if (!billTotal || !selfExpense) {
            return;
        }
        let updatedBalance;
        if (payer === 1) {
            updatedBalance = selectedFriend.balance + friendExpense;
        } else if (payer === selectedFriend.id) {
            updatedBalance = selectedFriend.balance - selfExpense;
        }
        const updatedFriend = { ...selectedFriend, balance: updatedBalance };
        handleUpdate(updatedFriend);
        setSelected(null);
    }
    return (<>
        {selectedFriend ?
            (<div>
                <form className="form-split-bill" onSubmit={handleSubmit}>
                    <h2>SPLIT A BILL WITH {selectedFriend.name}</h2>
                    <label>💰Bill value</label>
                    <input type="text" placeholder="" pattern="[0-9]+(\.[0-9]{1,2})?" value={billTotal} onChange={(e) => setBillTotal(Number(e.target.value))} />
                    <label>🧍‍♀️Your expense</label>
                    <input type="text" placeholder="" pattern="[0-9]+(\.[0-9]{1,2})?" value={selfExpense} onChange={(e) => Number(e.target.value) > billTotal ? alert("Expense of each party should not exceed total bill.") : setSelfExpense(Number(e.target.value))} />
                    <label>🧑‍🤝‍🧑Friend's expense</label>
                    <input type="text" disabled placeholder="" value={friendExpense} />
                    <label>🤑Who is paying the bill?</label>
                    <select aria-label="bill-payer" value={payer} onChange={(e) => setPayer(Number(e.target.value))}>
                        <option value={1}>You</option>
                        <option value={selectedFriend.id}>{selectedFriend.name}</option>
                    </select>
                    <button className="button" type="submit">Split bill</button>
                </form>
            </div>) : null /* (<div>
          <form className="form-split-bill">
            <h2>SPLIT A BILL WITH A FRIEND</h2>
            <label>💰Bill value</label>
            <input type="text" placeholder="Enter bill total" pattern="[0-9]+(\.[0-9]{1,2})?" />
            <label>🧍‍♀️Your expense</label>
            <input type="text" placeholder="Your expense" pattern="[0-9]+(\.[0-9]{1,2})?" />
            <label>🧑‍🤝‍🧑Friend's expense</label>
            <input type="text" disabled placeholder="Friend's expense" />
            <label>🤑Who is paying the bill?</label>
            <select aria-label="bill-payer" >
              <option value={1}>You</option>
              <option value="friend">Your friend</option>
            </select>
            <button className="button" type="submit">Split bill</button>
          </form>
        </div >) */}
    </>);
}
