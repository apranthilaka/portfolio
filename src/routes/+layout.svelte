<script>
    import '../app.css';
    let { children } = $props();
    import favicon from '$lib/assets/favicon.svg';
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<!-- all the pages tender through this -->
{@render children()}
