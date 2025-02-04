<script setup>
const store = useTodoStore()
</script>

<template>
	<section class="flex flex-col items-center gap-5">
		<h1 class="text-2xl font-bold">Todos</h1>
		
		<p v-show="store.todos.length === 0" class="text-gray-400 text-bold text-2xl">No tasks to show!</p>

		<ul class="flex flex-col gap-5">
			<TaskItem v-for="todo in store.todos" :key="todo.id" :todo="todo" @delete="(id) => store.deleteTodo(id)" />
		</ul>
		<TaskNew />
		
	</section>
</template>
