<script>
    import { page } from '$app/state';

    // Svelte 5 reactive derivation
    let activeTab = $derived(page.url.searchParams.get('tab') || 'home');
</script>

{#if activeTab === 'content'}
    <div class="w-full h-full flex justify-center items-center relative">
        <div class="font-medium text-gray-800">Loading...</div>
        <div class="absolute left-0 top-0 self-center w-full h-full">
            <iframe
                style="border: 1px solid #F3F4F6"
                width="100%"
                height="100%"
                src="https://embed.figma.com/proto/DzRSIl93px9xqQg95BTTMM/01.-Data-Display?page-id=0%3A1&node-id=15-2208&p=f&viewport=557%2C503%2C0.15&scaling=min-zoom&content-scaling=responsive&starting-point-node-id=15%3A2208&embed-host=share "
                allowfullscreen
            ></iframe>
        </div>
    </div>
{:else if activeTab === 'minimal'}
    <div class="w-full h-full flex justify-center items-center relative">
        <div class="font-medium text-gray-800">Loading...</div>
        <div class="absolute left-0 top-0 self-center w-full h-full">
            <iframe
                style="border: 1px solid #F3F4F6;"
                width="100%"
                height="100%"
                src="https://embed.figma.com/proto/7MkNlAZanQfnGlLJ3rjp15/02.-Forms-and-Inputs?page-id=0%3A1&node-id=31-1106&p=f&viewport=340%2C1394%2C0.15&scaling=min-zoom&content-scaling=responsive&starting-point-node-id=31%3A1106&embed-host=share"
                allowfullscreen
            ></iframe>
        </div>
    </div>
{/if}
