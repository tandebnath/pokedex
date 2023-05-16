<script lang="ts">
	import type { PageData } from './$types.js';
	export let data: PageData;
	const { listOfPokemon } = data;
	import PokemonCard from '$lib/pokemonCard.svelte';
</script>

<h1 class="text-3xl font-bold">Pokemon</h1>
<div class="flex flex-row flex-wrap">
	{#each listOfPokemon as pokemon (pokemon.id)}
		<div class="w-28 min-h-24 flex flex-col justify-items-center items-center border-2 border-solid border-stone-950 m-4 p-4">
			<img src={pokemon.img} alt={pokemon.name} />
			{pokemon.id} : {pokemon.name}
		</div>
	{/each}
</div>

<style lang="postcss">
</style>
