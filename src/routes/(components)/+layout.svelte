<script lang="ts">
    import LeftMenu from '$lib/components/LeftMenu.svelte';
    let { children } = $props();
</script>

<div class="main-wrapper h-screen w-screen">
    <div
        class="top-menu border-b border-gray-300 flex justify-start items-center px-6 h-14"
    >
        Top menu
    </div>

    <LeftMenu />

    <div class="content-area border">
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

    .content-area {
        grid-column: 2/3;
        grid-row: 2/3;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        padding-bottom: 24px;
    }
</style>
