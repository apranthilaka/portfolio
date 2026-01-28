<script>
    import { fade } from 'svelte/transition';
</script>

<div class="left-menu border-r border-gray-300 h-full">
    <div
        class=" px-6 border-b border-gray-300 h-14 flex items-center justify-between"
    >
        <span class="text-gray-950 font-medium mr-3"> Logo</span> Icon
    </div>
    <ul>
        <li class="px-6 h-10 flex justify-start items-center">
            <a href="/components">Card Components</a>
        </li>
        <li class="px-6 h-10 flex justify-start items-center">
            <a href="/components/forms?title=happy">Forms</a>
        </li>
    </ul>
</div>

<style>
    .left-menu {
        grid-column: 1/2;
        grid-row: 1/3;
    }
</style>
