<script lang="ts">
    let { children } = $props();
</script>

<div class="main-wrapper h-screen w-screen">
    <div>
        {@render children()}
    </div>
</div>
