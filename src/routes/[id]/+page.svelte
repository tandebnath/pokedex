<script>
	import { prepend } from '../../utils/prepend.ts';

	export let data;
	const { pokemonDetails, pokemonSpeciesDetails } = data;
	const {
		pokemonAbilities,
		pokemonHeight,
		pokemonName,
		pokemonStats,
		pokemonTypes,
		pokemonWeight,
		pokemonID,
		pokemonImage
	} = pokemonDetails;
	const {pokemonColor, pokemonDescription, pokemonJapaneseName} = pokemonSpeciesDetails;
	console.log(pokemonColor);
	const pokemonId = prepend(pokemonID);
</script>


<div class={`flex flex-col gap-8 bg-${pokemonColor}-50`}>
	<div class="flex flex-row gap-8">
		<img src={`${pokemonImage}`} alt={`${pokemonName}`} />
		<div class="flex flex-col gap-4">
			<p class="text-xl font-bold">#{pokemonId}&nbsp;&nbsp;{pokemonName}&nbsp;/&nbsp;{pokemonJapaneseName}</p>
			<div class="flex flex-row gap-2">
				{#each pokemonTypes as type}
					<div class="badge">{type.name}</div>
				{/each}
			</div>
			<div class="flex flex-row gap-8">
				<div class="flex flex-col">
					<p>Height</p>
					<p>{pokemonHeight}m</p>
				</div>
				<div class="flex flex-col">
					<p>Weight</p>
					<p>{pokemonWeight}kg</p>
				</div>
				
			</div>

		</div>
	</div>
	<p>{pokemonDescription}</p>
</div>
