<script setup>
const navLinks = [
	{
		title: "Profile",
		icon: "bx bxs-user",
	},
	{
		title: "Message",
		icon: "bx bxs-chat",
	},
	{
		title: "Orders",
		icon: "bx bxs-heart",
	},
	{
		title: "My cart",
		icon: "bx bxs-cart",
	},
];
</script>
<template>
	<div>
		<header>
			<nav
				class="h-[80px] bg-white border-gray-200 px-4 lg:px-20 py-2.5 dark:bg-gray-800">
				<div
					class="h-full flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
					<a href="https://flowbite.com" class="flex items-center">
						<img src="/logo.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
					</a>
					<div
						class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
						id="mobile-menu-2">
						<div
							class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
							<nux-link
								v-for="el in navLinks"
								class="block text-slate-500 rounded text-center cursor-pointer">
								<i :class="el.icon" class="block text-xl"></i>
								{{ el.title }}
							</nux-link>
						</div>
					</div>
				</div>
			</nav>
		</header>
	</div>
</template>

<style scoped>
/* .router-link-exact-active {
	font-weight: 800;
	border-bottom: 3px solid green;
}

.logo {
	text-decoration: none;
	border: none;
} */
</style>
