import React, { useState, useRef } from "react"
// React.FC is a type provided to you from React. It indicates that the variable TextFeild is a React functional component.
// We can specify the props the React functional component takes with angle brackets <{text: string}> or we can pass it an interface <Props>

interface Props {
	text: string
	placeHolder?: string //? indicates that the prop is optional and will not be a required prop
}

interface Dog {
	bark: string
}

interface Example {
	testing: true
	i: number
	fn: (total: number) => number
	obj: {
		name: string
	}
	dogObj: Dog
}

export const CheatSheet: React.FC<Props> = ({ text }): JSX.Element => {
	// by default useState infers the type based on the value
	// We can however set the type using brackets: const [count, setCount] = useState<number | null | undefined>(5)
	const [count, setCount] = useState(5)
	const eleRef = useRef<HTMLInputElement>(null)

	return (
		<div>
			<input ref={eleRef} />
		</div>
	)
}
