import { observer } from 'mobx-react-lite'

const BaloonInStash = observer((props: { baloon: { color: string, amount: number } }) => {
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
            {props.baloon.amount}
        </div>
    )
})

export default BaloonInStash