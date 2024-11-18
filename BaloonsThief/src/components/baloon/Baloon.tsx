import { observer } from 'mobx-react-lite'

const Baloon = observer((props: { baloon: { color: string, amount: number } }) => {
    return (
        <div style={{ color: props.baloon.color, height: '50px', width: '50px', border: '2px', borderRadius: '999px' }}>
            {props.baloon.amount}
        </div>
    )
})

export default Baloon