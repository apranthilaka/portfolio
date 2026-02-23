<script>
    import { page } from '$app/state';
    let figmaDesigns = [
        { path: '/figma/figmadatadisplay', name: 'Data Display' },
        { path: '/figma/figmaformandinputs', name: 'Form & Input' },
    ];

    let dataDisplay = [
        // { path: '/cards', name: 'Cards' },
        { path: '/datadisplay/contentcards', name: 'Content cards' },
        { path: '/datadisplay/minimalcards', name: 'Minimal cards' },
        // { path: '/datadisplay/productcards', name: 'Product cards' },
        // { path: '/datadisplay/userprofilecards', name: 'Profile cards' },
        // { path: '/datadisplay/dashboardcards', name: 'Dashboard cards' },
    ];

    let formAndInputs = [
        // { path: '/cards', name: 'Cards' },
        { path: '/formandinputs/applogin', name: 'App Login' },
        { path: '/formandinputs/usercreation', name: 'User creation' },
    ];
    let branding = [
        // { path: '/cards', name: 'Cards' },
        { path: '/branding/product', name: 'Product' },
        { path: '/branding/people', name: 'People' },
        { path: '/branding/services', name: 'Services' },
    ];

    let dataVisualisation = [
        // { path: '/cards', name: 'Cards' },
        { path: '/datavisualisation/dvtypeone', name: 'DV type 1' },
        { path: '/datavisualisation/dvtypetwo', name: 'DV type 2' },
        { path: '/datavisualisation/dvtypethree', name: 'DV type 3' },
    ];

    let designSystems = [
        { path: '/designsystems/dsone', name: 'Design System Alpha' },
        { path: '/designsystems/dstwo', name: 'Design System Bravo' },
    ];
</script>

