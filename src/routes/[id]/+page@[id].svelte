<script>
	// @ts-nocheck

	import { Capitalize } from '$lib/utils/capitalize.ts';

	// @ts-nocheck

	import { prepend } from '$lib/utils/prepend.ts';

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
	const { pokemonColor, pokemonDescription, pokemonJapaneseName, pokemonHabitat, pokemonCategory } =
		pokemonSpeciesDetails;
	const pokemonId = prepend(pokemonID);
	const chipColors = {
		normal: '#A8A878',
		fighting: '#C03028',
		flying: '#A890F0',
		poison: '#A040A0',
		ground: '#E0C068',
		rock: '#B8A038',
		bug: '#A8B820',
		ghost: '#705898',
		steel: '#B8B8D0',
		fire: '#F08030',
		water: '#5BC7E5',
		grass: '#78C850',
		electric: '#F8D030',
		psychic: '#F85888',
		ice: '#98D8D8',
		dragon: '#7038F8',
		dark: '#705848',
		fairy: '#EE99AC',
		unknown: '#68A090',
		shadow: '#282828'
	};
	const capitalizedTypes = pokemonTypes.map((/** @type {{ name: any; }} */ item) =>
		Capitalize(item.type.name)
	);
	const baseColor = chipColors[pokemonTypes[0].type.name];
</script>

{#await data}
	Loading...
{:then value}
	<div class={`flex flex-col gap-8`}>
		<div class="flex flex-row flex-wrap gap-x-8 gap-y-4 mt-4">
			<div id="pokemon-image" class="flex justify-center items-center w-[100%] max-w-xs">
				<img src={`${pokemonImage}`} alt={`${pokemonName}`} />
			</div>
			<div id="pokemon-info" class="flex flex-col gap-y-4 gap-x-2">
				<p class="text-2xl font-bold">
					#{pokemonId}&nbsp;&nbsp;{pokemonName}&nbsp;/&nbsp;{pokemonJapaneseName}
				</p>
				<div id="pokemon-types" class="flex flex-row gap-2 mb-4">
					{#each capitalizedTypes as type}
						<div
							class="badge badge-lg gap-2 border-none"
							style={`background:${chipColors[type.toLowerCase()]}`}
						>
							<p class="text-white font-semibold text-base">{type}</p>
						</div>
					{/each}
				</div>
				<div class="flex flex-row flex-wrap gap-y-8 gap-x-48">
					<div class="flex flex-col gap-y-4">
						<div id="pokemon-height-weight" class="flex flex-row justify-between gap-x-16">
							<div class="flex flex-col">
								<p class="text-lg font-bold text-accent-focus">Height</p>
								<p class="font-semibold">{pokemonHeight}m</p>
							</div>
							<div class="flex flex-col">
								<p class="text-lg font-bold text-accent-focus">Weight</p>
								<p class="font-semibold">{pokemonWeight}kg</p>
							</div>
						</div>
						<div id="pokemon-category-habitat" class="flex flex-row justify-between gap-x-16">
							<div class="flex flex-col">
								<p class="text-lg font-bold text-accent-focus">Category</p>
								<p class="font-semibold">{pokemonCategory}</p>
							</div>
							<div class="flex flex-col">
								<p class="text-lg font-bold text-accent-focus">Habitat</p>
								<p class="font-semibold">{pokemonHabitat}</p>
							</div>
						</div>
						<div id="pokemon-abilities" class="flex flex-col">
							<p class="text-lg font-bold text-accent-focus">Ability</p>
							<div class="flex flex-row gap-x-2 mt-1">
								{#each pokemonAbilities as ability}
									<div class="badge badge-outline" style={`border:1px solid ${baseColor}`}>
										<p class="font-semibold">{ability.ability.name}</p>
									</div>
								{/each}
							</div>
						</div>
					</div>
					<div id="pokemon-stats" class="flex flex-col">
						{#each pokemonStats as stat}
							<div class="flex flex-row items-center">
								<div
									class="bg-warning h-[50%] flex items-center text-xs rounded-l-lg justify-start pl-2 text-black"
									style={`width:${stat.value}px`}
								>
									{stat.value}
								</div>
								<div
									class="bg-gray-600 h-[50%] flex items-center rounded-r-lg"
									style={`width:${255 - stat.value}px`}
								/>
								<p class="text-lg font-semibold ml-4">{stat.name}</p>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
		<div style={`background:${baseColor}30`} class="p-4 rounded-lg">
			<p class="text-lg font-semibold text-info">{pokemonDescription}</p>
		</div>
	</div>
{:catch error}
	{error.message}
{/await}
