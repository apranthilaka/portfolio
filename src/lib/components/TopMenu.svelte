<script>
    import ThemeToggle from './ThemeToggle.svelte';
</script>

<div
    class="top-menu border-b border-gray-200 flex justify-start items-center px-6 h-14 text-sm"
>
    top menu
    <!-- <nav class="p-4 flex justify-end">
        <ThemeToggle />
    </nav> -->
</div>

<style>
    .top-menu {
        grid-column: 2/3;
        grid-row: 1/2;
    }
</style>
