<template>
	<div class="cont">
		<div class="bg-[#F7FAFC]">
			<Header />
			<HeaderBottom />
			<main class="min-h-screen lg:px-20">
				<slot />
			</main>
			<Footer />
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: "default",
});
</script>

<style scoped></style>
