import type { PageLoad } from './$types';
import { Capitalize } from '$lib/utils/capitalize';
import { prepend } from '$lib/utils/prepend';

type ApiMonster = {
	name: string;
	url: string;
};

type IndexMonster = ApiMonster & {
	id: string;
	img: string;
	displayId: string;
};

export const load = (async ({ fetch }) => {
	const fetchPokemon = async () => {
		const pokemonRes = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
		const json = await pokemonRes.json();
		const monsters: IndexMonster[] = json.results.map((monster: ApiMonster) => {
			const capitalizedName = Capitalize(monster.name);
			const splitUrl = monster.url.split('/');
			const id = splitUrl[splitUrl.length - 2];
			const displayId = prepend(id);
			// const imageId = Number(id).toLocaleString('en-us', {
			// 	minimumIntegerDigits: 3,
			// 	useGrouping: false
			// });
			return {
				name: capitalizedName,
				url: monster.url,
				id,
				displayId,
				//img: `https://archives.bulbagarden.net/media/upload/d/df/Spr_2c_${imageId}.png`
				// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg
				img: `https://pkmn.net/sprites/crystal/${id}.gif`
				// img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
				//	img: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id}.svg`
			};
		});
		return monsters;
	};
	return {
		listOfPokemon: fetchPokemon()
	};
}) satisfies PageLoad;
