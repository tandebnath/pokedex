<script lang="ts">
	export let pokemonName: string;
	export let pokemonId: string;
	export let pokemonImg: string;
	export let displayId: string;
</script>

<a data-sveltekit-preload-data="hover" href="/{pokemonId}">
	<div class="card min-w-[12rem] shadow-xl bg-white">
		<figure><img src={pokemonImg} alt={pokemonName} class="w-32 mt-4" /></figure>
		<div class="card-body flex flex-col items-center">
			<div class="badge badge-lg gap-2 border-none shadow-inner bg-[#f8f8f8] text-black">#{displayId}</div>
			<h2 class="card-title justify-center text-accent">{pokemonName}</h2>
		</div>
	</div>
</a>

<!-- <div
	class="w-28 min-h-24 flex flex-col justify-items-center items-center border-2 border-solid border-stone-950 m-4 p-4"
>


</div> -->
