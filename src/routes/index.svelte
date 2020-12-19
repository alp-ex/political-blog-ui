<script lang="typescript">
	import MultiplesFiltersList from "../components/MultiplesFiltersList.svelte";
	import ArticleCardLink from "../components/ArticleCardLink.svelte";
	import { onMount } from "svelte";
	import { getData } from "./_helpers/fetchAPI";
	import { goto } from "@sapper/app";

	let categories = [];
	let articles = [];
	$: filters = [];

	const handleArticleClick = (id) => {
		goto(`medias/${id}`);
	};

	const handleFiltersChange = (newFilters) => {
		filters = newFilters;
	};

	onMount(async () => {
		const categoriesResponse = await getData(`items/categories`);
		categories = await categoriesResponse.data;

		const articlesResponses = await getData(
			`items/articles?fields[]=categories.categories_id,status,title,sub_title,cover,content,id`
		);
		const articlesData = await articlesResponses.data;
		articles = articlesData.map(
			({ id, title, sub_title, content, cover, categories }) => ({
				id,
				title,
				subTitle: sub_title,
				content,
				cover,
				categories: categories
					? categories.map(({ categories_id }) => categories_id)
					: [],
			})
		);
	});
</script>

<style>
	ul {
		display: flex;
		flex-direction: column;
		padding: 0;
	}

	li {
		background: var(--common-dark);
		border-radius: 1em;
		height: 50vw;
		margin-bottom: 2em;
		background-size: cover;
		cursor: pointer;
		list-style-type: none;
	}

	:global(.filters) {
		position: fixed;
	}
</style>

<svelte:head>
	<title>Political Blog | Medias</title>
</svelte:head>

<MultiplesFiltersList
	class="filters"
	filters={categories}
	onFiltersChange={(filters) => handleFiltersChange(filters)} />

<ul>
	{#each filters.length > 0 ? articles.filter(({ categories }) => new Set([
						...categories,
						...filters,
					]).size !== filters.length + categories.length) : articles as { id, title, subTitle, cover } (id)}
		<li
			on:click={() => handleArticleClick(id)}
			style="background-image: url('url'); background-image: var(--gradient-bw-opacity-low), url('url')">
			<ArticleCardLink {title} {subTitle} {cover} to={`actions/${id}`} />
		</li>
	{/each}
</ul>
