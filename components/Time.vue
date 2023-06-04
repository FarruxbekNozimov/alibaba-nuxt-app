<script setup>
const day = ref(new Date().getDate());
const hour = ref(new Date().getHours());
const min = ref(new Date().getMinutes());
const sec = ref(new Date().getSeconds());

setInterval(() => {
	day.value = new Date().getDate();
	hour.value = new Date().getHours();
	min.value = new Date().getMinutes();
	sec.value = new Date().getSeconds();
}, 1000);
</script>

<template>
	<div class="lg:mt-5 flex gap-2">
		<div
			class="hidden lg:block bg-[#606060]/50 lg:bg-[#606060] h-[55px] w-[55px] text-center py-1 text-center rounded-md">
			<span class="block text-white">{{
				day.toString().padStart(2, "0")
			}}</span>
			<span class="text-sm text-white">Days</span>
		</div>
		<div
			class="bg-[#606060]/50 lg:bg-[#606060] h-[55px] w-[55px] text-center py-1 text-center rounded-md">
			<span class="block text-white">{{
				hour.toString().padStart(2, "0")
			}}</span>
			<span class="text-sm text-white">Hour</span>
		</div>
		<div
			class="bg-[#606060]/50 lg:bg-[#606060] h-[55px] w-[55px] text-center py-1 text-center rounded-md">
			<span class="block text-white">{{
				min.toString().padStart(2, "0")
			}}</span>
			<span class="text-sm text-white">Min</span>
		</div>
		<div
			class="bg-[#606060]/50 lg:bg-[#606060] h-[55px] w-[55px] text-center py-1 text-center rounded-md">
			<span class="block text-white">{{
				sec.toString().padStart(2, "0")
			}}</span>
			<span class="text-sm text-white">Sec</span>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
