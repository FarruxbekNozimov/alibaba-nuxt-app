<script setup>
definePageMeta({
	layout: "cart",
});
const services = [
	{ icon: "bx bxs-lock", name: "Secure payment" },
	{ icon: "bx bxs-message-alt-detail", name: "Customer support" },
	{ icon: "bx bxs-truck", name: "Free delivery" },
];
</script>

<template>
	<div class="py-5">
		<h1 class="text-2xl mb-5">My cart (3)</h1>
		<div class="flex gap-5">
			<div class="w-[75%] bg-white rounded-lg shadow">
				<div v-for="el in 3" class="border-b flex justify-between gap-3 p-5">
					<div class="flex gap-3">
						<div
							class="h-[70px] w-[70px] bg-white rounded-lg border border-gray-300">
							<img
								:src="`/cart/${el}.png`"
								alt=""
								class="h-[70px] mx-auto p-2" />
						</div>
						<div>
							<h2>T-shirts with multiple colors, for men and lady</h2>
							<p class="text-sm text-gray-500">
								Size: medium, Color: blue, Material: Plastic
							</p>
							<p class="text-sm text-gray-500">Seller: Artel Market</p>
							<div class="flex mt-3 gap-5">
								<button
									class="shadow hover:shadow-md border px-2 py-1 rounded-md text-red-500">
									Remove
								</button>
								<button
									class="shadow hover:shadow-md border px-2 py-1 rounded-md text-blue-500">
									Save for later
								</button>
							</div>
						</div>
					</div>
					<div class="text-end">
						<h2 class="text-xl">$78.99</h2>
						<div class="border px-2 py-1 mt-3 rounded-lg outline-none">
							<select class="bg-white outline-none">
								<option>Qty: 9</option>
								<option>Qty: 9</option>
							</select>
						</div>
					</div>
				</div>
				<div class="flex justify-between p-5">
					<button
						class="px-4 py-1 text-white bg-blue-500 flex items-center gap-2 rounded-md">
						<i class="bx bx-left-arrow-alt text-2xl"></i> Back to shop
					</button>
					<button
						class="px-4 py-1 hover:bg-gray-100 text-blue-500 border border-gray-300 bg-none flex items-center gap-2 rounded-md">
						Remove all
					</button>
				</div>
			</div>
			<div class="w-[25%]">
				<div class="bg-white p-5 rounded-lg shadow mb-5">
					<label class="text-gray-600">Have a coupon?</label>
					<div class="flex mt-2">
						<input
							type="text"
							placeholder="Add coupon"
							class="w-[80%] rounded-l-md border border-r-0 px-2 outline-none" />
						<button
							class="border p-2 px-4 text-blue-500 hover:bg-gray-100 rounded-r-md">
							Apply
						</button>
					</div>
				</div>
				<div class="text-gray-600 bg-white p-5 rounded-lg shadow mb-5">
					<div class="mb-3 flex items-center justify-between">
						<span>Subtotal:</span>
						<span>$1403.97</span>
					</div>
					<div class="mb-3 flex items-center justify-between">
						<span>Discount:</span>
						<span class="text-red-500">- $60.00</span>
					</div>
					<div class="mb-3 flex items-center justify-between">
						<span>Tax:</span>
						<span class="text-green-500">+ $14.00</span>
					</div>
					<div class="h-[1px] bg-gray-400 my-5"></div>
					<div class="py-3 text-black mb-3 flex items-center justify-between">
						<span>Total:</span>
						<span class="text-xl">$1357.97</span>
					</div>
					<button
						class="text-center bg-[#00B517] w-full py-3 rounded-md text-white text-lg">
						Checkout
					</button>
					<div class="flex items-center justify-center gap-5 pt-5">
						<img v-for="el in 5" :src="`/payments/${el}.png`" />
					</div>
				</div>
			</div>
		</div>
		<div class="flex py-10 gap-10">
			<div v-for="el in services" class="flex items-center gap-2">
				<i
					:class="el.icon"
					class="text-3xl bg-gray-300 p-2 px-3 rounded-full text-gray-500"></i>
				<div>
					<h2>{{ el.name }}</h2>
					<p class="text-gray-500 text-sm">Have you ever finally just</p>
				</div>
			</div>
		</div>
		<div class="bg-white h-[475px] rounded-lg shadow p-5">
			<h2 class="text-xl">Saved for later</h2>
			<div class="grid grid-cols-4">
				<div v-for="el in [4, 2, 8, 7]" class="p-5">
					<img :src="`/mobile/${el}.png`" class="mx-auto" />
					<h2 class="py-3 text-xl">$99.50</h2>
					<p class="text-gray-500 text-sm">
						GoPro HERO6 4K Action <br />
						Camera - Black
					</p>
					<button
						class="border text-blue-500 px-3 py-1 mt-3 rounded-lg flex items-center gap-3 hover:bg-gray-100">
						<i class="bx bx-cart-alt text-xl"></i> Move to cart
					</button>
				</div>
			</div>
		</div>
		<div
			class="mt-5 rounded-lg text-white flex items-center justify-between bg-[#005ADE] p-5 h-[120px] relative">
			<img src="/addleft.png" class="absolute left-0 z-0" />
			<div class="z-50">
				<h2 class="text-2xl">Super discount on more than 100 USD</h2>
				<p class="text-sm">Have you ever finally just write dummy info</p>
			</div>
			<button class="bg-orange-400 p-4 py-2 rounded-lg">Shop now</button>
		</div>
	</div>
</template>
