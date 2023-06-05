<script setup>
const { info, folder } = defineProps(["info", "folder"]);
</script>

<template>
	<div class="lg:flex border-b border-r border-gray-200 cursor-pointer p-3">
		<div class="w-full">
			<div class="text-sm">{{ info.name }}</div>
			<span class="text-sm text-gray-500"
				>From <br />
				USD {{ info.usd }}</span
			>
		</div>
		<div class="flex items-end justify-end w-full">
			<img :src="`/${folder}/${info.img}`" class="h-[80%]" />
		</div>
	</div>
</template>
