<script setup>
import { recomended } from "@/public/recomended/recomended";
</script>

<template>
	<section class="rounded-lg w-full py-5">
		<h2 class="text-2xl font-bold mb-5">Recommended items</h2>
		<div class="grid grid-cols-5 grid-rows-2 gap-5">
			<RecomendedItem v-for="el in recomended" :data="el" />
		</div>
	</section>
</template>
