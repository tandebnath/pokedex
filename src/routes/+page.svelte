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

<h1 class="text-3xl font-bold">Pokemon</h1>
<input type="text" bind:value={search} placeholder="Search for a Pokemon" class="input-bordered w-full max-w-xs" />
<div class="flex flex-row flex-wrap items-center justify-center gap-8">
	{#each selectedPokemon as pokemon (pokemon.id)}
		<PokemonCard pokemonId={pokemon.id} pokemonName={pokemon.name} pokemonImg={pokemon.img} />
	{/each}
</div>

<style lang="postcss">
</style>
