<script>
    import { ChevronRight } from '@lucide/svelte';
</script>

<!-- The main flex container handles alignment for everything inside it -->
<div class="flex flex-row justify-between">
    <div class="p-4 h-full mb-0 flex flex-row items-center gap-1">
        <span class="mr-1 text-neutral-500">Home</span>
        <ChevronRight size={14} strokeWidth={2} class="text-neutral-500" />

        <span class="font-semibold text-neutral-950">Dashboard</span>
    </div>
    <div class="p-4 h-full mb-0 flex flex-row items-center gap-1">
        <div>User</div>
        <div></div>
    </div>
</div>
