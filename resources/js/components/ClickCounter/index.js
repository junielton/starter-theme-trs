import React, {useState} from "react";

export function ClickCounter() {
	const [counter, setCounter] = useState(0);

	return (
		<div className="">
			<button
				style={{border: "2px solid #aaa", padding: "6px 20px"}}
				onClick={() => {
					setCounter(counter + 1);
				}}>
				Click me!
			</button>
			<span style={{fontSize: "30px", margin: "0 30px"}}>{counter}</span>
		</div>
	);
}
