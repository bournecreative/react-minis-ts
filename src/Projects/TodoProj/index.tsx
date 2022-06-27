import TodoList from "../../components/TodoProj/TodoList/index"
import { TodoInput } from "../../components/TodoProj/TodoInput"
import { TodoStore } from "../../stores/TodoStore"

const todos = new TodoStore()

export const TodoProj: React.FC = (): JSX.Element => {
	return (
		<div style={{ padding: "20px 10px" }}>
			<TodoInput todos={todos} />
			<TodoList todos={todos} />
		</div>
	)
}
