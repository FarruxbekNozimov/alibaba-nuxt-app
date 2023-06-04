<script setup>
const { img, title, data, folder } = defineProps([
	"img",
	"title",
	"data",
	"folder",
]);
</script>

<template>
	<section
		class="lg:mt-5 bg-white border lg:h-[240px] rounded-lg shadow flex w-full">
		<div
			:class="`bg-[url('/${img}')] `"
			class="bg-cover flex justify-between lg:justify-center lg:block w-full lg:w-[26%] p-4">
			<h2 class="text-xl font-bold w-[150px]">{{ title }}</h2>
			<button class="bg-white mt-3 px-4 py-2 rounded-lg">Source now</button>
		</div>
		<div class="grid grid-cols-4 grid-rows-2 w-[75%]">
			<CardSmallItem v-for="el in data" :info="el" :folder="folder" />
		</div>
	</section>
</template>

<style lang="scss" scoped></style>
