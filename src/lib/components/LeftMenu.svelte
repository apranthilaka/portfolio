<script>
    import { page } from '$app/state';
    let menuPaths = [
        { path: '/components', name: 'components' },
        { path: '/components/forms', name: 'forms' },
        { path: '/components/designsystem', name: 'design system' },
    ];
    console.log(page.url.pathname);
</script>

<div class="left-menu border-r border-gray-200 h-full">
    <div
        class=" px-6 border-b border-gray-200 h-14 flex items-center justify-between"
    >
        <span class="text-gray-950 font-medium mr-3 text-sm">
            <a href="/">Home</a>
        </span>
        <div>
            <i class="ph ph-x"></i>
        </div>
    </div>

    <ul>
        {#each menuPaths as menu}
            <li>
                <a
                    class={[
                        'w-full px-6 h-10 flex items-center hover:bg-gray-100 transition-all delay-75 text-gray-800 border-b border-gray-200 text-sm',
                        {
                            'bg-gray-100': page.url.pathname === menu.path,
                        },
                    ]}
                    href={menu.path}>{menu.name}</a
                >
            </li>
        {/each}
    </ul>
</div>

<style>
    .left-menu {
        grid-column: 1/2;
        grid-row: 1/3;
    }
</style>
