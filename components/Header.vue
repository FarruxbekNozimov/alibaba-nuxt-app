<script setup>
const navLinks = [
	{ path: "profile", title: "Profile", icon: "bx bxs-user" },
	{ path: "message", title: "Message", icon: "bx bxs-chat" },
	{ path: "orders", title: "Orders", icon: "bx bxs-heart" },
	{ path: "cart", title: "My cart", icon: "bx bxs-cart" },
];
const topFilter = ref(false);
const currentCategory = ref("All Category");
const categories = ref([
	{ name: "All Category" },
	{ name: "Gadgets" },
	{ name: "Clocthes" },
	{ name: "Accessory" },
]);
</script>
<template>
	<div>
		<header>
			<nav
				class="bg-white border-gray-200 py-3 px-20 border-b border-[#E0E0E0]">
				<div
					class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
					<a href="/" class="flex items-center">
						<img src="/logo.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
					</a>
					<div class="relative flex w-[50%]">
						<input
							type="search"
							id="location-search"
							class="p-2.5 w-full z-20 text-sm text-gray-900 rounded-l-lg border-[#0D6EFD] border-2 border-r-0 outline-none"
							placeholder="Search"
							required />
						<button
							class="flex-shrink-0 z-10 inline-flex items-center justify-between px-4 text-sm font-medium text-center border-2 border-[#0D6EFD] hover:bg-gray-200 outline-none gap-2 w-44"
							type="button"
							@click="() => (topFilter = !topFilter)">
							{{ currentCategory }}
							<i class="bx bx-chevron-down text-2xl text-slate-500"></i>
						</button>
						<div
							id="dropdownHover"
							class="absolute right-24 z-50 top-12 bg-white border shadow rounded-lg w-44"
							:class="{ hidden: !topFilter }">
							<ul
								class="py-2 text-sm text-gray-700 p-0"
								aria-labelledby="dropdownHoverButton">
								<nuxt-link
									v-for="el in categories"
									class="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
									:select="el.name == currentCategory"
									@click="() => (currentCategory = el.name)">
									{{ el.name }}
								</nuxt-link>
							</ul>
						</div>
						<button
							type="submit"
							class="p-2.5 px-5 text-sm font-medium text-white bg-[#127FFF] rounded-r-lg">
							<span class="">Search</span>
						</button>
					</div>
					<div
						class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-3"
						id="mobile-menu-2">
						<div
							class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
							<nuxt-link
								v-for="el in navLinks"
								:to="el.path"
								class="text-center">
								<i :class="el.icon" class="text-2xl text-gray-500"></i>
								<span
									href="#"
									class="block text-sm text-gray-500"
									aria-current="page">
									{{ el.title }}
								</span>
							</nuxt-link>
						</div>
					</div>
				</div>
			</nav>
		</header>
	</div>
</template>
