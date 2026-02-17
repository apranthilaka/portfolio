<script>
    let { title = 'Top Menu Title' } = $props();
</script>

<div
    class="top-menu border-b border-gray-200 flex justify-start items-center px-6 h-14 text-sm"
>
    {title}
</div>

<style>
    .top-menu {
        grid-column: 2/3;
        grid-row: 1/2;
    }
</style>
