<script lang="ts">
	export let segment: string;
</script>

<style>
	nav {
		border-top: 1px solid var(--primary-main);
		padding: 0 1em;
		position: fixed;
		bottom: 0;
		background: var(--primary-light);
		width: 100%;
		box-sizing: border-box;
	}

	ul {
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: space-around;
		list-style-type: none;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
		color: var(--primary-main);
	}

	a {
		text-transform: capitalize;
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
		font-weight: 200;
	}
</style>

<nav>
	<ul>
		<li>
			<a
				rel="prefetch"
				aria-current={segment === 'actions' ? 'page' : undefined}
				href="actions">actions</a>
		</li>
		<li>
			<a
				rel="prefetch"
				aria-current={segment === undefined ? 'page' : undefined}
				href=".">medias</a>
		</li>
		<li>
			<a
				rel="prefetch"
				aria-current={segment === 'agenda' ? 'page' : undefined}
				href="agenda">agenda</a>
		</li>
	</ul>
</nav>
