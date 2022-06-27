import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { HomeOutlined } from "@ant-design/icons"
import { Index } from "./Index/index"
import { TodoProj } from "./Projects/TodoProj"
import "antd/dist/antd.min.css"

function App() {
	return (
		<div style={{ padding: "0 20px" }}>
			<BrowserRouter>
				<div>
					<Link to={"/"}>
						<HomeOutlined />
						&nbsp;Home
					</Link>
				</div>
				<Routes>
					<Route path="/" element={<Index />} />
					<Route path="todo-list" element={<TodoProj />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
