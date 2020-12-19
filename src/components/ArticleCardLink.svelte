<script lang="typescript">
    export let title, subTitle, to;
</script>

<style>
    a {
        text-decoration: none;
    }

    article {
        color: var(--common-white);
        padding: 0.5em 1em;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
</style>

<a href={to}>
    <article>
        <h3>{title}</h3>

        {#if subTitle}
            <h4>{subTitle}</h4>
        {/if}
    </article>
</a>
