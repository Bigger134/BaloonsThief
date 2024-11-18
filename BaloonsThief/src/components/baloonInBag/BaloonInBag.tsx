import { observer } from 'mobx-react-lite'
import { useStore } from '../../store/utils'

const BaloonInBag = observer((props: { baloon: { color: string, amount: number } }) => {
    const store = useStore();

    const amount = Math.round((props.baloon.amount / store.dataStore.stash.amount) * store.dataStore.bag);
    return (
        <div style={{
            backgroundColor: props.baloon.color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '50px',
            width: '50px',
            border: '2px',
            borderRadius: '999px'
        }}>
            {amount}
        </div>
    )
})

export default BaloonInBag