<div class="left-menu border-r border-gray-200 w-[230px] flex flex-col">
    <div
        class=" px-6 border-b border-gray-200 min-h-14 flex items-center justify-between"
    >
        <a
            href="/"
            class="text-gray-950 font-medium mr-3 text-sm flex flex-row justify-start items-center w-full"
        >
            <div class=" w-7 h-auto mr-1">
                <img
                    class="w-full h-full object-cover"
                    src="/logo.png"
                    alt="Logo"
                />
            </div>
            <div>/ APR Designs</div>
        </a>
    </div>
    <div class=" overflow-y-auto modern-scrollbar">
        <!-- Figma Designs  -->
        <div class="px-3 h-9 text-xs text-gray-400 flex items-center">
            Figma - Primary Designs
        </div>
        <ul class="px-2">
            {#each figmaDesigns as menu}
                <li>
                    <a
                        class={[
                            ' text-gray-500 rounded-sm w-full px-4 h-9 flex items-center hover:bg-gray-50  hover:border border-gray-200  transition-all delay-75  text-sm mb-[2px] ',
                            {
                                'bg-gray-100 text-gray-950':
                                    page.url.pathname + page.url.search ===
                                    menu.path,
                            },
                        ]}
                        href={menu.path}>{menu.name}</a
                    >
                </li>
            {/each}
        </ul>
        <!-- Form inputs  -->

        <!-- Data display  -->
        <div class="px-3 h-9 text-xs text-gray-400 flex items-center mt-4">
            HTML - Data Display
        </div>
        <ul class="px-2">
            {#each dataDisplay as menuItem}
                <li>
                    <a
                        class={[
                            ' text-gray-500 rounded-sm w-full px-4 h-9 flex items-center hover:bg-gray-100    transition-all delay-75  text-sm mb-[2px] ',
                            {
                                'bg-gray-100 text-gray-950  dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 ':
                                    page.url.pathname === menuItem.path,
                            },
                        ]}
                        href={menuItem.path}>{menuItem.name}</a
                    >
                </li>
            {/each}
        </ul>
        <!-- Data display  -->

        <!-- Form inputs  -->
        <div class="px-3 h-9 text-xs text-gray-400 flex items-center mt-4">
            HTML - Forms and Inputs
        </div>
        <ul class="px-2">
            {#each formAndInputs as menuItem}
                <li>
                    <a
                        class={[
                            ' text-gray-500 rounded-sm w-full px-4 h-9 flex items-center hover:bg-gray-50  hover:border border-gray-200  transition-all delay-75  text-sm mb-[2px] ',
                            {
                                'bg-gray-100 text-gray-950':
                                    page.url.pathname === menuItem.path,
                            },
                        ]}
                        href={menuItem.path}>{menuItem.name}</a
                    >
                </li>
            {/each}
        </ul>
        <!-- Form inputs  -->

        <!-- branding  -->
        <!-- <div class="px-3 h-9 text-xs text-gray-400 flex items-center mt-4">
            Branding
        </div>
        <ul class="px-2">
            {#each branding as menuItem}
                <li>
                    <a
                        class={[
                            ' text-gray-500 rounded-sm w-full px-4 h-9 flex items-center hover:bg-gray-50  hover:border border-gray-200  transition-all delay-75  text-sm mb-[2px] ',
                            {
                                'bg-gray-100 text-gray-950 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 ':
                                    page.url.pathname === menuItem.path,
                            },
                        ]}
                        href={menuItem.path}>{menuItem.name}</a
                    >
                </li>
            {/each}
        </ul> -->
        <!-- branding  -->

        <!-- Data visualisation  -->
        <!-- <div class="px-3 h-9 text-xs text-gray-400 flex items-center mt-4">
            Data visualisation
        </div>
        <ul class="px-2">
            {#each dataVisualisation as menuItem}
                <li>
                    <a
                        class={[
                            ' text-gray-500 rounded-sm w-full px-4 h-9 flex items-center hover:bg-gray-50  hover:border border-gray-200  transition-all delay-75  text-sm mb-[2px] ',
                            {
                                'bg-gray-100 text-gray-950 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 ':
                                    page.url.pathname === menuItem.path,
                            },
                        ]}
                        href={menuItem.path}>{menuItem.name}</a
                    >
                </li>
            {/each}
        </ul> -->
        <!-- Data visualisation   -->

        <!-- Design systems  -->
        <!-- <div class="px-3 h-9 text-xs text-gray-400 flex items-center mt-4">
            Design Systems
        </div>
        <ul class="px-2">
            {#each designSystems as menuItem}
                <li>
                    <a
                        class={[
                            ' text-gray-500 rounded-sm w-full px-4 h-9 flex items-center hover:bg-gray-50  hover:border border-gray-200  transition-all delay-75  text-sm mb-[2px] ',
                            {
                                'bg-gray-100 text-gray-950':
                                    page.url.pathname === menuItem.path,
                            },
                        ]}
                        href={menuItem.path}>{menuItem.name}</a
                    >
                </li>
            {/each}
        </ul> -->
        <!-- Designs systems  -->
    </div>
</div>

<style>
    .left-menu {
        grid-column: 1/2;
        grid-row: 1/3;
    }

    .modern-scrollbar {
        scrollbar-width: thin;
        scrollbar-color: #d1d5db transparent; /* thumb | track */
    }

    /* 2. Webkit approach (Chrome, Safari, Edge) */
    .modern-scrollbar::-webkit-scrollbar {
        width: 6px; /* Vertical width */
        height: 6px; /* Horizontal height */
    }

    .modern-scrollbar::-webkit-scrollbar-track {
        background: transparent; /* Makes the track invisible */
    }

    .modern-scrollbar::-webkit-scrollbar-thumb {
        background-color: #d1d5db; /* Light gray */
        border-radius: 10px; /* Round edges */
        border: 1px solid transparent; /* Acts as padding if track had color */
    }

    /* Hover effect */
    .modern-scrollbar::-webkit-scrollbar-thumb:hover {
        background-color: #9ca3af; /* Slightly darker gray */
    }
</style>
