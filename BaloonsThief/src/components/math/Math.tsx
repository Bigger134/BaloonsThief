import styles from './syles.module.css'
import { observer } from 'mobx-react-lite'
import { useStore } from './../../store/utils/index.ts'
import BaloonAdding from '../baloonAdding/BaloonAdding';
import BaloonInStash from '../baloonInStash/BaloonInStash.tsx';
import BaloonInBag from '../baloonInBag/BaloonInBag.tsx';

const Math = observer(() => {
    const store = useStore();

    const addSwitchingHandler = () => {
        store.dataStore.stash.switchAdding();
    }

    const baloonsInStash = store.dataStore.stash.baloons?.map((baloon) => { return <BaloonInStash baloon={baloon} /> })
    const baloonsInBag = store.dataStore.stash.baloons?.map((baloon) => { return <BaloonInBag baloon={baloon} /> })

    return (
        <div className={styles.wrapper}>
            <div className={styles.stash}>
                Склад:
                {baloonsInStash}
                {store.dataStore.stash.isAdding ? <BaloonAdding /> : <button onClick={addSwitchingHandler}>+ Добавить</button>}
            </div>
            <div className={styles.bag}>
                Мешок:
                <input type="number" onChange={(event) => { store.dataStore.changeBag(+event.target.value) }} />
            </div>
            <div className={styles.result}>
                Украдено:
                {store.dataStore.stash.amount <= store.dataStore.bag ? baloonsInStash : baloonsInBag}
            </div>
        </div>
    )
})

export default Math
