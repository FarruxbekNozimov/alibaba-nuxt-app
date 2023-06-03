<script setup>
const topNavLinks = [
	"All category",
	"Hot offers",
	"Gift boxes",
	"Projects",
	"Menu item",
	"Help",
];
</script>
<template>
	<div>
		<header>
			<nav
				class="bg-white border-gray-200 py-3 px-20 border-b border-[#E0E0E0]">
				<div
					class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl relative">
					<div
						class="hidden justify-between items-center w-full lg:flex lg:w-auto">
						<button
							class="inline-flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
							<span class="sr-only">Open main menu</span>
							<svg
								class="w-6 h-6"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									clip-rule="evenodd"></path>
							</svg>
							<svg
								class="hidden w-6 h-6"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clip-rule="evenodd"></path>
							</svg>
						</button>
						<ul class="flex items-center flex-col font-medium lg:flex-row">
							<li
								v-for="el in topNavLinks"
								class="p-2 mr-3 hover:bg-slate-200 rounded-md cursor-pointer py-2">
								<a
									href="#"
									class="block py-2 pr-4 pl-3 text-gray-800 rounded lg:p-0"
									aria-current="page">
									{{ el }}
								</a>
							</li>
						</ul>
					</div>
					<div class="flex items-center">
						<select
							id="countries"
							class="bg-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 cursor-pointer text-slate-900 outline-none">
							<option>English, USD</option>
							<option>Uzbek, SUM</option>
							<option>Russian, EU</option>
						</select>
						<select
							id="countries"
							class="bg-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 cursor-pointer text-slate-900 outline-none">
							<option>Ship to 🇺🇿</option>
							<option>Ship to 🇩🇪</option>
							<option>Ship to 🇷🇺</option>
							<option>Ship to 🏴󠁧󠁢󠁥󠁮󠁧󠁿</option>
						</select>
					</div>
				</div>
			</nav>
		</header>
	</div>
</template>
