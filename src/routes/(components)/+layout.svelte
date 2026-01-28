<script lang="ts">
    import LeftMenu from '$lib/components/LeftMenu.svelte';
    import TopMenu from '$lib/components/TopMenu.svelte';
    let { children } = $props();
</script>

<div class="main-wrapper h-screen w-screen">
    <TopMenu />
    <LeftMenu />
    <div class="content-area">
        {@render children()}
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
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        padding-bottom: 24px;
    }
</style>
