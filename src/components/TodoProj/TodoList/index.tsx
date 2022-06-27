import { observer } from "mobx-react-lite"
import { TodoStore } from "../../../stores/TodoStore"
import { Todo } from "../../../stores/TodoStore"
import styles from "./Todo.module.css"

const TodoList = ({ todos }: { todos: TodoStore }) => {
	return (
		<ul className={styles["todo-item_list"]}>
			{todos.list.map((t: Todo) => (
				<li className={styles["todo-item"]} key={t.id}>
					<span
						className={styles["todo-item-label"]}
						style={{
							textDecoration: t.isDone ? "line-through" : "",
						}}
					>
						{t.title}
					</span>
					{t.isDone ? (
						<button
							className={styles["todo-remove-btn"]}
							onClick={() => todos.remove(t)}
						>
							Remove
						</button>
					) : (
						""
					)}
					<button className={styles["todo-toggle-btn"]} tabIndex={-1}>
						Complete?
						<input
							id={String(t.id)}
							className={styles["todo-item_box"]}
							type="checkbox"
							onClick={() => todos.toggle(t)}
						/>
					</button>
				</li>
			))}
		</ul>
	)
}

export default observer(TodoList)
