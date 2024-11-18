import { useState } from "react";
import { useStore } from "../../store/utils"


const BaloonAdding = () => {
    const store = useStore();

    const [amount, setAmount] = useState(0);
    const [color, setColor] = useState("");

    const addBaloonHandler = () => {
        if (color && (amount > 0)) {
            store.dataStore.stash.addBaloon({ color, amount });
        }
        else { alert(`Поле "количество" не может быть пустым, или должно содержать положительное число. Поле "цвет" не может быть пустым`) };
        store.dataStore.stash.switchAdding();
    }

    return (
        <div>
            <input type='number' placeholder="Количество" onChange={(event) => { setAmount(+event.target.value) }} />
            <input type='color' onChange={(event) => { setColor(event.target.value) }} />
            <button onClick={addBaloonHandler}>Добавить</button>
        </div>
    )
}

export default BaloonAdding