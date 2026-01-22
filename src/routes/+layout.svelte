<script lang="ts">
    import '../app.css';
    import favicon from '$lib/assets/favicon.svg';

    let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="main-wrapper border h-screen w-screen">
    <div class="top-menu border flex justify-start items-center px-6">
        Top menu
    </div>
    <div class="left-menu border">Left menu</div>
    <div class="border">
        {@render children()}
    </div>
</div>

<style>
    .main-wrapper {
        display: grid;
        grid-template-columns: 250px 1fr;
        grid-template-rows: 56px 1fr;
    }
    .top-menu {
        grid-column: 2/3;
        grid-row: 1/2;
    }
    .left-menu {
        grid-column: 1/2;
        grid-row: 1/3;
    }
</style>
