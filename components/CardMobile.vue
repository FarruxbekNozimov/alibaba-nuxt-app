<script setup>
const { element, dona } = defineProps(["element", "dona"]);
</script>

<template>
	<div class="border-t border-gray-300">
		<button
			class="flex items-center justify-between py-3 w-full border-b-0 text-gray-900 outline-none mb-3">
			<span class="flex items-center">{{ dona }}</span>
			<i
				:class="element.length ? 'bx-chevron-up' : 'bx-chevron-down'"
				class="bx text-2xl text-gray-600"></i>
		</button>
		<ul class="text-gray-600">
			<li v-for="item in element" v-if="item != 'null'" class="mb-3">
				<div class="flex items-center mb-4">
					<input
						:id="item"
						:class="{ hidden: element[0] == null }"
						type="checkbox"
						class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
					<label :for="item" class="ml-2 text-sm font-medium text-gray-900">{{
						item
					}}</label>
				</div>
			</li>
		</ul>
	</div>
</template>
