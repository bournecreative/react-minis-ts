import { makeObservable, observable, action } from "mobx"

export interface Todo {
	id: number
	title: string
	isDone: boolean
}


export class TodoStore {
	list: Todo[] = []

	constructor() {
		makeObservable(this, {
			list: observable,
			add: action,
			toggle: action,
			remove: action
		})
	}

	add(title:string) {
		if (title.length < 3) return
		this.list.push({
			id: Date.now(),
			title: title,
			isDone: false
		})
	}

	toggle(todo: Todo) {
		todo.isDone = !todo.isDone
	}

	remove(todo: Todo){
		this.list = this.list.filter((target)=> {
			return target.id !== todo.id
		})
	}
}