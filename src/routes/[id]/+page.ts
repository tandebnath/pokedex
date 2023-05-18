import type { PageLoad } from './$types';
import { Capitalize } from '../../utils/capitalize';

export const load = (async ({ fetch, params }) => {
	const fetchPokemonDetails = async () => {
		console.log('bye');
		const pokemonRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
		const json = await pokemonRes.json();
		const pokemonDetails = {
			pokemonName: Capitalize(json.name),
			pokemonWeight: json.weight / 10,
			pokemonHeight: json.height / 10,
			pokemonStats: json.stats,
			pokemonAbilities: json.abilities,
			pokemonTypes: json.types
				.reduce((arr: any, elem: any) => arr.concat(elem.type), []),
			pokemonID: json.id,
			pokemonImage: json.sprites.other.dream_world.front_default
		};
		// const monsters: IndexMonster[] = json.results.map((monster: ApiMonster) => {
		// 	const capitalizedName = Capitalize(monster.name);
		// 	const splitUrl = monster.url.split('/');
		// 	const id = splitUrl[splitUrl.length - 2];
		// 	return {
		// 		name: capitalizedName,
		// 		url: monster.url,
		// 		id,
		// 		// img: `https://pkmn.net/sprites/crystal/${id}.gif`
		// 		img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
		// 		//	img: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`
		// 	};
		// });
		// return monsters;
		return pokemonDetails;
	};
	const fetchPokemonSpeciesDetails = async () => {
		console.log('hi');
		const pokemonRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${params.id}`);
		const json = await pokemonRes.json();
		console.log(json);
		const pokemonSpeciesDetails = {
			pokemonColor: json.color.name,
			pokemonDescription: json.flavor_text_entries[8].flavor_text,
			pokemonJapaneseName: json.names[9].name,
			pokemonCategory: json.genera[7].genus,
			pokemonHabitat: Capitalize(json.habitat.name)
		};
		return pokemonSpeciesDetails;
		console.log(pokemonSpeciesDetails);
	};
	return {
		pokemonDetails: fetchPokemonDetails(),
		pokemonSpeciesDetails: fetchPokemonSpeciesDetails()
	};
}) satisfies PageLoad;
