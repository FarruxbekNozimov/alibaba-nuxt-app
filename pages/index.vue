<script setup>
import { deals } from "@/public/products/products";
import { menuTrending } from "@/public/js/menuTrending";

const day = ref(new Date().getDay());
const hour = ref(new Date().getHours());
const min = ref(new Date().getMinutes());
const sec = ref(new Date().getSeconds());
setInterval(() => {
	day.value = new Date().getDay();
	hour.value = new Date().getHours();
	min.value = new Date().getMinutes();
	sec.value = new Date().getSeconds();
}, 1000);
</script>
<template>
	<div class="py-5">
		<!-- LATEST TRENDING SECTION START -->
		<section
			class="bg-white border h-[180px] lg:h-[400px] rounded-lg shadow flex lg:p-3 gap-2 overflow-y-hidden w-full">
			<ul class="hidden lg:block w-[25%] h-full">
				<li
					v-for="el in menuTrending"
					class="text-gray-600 py-2 mb-0.5 rounded-md px-2 cursor-pointer hover:bg-[#E5F1FF] hover:text-black">
					{{ el }}
				</li>
			</ul>
			<div
				class="w-[100%] lg:w-[50%] bg-[url('/banner.png')] bg-cover bg-no-repeat rounded-md p-14 bg-black">
				<h1 class="text-md lg:text-2xl">Latest trending</h1>
				<h1 class="text- lg:text-3xl font-bold">Electronic items</h1>
				<button class="bg-white my-3 p-2 px-3 rounded-lg">Learn more</button>
			</div>
			<div class="hidden lg:block w-[25%]">
				<div class="mb-2 p-3 bg-[#E3F0FF] rounded-lg">
					<div class="flex gap-5">
						<img src="/avatar.png" alt="" />
						<span
							>Hi, user let's <br />
							get stated</span
						>
					</div>
					<button
						class="text-white w-full mt-2 py-2 rounded-md block bg-[#127FFF]">
						Join now
					</button>
					<button
						class="text-[#127FFF] w-full mt-2 py-2 rounded-md block bg-white">
						Log in
					</button>
				</div>
				<div class="mb-2 p-3 bg-[#F38332] text-white rounded-lg">
					<h2 class="text-md">
						Get US $10 off <br />
						with a new <br />
						supplier
					</h2>
				</div>
				<div class="mb-2 p-3 bg-[#55BDC3] text-white rounded-lg">
					<h2 class="text-md">
						Send quotes with <br />
						supplier <br />
						preferences
					</h2>
				</div>
			</div>
		</section>
		<!-- LATEST TRENDING SECTION END -->

		<!-- DEALS AND OFFERS SECTION START -->
		<section
			class="lg:mt-5 bg-white border lg:h-[240px] rounded-lg shadow flex gap-2 overflow-y-hidden w-full">
			<div
				class="flex justify-between lg:justify-center lg:block w-full lg:w-[25%] p-3 mr-4">
				<div class="">
					<h2 class="text-xl font-bold">Deals and offers</h2>
					<span class="text-gray-500">Hygiene equipments</span>
				</div>
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
			</div>
			<CardDeal v-for="el in deals" :data="el" />
		</section>
		<!-- DEALS AND OFFERS SECTION END -->

		<!-- HOME AND OUTDOOR SECTION START -->
		<section
			class="lg:mt-5 bg-white border lg:h-[240px] rounded-lg shadow flex w-full">
			<div
				class="bg-[url('/home.png')] bg-cover flex justify-between lg:justify-center lg:block w-full lg:w-[26%] p-4">
				<h2 class="text-xl font-bold">
					Home and <br />
					outdoor
				</h2>
				<button class="bg-white mt-3 px-3 py-2 rounded-lg">Source now</button>
			</div>
			<div class="grid grid-cols-4 grid-rows-2 w-[75%]">
				<HomeOutdoor />
				<HomeOutdoor />
				<HomeOutdoor />
				<HomeOutdoor />
				<HomeOutdoor />
				<HomeOutdoor />
				<HomeOutdoor />
				<HomeOutdoor />
			</div>
		</section>
		<!-- HOME AND OUTDOOR SECTION END -->
	</div>
</template>

<style lang="scss" scoped></style>
