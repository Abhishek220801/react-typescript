import { useReducer } from "react"

const CounterReducer = () => {
  type State = { count: number }
  type Action = { type: "INCREMENT" } | { type: "DECREMENT" }

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 }
      case "DECREMENT":
        return { count: state.count - 1 }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0 })
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  )
}

export default CounterReducer
