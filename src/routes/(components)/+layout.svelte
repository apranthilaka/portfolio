<script lang="ts">
    import LeftMenu from '$lib/components/LeftMenu.svelte';
    import TopMenu from '$lib/components/TopMenu.svelte';
    import { fade } from 'svelte/transition';
    import { page } from '$app/state'; // Import the page state

    let { children } = $props();
</script>

<div class="main-wrapper h-screen w-screen">
    <TopMenu />
    <LeftMenu />

    <div class="content-area">
        {#key page.url.pathname}
            <div in:fade={{ duration: 300 }}>
                {@render children()}
            </div>
        {/key}
    </div>
</div>

<style>
    .main-wrapper {
        display: grid;
        grid-template-columns: 250px 1fr;
        grid-template-rows: 56px 1fr;
    }

    .content-area {
        grid-column: 2/3;
        grid-row: 2/3;
        display: grid; /* Changed to grid for easier positioning */
        overflow-y: auto;
        padding-bottom: 24px;
    }

    /* This ensures the child takes up the full space of the content-area */
    .content-area > div {
        grid-area: 1 / 1;
        display: flex;
        flex-direction: column;
    }
</style>
