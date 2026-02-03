<script>
    import { theme } from '$lib/theme.svelte.js';
</script>

<button
    onclick={() => theme.toggle()}
    class="p-2 border rounded-md bg-gray-100 dark:bg-gray-800"
>
    {#if theme.current === 'light'}
        🌙 Switch to Dark
    {:else}
        ☀️ Switch to Light
    {/if}
</button>
