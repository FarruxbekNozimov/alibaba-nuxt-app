<template>
	<div class="cont">
		<div class="bg-[#F7FAFC]">
			<Header :search="false" />
			<main class="min-h-screen lg:px-20 bg-gray-100">
				<slot />
			</main>
			<Footer />
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: "cart",
});
</script>
