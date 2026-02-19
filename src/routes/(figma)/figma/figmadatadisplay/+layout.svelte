<script>
    import { page } from '$app/state';
    let { children } = $props();

    // Helper to check if a tab is active
    const isActive = (tab) => {
        const current = page.url.searchParams.get('tab') || 'content';
        return current === tab;
    };
</script>

<nav
    class="flex gap-2 border-b border-gray-200 h-14 shrink-0 items-center px-6 bg-white"
>
    <a
        href="?tab=content"
        class={[
            'flex justify-center items-center px-4 rounded-md transition-colors text-sm h-8',
            isActive('content')
                ? 'bg-gray-200 text-gray-950'
                : 'bg-gray-100 hover:bg-gray-200',
        ]}
    >
        Content
    </a>

    <a
        href="?tab=minimal"
        class={[
            'px-4 py-2 rounded-lg transition-colors text-sm',

            isActive('minimal')
                ? 'bg-gray-200 text-gray-950'
                : 'bg-gray-100 hover:bg-gray-200',
        ]}
    >
        Minimal
    </a>
</nav>

{@render children()}
