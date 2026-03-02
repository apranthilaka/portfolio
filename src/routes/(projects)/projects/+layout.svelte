<script>
    import TopMenu from '$lib/components/TopMenu.svelte';
    import '../../../app.css';
    let { children } = $props();
</script>

<!-- <svelte:head><link rel="icon" href={favicon} /></svelte:head> -->
<div class="main-wrapper border">
    <TopMenu />

    <div class="content-area h-full modern-scrollbar overflow-y-auto">
        {@render children()}
    </div>
</div>

<style>
    .main-wrapper {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: 56px 1fr;
        height: 100vh;
    }

    .content-area {
        grid-column: 1/2;
        grid-row: 2/3;
        /* padding-bottom: 24px; */
        height: 100%;
    }

    .modern-scrollbar {
        scrollbar-width: thin;
        scrollbar-color: #d1d5db transparent; /* thumb | track */
    }

    /* 2. Webkit approach (Chrome, Safari, Edge) */
    .modern-scrollbar::-webkit-scrollbar {
        width: 6px; /* Vertical width */
        height: 6px; /* Horizontal height */
    }

    .modern-scrollbar::-webkit-scrollbar-track {
        background: transparent; /* Makes the track invisible */
    }

    .modern-scrollbar::-webkit-scrollbar-thumb {
        background-color: #d1d5db; /* Light gray */
        border-radius: 10px; /* Round edges */
        border: 1px solid transparent; /* Acts as padding if track had color */
    }

    /* Hover effect */
    .modern-scrollbar::-webkit-scrollbar-thumb:hover {
        background-color: #9ca3af; /* Slightly darker gray */
    }
</style>
