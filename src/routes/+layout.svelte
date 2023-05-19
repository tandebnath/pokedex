<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { page } from '$app/stores';
	import '../app.css';
	import pokeballLogo from '$lib/assets/pokemon.svg';
	import pokedexPng from '$lib/assets/pokedex-png.png';

	export const prerender = true;

	const submitUpdateTheme: SubmitFunction = ({ action }) => {
		const theme = action.searchParams.get('theme');

		if (theme) {
			document.documentElement.setAttribute('data-theme', theme);
		}
	};

	const themes = ['light', 'dark', 'valentine', 'cupcake'];
</script>

<div class="min-h-full">
	<div class="navbar bg-[#e9274a] px-[5%]">
		<div class="navbar-start" />
		<div class="navbar-center">
			<a data-sveltekit-preload-data="hover" href="/" class="font-bold text-xl"> <img src={pokedexPng} alt="poke" class="w-24" /></a>
		</div>
		<div class="navbar-end flex-none">
			<ul class="menu menu-horizontal px-1 z-50">
				<li>
					<button class="bg-[#9e102a]"><p class="text-white">Choose Theme 🎨</p></button>
					<ul class="p-2 w-full max-h-96 overflow-y-scroll bg-[#9e102a]">
						<form method="POST" use:enhance={submitUpdateTheme}>
							{#each themes as theme}
								<li>
									<button formaction="/?/setTheme&theme={theme}&redirectTo={$page.url.pathname}"
										><p class="text-white">{theme}</p></button
									>
								</li>
							{/each}
						</form>
					</ul>
				</li>
			</ul>
		</div>
	</div>
	<div class='px-[5%] my-[2.5%]'>
	<slot />
	</div>
</div>
