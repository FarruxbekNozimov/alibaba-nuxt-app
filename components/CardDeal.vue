<script setup>
const { data } = defineProps(["data"]);
</script>

<template>
	<div
		class="h-[235px] w-[180px] text-center border-l border-gray-200 bg-white p-3">
		<img
			:src="`/products/${data.img}`"
			alt=""
			class="mx-auto object-contain h-[150px]" />
		<h2 class="text-black mb-3">{{ data.name }}</h2>
		<div class="w-full text-center">
			<span class="p-1.5 px-3 text-sm rounded-full bg-[#FFE3E3] text-red-600"
				>-25%</span
			>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
