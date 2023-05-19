<script lang="ts">
	import type { PageData } from './$types.js';
	import PokemonCard from '$lib/pokemonCard.svelte';

	export let data: PageData;

	const { listOfPokemon } = data;

	let search = '';
	$: selectedPokemon = listOfPokemon.filter((pokemon) => {
		return pokemon.name.toLowerCase().includes(search.toLowerCase());
	});
</script>

<div class="flex w-full items-center justify-center mb-6">
	<input
		type="text"
		bind:value={search}
		placeholder="Search for a Pokemon"
		class="input-bordered w-full max-w-xs p-2 rounded-lg bg-[#f8f8f8]"
	/>
</div>
<div class="flex flex-row flex-wrap items-center justify-center gap-12">
	{#each selectedPokemon as pokemon (pokemon.id)}
		<PokemonCard pokemonId={pokemon.id} pokemonName={pokemon.name} pokemonImg={pokemon.img} displayId={pokemon.displayId} />
	{/each}
</div>

<style lang="postcss">
</style>
