<script setup>
const { data } = defineProps(["data"]);
</script>

<template>
	<div
		class="shadow hover:shadow-lg cursor-pointer rounded-lg relative duration-150">
		<img
			:src="`/extraService/${data.img}`"
			alt=""
			class="bg-black rounded-t-md w-full" />
		<i
			class="bg-[#D1E7FF] text-xl p-2 px-3 border-2 border-white absolute right-7 top-24 rounded-full"
			:class="data.icon"></i>
		<p class="p-3 w-[200px]">{{ data.text }}</p>
	</div>
</template>
