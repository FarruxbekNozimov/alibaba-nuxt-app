<script setup>
import { deals } from "@/public/products/products";
import { menuTrending } from "@/public/js/menuTrending";
import { regions } from "@/public/js/supliers";
import { homeOutdoor } from "@/public/home-outdoor/home-outdoor";
import { consumer } from "@/public/consumer/consumer";
import { extraService } from "@/public/extraService/extraService";
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
				<Time />
			</div>
			<CardDeal v-for="el in deals" :data="el" />
		</section>
		<!-- DEALS AND OFFERS SECTION END -->

		<!-- HOME AND OUTDOOR SECTION START -->
		<CardWrapper
			img="banner.png"
			title="Home and outdoor"
			:data="homeOutdoor"
			folder="home-outdoor" />
		<!-- HOME AND OUTDOOR SECTION END -->

		<!-- CONSUMER & GADGETS SECTION START -->
		<CardWrapper
			img="banner2.png"
			title="Consumer electronics and gadgets"
			:data="consumer"
			folder="consumer" />
		<!-- CONSUMER & GADGETS SECTION END -->

		<!-- SEND REQUEST SECTION START -->
		<SendRequest />
		<!-- SEND REQUEST SECTION END -->

		<!-- RECOMENDED SECTION START -->
		<Recomended />
		<!-- RECOMENDED SECTION END -->

		<!-- EXTRA SERVICE SECTION START -->
		<section class="rounded-lg w-full py-5">
			<h2 class="text-2xl font-bold mb-5">Our extra services</h2>
			<div class="grid grid-cols-4 grid-rows-1 gap-5">
				<ExtraServiceItem v-for="el in extraService" :data="el" />
			</div>
		</section>
		<!-- EXTRA SERVICE SECTION END -->

		<!-- SUPLIERS REGION SECTION START -->
		<section class="rounded-lg w-full py-5">
			<h2 class="text-2xl font-bold mb-7">Supliers by region</h2>
			<div class="grid grid-cols-5 gap-5">
				<SupliersItem v-for="el in regions" :data="el" />
			</div>
		</section>
		<!-- SUPLIERS REGION SECTION END -->
	</div>
</template>

<style lang="scss" scoped></style>
