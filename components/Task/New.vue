<script setup>
const store = useTodoStore()
</script>
<template>
	<form @submit.prevent="store.addTodo" class="flex flex-col gap-5 mt-5 items-center">
		<input type="text" v-model="store.newTodo"
			class="bg-transparent border-b border-gray-400 w-80 focus-visible:outline-0 focus-visible:border-b focus-visible:border-gray-300"
			placeholder="New Task ..." @keyup.ctrl.delete="store.newTodo = ''"/>
			<p class="text-xs text-gray-400">You can clear the input using control + backspace or delete</p>
		<button type="submit" @click="store.addTodo" class="bg-sky-600 px-5 py-2 font-semibold rounded-md w-fit">Add
			Todo</button>
	</form>
</template>