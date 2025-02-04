export const useTodoStore = defineStore('todo', () => {
    const todos = ref([
        { id: 1, text: 'Start adding your todos', completed: true },
    ])

    const newTodo = ref('')

    function addTodo() {
        if (!newTodo.value) return
        todos.value.push({
            id: todos.value.length + 1,
            text: newTodo.value,
            completed: false,
        })
        newTodo.value = ''
    }

    function deleteTodo(id: number) {
        todos.value = todos.value.filter((todo) => todo.id !== id)
    }

    return { todos, newTodo, addTodo, deleteTodo }
})