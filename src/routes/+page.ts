import type { PageLoad } from './$types';
import { Capitalize } from '../utils/capitalize';

type IndexMonster = {
	name: string;
	url: string;
};

export const load = (async ({ fetch }) => {
	const fetchPokemon = async () => {
		const pokemonRes = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
		const json = await pokemonRes.json();
		const monsters = json.results.map((monster: IndexMonster) => {
			const capitalizedName = Capitalize(monster.name);
			const splitUrl = monster.url.split('/');
			const id = splitUrl[splitUrl.length - 2];
			return {
				name: capitalizedName,
				url: monster.url,
				id,
				img: `https://pkmn.net/sprites/crystal/${id}.gif`
			};
		});
		return monsters;
	};
	return {
		listOfPokemon: fetchPokemon()
	};
}) satisfies PageLoad;
