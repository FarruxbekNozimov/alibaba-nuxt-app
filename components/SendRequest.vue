<script setup></script>

<template>
	<section
		class="lg:mt-5 bg-white border lg:h-[440px] rounded-lg flex w-full bg-[url('banner3.png')] bg-cover">
		<div
			class="w-full bg-gradient-to-r from-[#2C7CF1] to-[#00D1FF80] rounded-lg flex p-10 justify-between">
			<div class="w-[440px] text-white">
				<h2 class="font-bold text-3xl mb-6">
					An easy way to send requests to all suppliers
				</h2>
				<h4 class="text-sm">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
					eiusmod tempor incididunt.
				</h4>
			</div>
			<form class="bg-white w-[490px] p-5 rounded-lg">
				<h2 class="text-xl mb-7 font-bold">Send quote to suppliers</h2>
				<input
					type="text"
					placeholder="What item you need?"
					class="mb-5 w-full border border-gray-300 px-3 py-2 rounded-lg outline-none placeholder:text-black" />
				<textarea
					rows="2"
					class="mb-5 w-full border border-gray-300 px-3 py-2 rounded-lg outline-none"
					placeholder="Type more details"></textarea>
				<div class="flex gap-5">
					<input
						type="text"
						placeholder="Quantity"
						class="mb-5 w-[50%] border border-gray-300 px-3 py-2 rounded-lg outline-none placeholder:text-black" />
					<select
						type="text"
						class="mb-5 bg-white w-[50%] border border-gray-300 px-3 py-2 rounded-lg outline-none">
						<option>Pcs</option>
						<option>Pcs</option>
						<option>Pcs</option>
					</select>
				</div>
				<button
					class="text-white px-3 py-2 rounded-lg bg-gradient-to-r from-[#127FFF] to-[#0067FF]">
					Send inquiry
				</button>
			</form>
		</div>
	</section>
</template>

<style lang="scss" scoped></style>
