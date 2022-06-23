import { Link } from "react-router-dom"
import { Tag, Divider } from "antd"

export const Index: React.FC = (): JSX.Element => {
	return (
		<div>
			<h1>Learning Archive</h1>
			<Divider orientation="left">TypeScript Projects</Divider>
			<Tag>
				<Link to="todo-list">Todo List</Link>
			</Tag>
		</div>
	)
}
