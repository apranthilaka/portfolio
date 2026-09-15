<script>
    import { ShieldAlert, Trash2 } from '@lucide/svelte';
</script>

<!-- The main flex container handles alignment for everything inside it -->
<div class="p-2 border h-full mb-0 flex flex-row items-center gap-1.5">
    <span>Home</span>
    <ShieldAlert size={16} strokeWidth={2.25} class="text-destructive" />
    <Trash2 size={16} strokeWidth={2.25} class="text-muted-foreground" />
    <span>Dashboard</span>
</div>
