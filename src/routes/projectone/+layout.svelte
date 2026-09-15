<script>
    import P1LeftMenu from '$lib/components/project-one/P1-left-menu.svelte';
    import P1Logo from '$lib/components/project-one/P1-logo.svelte';
    import P1TopMenu from '$lib/components/project-one/P1-top-menu.svelte';

    let { children } = $props();
</script>

<div
    class="grid grid-cols-[250px_1fr] grid-rows-[40px_1fr] w-full h-screen text-sm text-neutral-700"
>
    <!-- Placed in Top Left (Col 1 to 2, Row 1 to 2) -->
    <div class="col-start-1 col-end-2 row-start-1 row-end-2 text-white">
        <P1Logo />
    </div>

    <!-- Placed in Bottom Left (Col 1 to 2, Row 2 to 3) -->
    <div class="col-start-1 col-end-2 row-start-2 row-end-3">
        <P1LeftMenu />
    </div>

    <!-- Placed in Top Right (Col 2 to 3, Row 1 to 2) -->
    <div
        class="col-start-2 col-end-3 row-start-1 row-end-2 text-black border border-b-neutral-200"
    >
        <P1TopMenu />
    </div>

    <!-- Even though this is LAST in the HTML, we force it to the Top Left slot! -->
    <!-- Placed in Bottom Right (Col 2 to 3, Row 2 to 3) -->
    <div class="col-start-2 col-end-3 row-start-2 row-end-3">
        <!-- Cntent Area  -->
        {@render children()}
    </div>
</div>
