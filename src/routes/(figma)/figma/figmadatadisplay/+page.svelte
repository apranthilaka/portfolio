<script>
    import { page } from '$app/state';

    // This stays as is if you plan to use URL params later
    let activeTab = $derived(page.url.searchParams.get('tab') || 'home');

    let at = $state('content'); // Default to first tab
    let atclass = $state(false);

    function handleTabClick(tabname, isActive) {
        at = tabname; // Tracks which tab content to show
        atclass = isActive; // Controls the background color state
    }
</script>

<div class="flex flex-row items-end px-6 h-14 shrink-0 bg-white">
    <button
        class={[
            ' px-6 h-9 flex justify-center items-center hover:cursor-pointer text-sm rounded-tl-md rounded-tr-md  transition-all duration-200 border-b-0',
            at === 'content' ? 'bg-gray-100 ' : 'bg-white',
        ]}
        onclick={() => handleTabClick('content', true)}
    >
        Content Heavy
    </button>

    <button
        class={[
            ' px-6 h-9 flex justify-center items-center hover:cursor-pointer text-sm rounded-tl-md rounded-tr-md  -ml-px transition-all duration-200 border-b-0',
            at === 'minimal'
                ? 'bg-gray-100 border-b border-gray-100'
                : 'bg-white',
        ]}
        onclick={() => handleTabClick('minimal', true)}
    >
        Minimal
    </button>
</div>

{#if at === 'content'}
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
{:else if at === 'minimal'}
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
{/if}
