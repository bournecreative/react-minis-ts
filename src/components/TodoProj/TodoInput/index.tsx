import React, { ChangeEvent, useState } from "react"
import { Button, Input } from "antd"
import { TodoStore } from "../../../stores/TodoStore"
import { FormProvider } from "rc-field-form"

export const TodoInput = ({ todos }: { todos: TodoStore }) => {
	const [task, setTask] = useState("")

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTask(e.target.value)
	}

	const handleBtnClick = () => {
		todos.add(task)
		setTask("")
	}

	return (
		<>
			<Input
				placeholder="Enter Todo Task Item"
				value={task}
				onChange={handleInputChange}
				type="text"
				style={{
					width: 304,
				}}
			/>
			<Button type="primary" onClick={handleBtnClick}>
				Submit
			</Button>
		</>
	)
}
