<script setup>
// import { useTodoStore } from '@/stores/todo'
// const store = useTodoStore()
</script>

<template>
    <div class="flex flex-col items-center gap-5">
        <h1 class="text-3xl font-bold">This is an about page</h1>
        <h2 class="text-2xl mt-5">Here's a list of completed todos:</h2>
        <!-- <ul v-if="store">
            <li v-for="todo in store.todos" :key="todo.id">
                <span v-if="todo.completed">
                    {{ todo.text }}
                </span>
            </li>
        </ul> -->
    </div>
</template>
