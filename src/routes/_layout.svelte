<script lang="ts">
	import Nav from "../components/Nav.svelte";
	import Head from "../components/Head.svelte";

	export let segment: string;
</script>

<style>
	main {
		background-color: var(--common-white);

		margin: 0 auto;
		padding: 5.5em 2em 2em;

		box-sizing: border-box;
	}

	#filters-bar {
		position: fixed;
	}
</style>

<Head />
<div id="filters-bar" />

<main>
	<slot />
</main>

<Nav {segment} />
