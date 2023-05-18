<script lang="ts">
	export let pokemonName: string;
	export let pokemonId: string;
	export let pokemonImg: string;
</script>

<a data-sveltekit-preload-data="hover" href="/{pokemonId}">
	<div class="card w-96 shadow-xl">
		<figure><img src={pokemonImg} alt={pokemonName} class="w-32" /></figure>
		<div class="card-body">
			<h2 class="card-title justify-center text-accent">{pokemonName}</h2>
		</div>
	</div>
</a>

<!-- <div
	class="w-28 min-h-24 flex flex-col justify-items-center items-center border-2 border-solid border-stone-950 m-4 p-4"
>


</div> -->
