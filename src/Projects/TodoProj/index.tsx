import TodoList from "../../components/TodoProj/TodoList/index"
import { TodoInput } from "../../components/TodoProj/TodoInput"
import { TodoStore } from "../../stores/TodoStore"

const todos = new TodoStore()

export const TodoProj: React.FC = (): JSX.Element => {
	return (
		<div>
			<TodoInput todos={todos} />
			<TodoList todos={todos} />
		</div>
	)
}
