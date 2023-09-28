import Counter from "./Counter";

export default function CounterButton({by,incrementMethod,decrementMethod}) {

    return (
        <div className="Counter">
            <button className="counterButton" onClick={() => incrementMethod(by)}>+{by}</button>
            <button className="counterButton" onClick={() => decrementMethod(by)}>-{by}</button>
        </div>
    )
}