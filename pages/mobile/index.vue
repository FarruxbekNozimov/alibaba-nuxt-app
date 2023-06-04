<script setup>
import { leftbar } from "@/public/js/mobileLeftbar";
</script>

<template>
	<div class="w-full h-full w-full">
		<nav class="py-5">
			<ul class="flex gap-3 items-center text-gray-500">
				<li>Home <i class="bx bxs-chevron-right"></i></li>
				<li>Clothings <i class="bx bxs-chevron-right"></i></li>
				<li>Men's wear <i class="bx bxs-chevron-right"></i></li>
				<li>Summer clothing <i class="bx bxs-chevron-right"></i></li>
			</ul>
		</nav>
		<div class="flex gap-5">
			<div class="w-[25%]">
				<CardMobile v-for="(el, i) in leftbar" :element="el" :dona="i" />
			</div>
			<div class="w-[75%]">
				<div
					class="bg-white flex items-center justify-between py-3 px-5 rounded-lg border border-gray-200">
					<h2>
						12,911 items in <span class="font-bold">Mobile accessory</span>
					</h2>
					<div class="flex items-center gap-3">
						<input
							id="item"
							type="checkbox"
							class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
						<label for="item" class="text-sm text-gray-900">
							Verified only
						</label>
						<div class="border pr-3 py-1.5 rounded-lg">
							<select class="bg-white outline-none px-3 rounded-md">
								<option>Featured</option>
							</select>
						</div>
						<div class="flex items-center">
							<img
								src="/cardIcon.png"
								alt=""
								class="border border-r-0 rounded-l-md cursor-pointer bg-gray-300 p-1" />
							<img
								src="/tableIcon.png"
								alt=""
								class="border rounded-r-md cursor-pointer bg-white p-1" />
						</div>
					</div>
				</div>
				<div class="flex items-center text-sm gap-2 py-5">
					<button
						v-for="el in [
							'Samsung',
							'Apple',
							'Poco',
							'Metallic',
							'4 star',
							'3 star',
						]"
						class="bg-white flex items-center gap-1 border border-[#0D6EFD] hover:bg-[#0D6EFD]/10 pl-3 pr-1 rounded-lg text-gray-800 duration-300 text-sm">
						{{ el }} <i class="bx bx-x text-2xl text-gray-600"></i>
					</button>
					<span class="text-[#0D6EFD] cursor-pointer">Clear all filter</span>
				</div>
				<div class="grid grid-cols-3 gap-5">
					<div
						v-for="el in 9"
						class="bg-white border border-gray-300 w-[290px] h-[400px] rounded-lg shadow hover:shadow-xl cursor-pointer duration-200">
						<img
							:src="`/mobile/${el}.png`"
							class="mx-auto m-5 h-[200px] object-contain px-5" />
						<div class="border-t border-gray-200 p-5">
							<div class="flex items-center justify-between">
								<div class="">
									<div class="flex items-center gap-2">
										<span class="font-bold text-2xl">$99.50</span>
										<span class="text-gray-500 line-through">$1128.00</span>
									</div>
									<div class="flex items-center">
										<i class="bx bxs-star text-orange-500" v-for="el in 4"></i>
										<i class="bx bxs-star text-gray-500"></i>
										<span class="ml-2 text-orange-500">7.5</span>
									</div>
								</div>
								<i
									class="bx bx-heart text-2xl border border-gray-300 rounded-md text-blue-500 hover:bg-gray-100 cursor-pointer p-1 py-0"></i>
							</div>
							<p class="text-sm py-3 text-gray-500">
								GoPro HERO6 4K Action <br />
								Camera - Black
							</p>
						</div>
					</div>
				</div>
				<div class="flex items-center justify-end gap-5 py-5 mb-10 text-end">
					<div class="bg-white px-2 py-2 border border-gray-300 rounded-lg">
						<select
							class="cursor-pointer bg-white outline-none pr-5 text-gray-800">
							<option>Show 10</option>
						</select>
					</div>
					<ul class="flex items-center gap-0 border border-gray-300 rounded-lg">
						<li
							class="px-2 p-1 bg-white hover:bg-gray-100 cursor-pointer border-r rounded-l-lg">
							<i class="bx bx-chevron-left text-2xl"></i>
						</li>
						<li
							v-for="i in 3"
							class="p-2 px-4 bg-white hover:bg-gray-100 cursor-pointer border-r">
							{{ i }}
						</li>
						<li
							class="px-2 p-1 bg-white hover:bg-gray-100 cursor-pointer border-r rounded-r-lg">
							<i class="bx bx-chevron-right text-2xl"></i>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
