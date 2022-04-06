import { useState } from "react";

const CountingWords = () => {
    const [input, setInput] = useState("")
    const [count, setCount] = useState(0)

    const handleInputChange = (event) => {
        setInput(event.target.value)
        setCount(event.target.value==="" ? 0 : input.trim().split(" ").length);
    }
    return (<form>
        <textarea type="text"
        id="myInput"
        placeholder='Enter text ...'
        value={input}
        onChange={handleInputChange}></textarea>
        <div>Word(s): {count}</div>
    </form>
    )
};

export default CountingWords;