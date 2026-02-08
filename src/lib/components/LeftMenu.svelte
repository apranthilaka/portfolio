<script>
    import { page } from '$app/state';
    let componentMenuPaths = [
        // { path: '/cards', name: 'Cards' },
        { path: '/cards/cardsa', name: 'Data Display' },
        { path: '/cards/cardsb', name: 'Branding' },
        // { path: '/cards/cardsc', name: 'Cards 3' },
    ];

    let designSystemMenuPaths = [
        // { path: '/forms', name: 'Forms' },
        { path: '/forms/formsa', name: 'Forms & Input' },
        // { path: '/forms/formsb', name: 'Forms 2' },
    ];

    let figmaDesignPaths = [
        // { path: '/figma', name: 'figma system' },
        { path: '/figma/figmacards', name: 'Figma Cards' },
        // { path: '/figma/figmaforms', name: 'Figma Forms' },
    ];
    console.log(page.url.pathname);
</script>

<div class="left-menu border-r border-gray-200 w-[230px]">
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
    <div class="px-3 h-9 text-xs text-gray-400 flex items-center">Branding</div>
    <ul class="px-2">
        {#each componentMenuPaths as menu}
            <li>
                <a
                    class={[
                        ' text-gray-500 rounded-sm w-full px-4 h-9 flex items-center hover:bg-gray-50  hover:border border-gray-200  transition-all delay-75  text-sm mb-[2px] ',
                        {
                            'bg-gray-100 text-gray-950 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 ':
                                page.url.pathname === menu.path,
                        },
                    ]}
                    href={menu.path}>{menu.name}</a
                >
            </li>
        {/each}
    </ul>
    <div class="px-3 h-9 text-xs text-gray-400 flex items-center">
        Data Display
    </div>
    <ul class="px-2">
        {#each componentMenuPaths as menu}
            <li>
                <a
                    class={[
                        ' text-gray-500 rounded-sm w-full px-4 h-9 flex items-center hover:bg-gray-50  hover:border border-gray-200  transition-all delay-75  text-sm mb-[2px] ',
                        {
                            'bg-gray-100 text-gray-950 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 ':
                                page.url.pathname === menu.path,
                        },
                    ]}
                    href={menu.path}>{menu.name}</a
                >
            </li>
        {/each}
    </ul>
    <div class="px-3 h-9 text-xs text-gray-400 flex items-center mt-4">
        Forms and Inputs
    </div>

    <ul class="px-2">
        {#each designSystemMenuPaths as menu}
            <li>
                <a
                    class={[
                        ' text-gray-500 rounded-sm w-full px-4 h-9 flex items-center hover:bg-gray-50  hover:border border-gray-200  transition-all delay-75  text-sm mb-[2px] ',
                        {
                            'bg-gray-100 text-gray-950':
                                page.url.pathname === menu.path,
                        },
                    ]}
                    href={menu.path}>{menu.name}</a
                >
            </li>
        {/each}
    </ul>

    <div class="px-3 h-9 text-xs text-gray-400 flex items-center mt-4">
        Figma Designs
    </div>

    <ul class="px-2">
        {#each figmaDesignPaths as menu}
            <li>
                <a
                    class={[
                        ' text-gray-500 rounded-sm w-full px-4 h-9 flex items-center hover:bg-gray-50  hover:border border-gray-200  transition-all delay-75  text-sm mb-[2px] ',
                        {
                            'bg-gray-100 text-gray-950':
                                page.url.pathname === menu.path,
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
