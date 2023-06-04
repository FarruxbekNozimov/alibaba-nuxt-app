<script setup>
const { data } = defineProps(["data"]);
</script>
<template>
	<div class="flex items-center gap-2">
		<h2 class="text-4xl">{{ data.flag }}</h2>
		<div class="">
			<h4 class="text-md text-gray-950">{{ data.name }}</h4>
			<h4 class="text-sm text-gray-500">{{ data.url }}</h4>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
