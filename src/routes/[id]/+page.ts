import type { PageLoad } from './$types';
import { Capitalize } from '../../lib/utils/capitalize';

export const load = (async ({ fetch, params }) => {
	const fetchPokemonDetails = async () => {
		const pokemonRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
		const json = await pokemonRes.json();
		const pokemonDetails = {
			pokemonName: Capitalize(json.name),
			pokemonWeight: json.weight / 10,
			pokemonHeight: json.height / 10,
			// pokemonStats: json.stats,
			pokemonStats: json.stats.reduce(
				(arr: any, item: any) => arr.concat({ name: Capitalize(item.stat.name), value: item.base_stat }),
				[]
			),
			pokemonAbilities: json.abilities,
			pokemonTypes: json.types,
			pokemonID: json.id,
			pokemonImage: json.sprites.other.dream_world.front_default
		};
		return pokemonDetails;
	};
	const fetchPokemonSpeciesDetails = async () => {
		const pokemonRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${params.id}`);
		const json = await pokemonRes.json();
		const pokemonSpeciesDetails = {
			pokemonColor: json.color?.name,
			pokemonDescription: json.flavor_text_entries?.[8]?.flavor_text,
			pokemonJapaneseName: json.names?.[9]?.name,
			pokemonCategory: json.genera?.[7]?.genus,
			pokemonHabitat: json.habitat.name ? Capitalize(json.habitat.name) : ''
		};
		return pokemonSpeciesDetails;
	};
	return {
		pokemonDetails: fetchPokemonDetails(),
		pokemonSpeciesDetails: fetchPokemonSpeciesDetails()
	};
}) satisfies PageLoad;
