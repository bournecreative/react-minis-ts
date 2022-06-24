import { observer } from "mobx-react-lite"
import { TodoStore } from "../../../stores/TodoStore"
import { Todo } from "../../../stores/TodoStore"

const TodoList = ({ todos }: { todos: TodoStore }) => {
	return (
		<ul>
			{todos.list.map((t: Todo) => (
				<li
					style={{ textDecoration: t.isDone ? "line-through" : "" }}
					onClick={() => todos.toggle(t)}
					key={t.id}
				>
					{t.title}
					{t.isDone ? (
						<button onClick={() => todos.remove(t)}>Remove</button>
					) : (
						""
					)}
				</li>
			))}
		</ul>
	)
}

export default observer(TodoList)
