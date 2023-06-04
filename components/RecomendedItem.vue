<script setup>
const { data } = defineProps(["data"]);
</script>
<template>
	<div class="border bg-white cursor-pointer shadow hover:shadow-lg duration-300 rounded-lg p-3">
		<img :src="`/recomended/${data.img}`" class="mx-auto mb-5 h-[150px]" />
		<h2 class="text-xl mb-2">${{ data.cost }}</h2>
		<p class="text-sm text-gray-500">{{ data.text }}</p>
	</div>
</template>
