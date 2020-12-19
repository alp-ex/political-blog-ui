<script>
    import Portal from "svelte-portal/src/Portal.svelte";

    export let filters, onFiltersChange;

    let y;

    $: selectedFilters = {};

    const handleFilterClick = (id) => {
        selectedFilters[id] = !selectedFilters[id];

        onFiltersChange(
            Object.keys(selectedFilters).filter(
                (filterId) => selectedFilters[filterId]
            )
        );
    };
</script>

<style>
    ul {
        display: flex;
        justify-content: space-around;
        background: white;
        width: 100%;
        padding: 1em;
        box-sizing: border-box;
        margin: 0;
        height: 5em;
    }

    li {
        color: var(--primary-main);

        font-size: 1em;
        font-weight: 200;
        padding: 0.5em;

        cursor: pointer;
        list-style-type: none;
        text-transform: capitalize;
    }

    .filter-selected {
        background-color: var(--primary-light);

        border-radius: 0.5em;
    }
</style>

<svelte:window bind:scrollY={y} />

<Portal target="#filters-bar">
    <ul class={$$props.class} style="opacity: {0 + Math.max(0, y / 40)}" hidden>
        {#each filters as { id, name } (id)}
            <li
                class={selectedFilters[id] ? 'filter-selected' : ''}
                on:click={handleFilterClick(id)}>
                {name}
            </li>
        {/each}
    </ul>
</Portal>
