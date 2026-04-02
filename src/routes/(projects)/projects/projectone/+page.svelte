<!-- sm:w-160 md:w-3xl lg:w-400 -->
<script>
    let iframeLoaded = true;
</script>

<div class="flex flex-raw modern-scrollbar overflow-y-auto">
    <button
        class="absolute left-47.5 top-3.25 z-1000 border border-gray-200 hover:border-gray-300 h-8 px-4 flex items-center justify-center rounded-full text-sm text-gray-800 hover:bg-gray-100 transition-all duration-300 hover:cursor-pointer"
        on:click={() => (iframeLoaded = !iframeLoaded)}
    >
        {iframeLoaded ? 'Hide Project Info' : 'Show Project Info'}
    </button>
    <!-- project info  -->
    {#if iframeLoaded}
        <div class=" w-88.75 overflow-hidden shrink-0 p-6 shadow-xl z-999">
            <div
                class="text-xl font-semibold text-gray-950 mb-4 text-align-left w-full"
            >
                Revamping the onboarding journey for a visually immersive and
                engaging experience
            </div>
            <div
                class="text-sm text-align-left w-full max-w-4xl text-gray-600 mb-6"
            >
                Talent Scout is an AI-powered recruitment platform that helps
                companies find and hire top talent quickly and efficiently by
                leveraging AI to streamline candidate sourcing, evaluation and
                decision-making. My focus as a Product Designer was to craft a
                seamless onboarding experience tailored for hiring teams.
            </div>
            <div>
                <p class="text-sm">
                    Optimal experience, use a <span
                        class="font-semibold text-black">2K resolution</span
                    > display or above.
                </p>
                <!-- <p class="mt-4 text-sm">
                    Press <kbd
                        class="px-2 py-1 font-semibold bg-gray-100 border rounded text-sm"
                        >Z</kbd
                    >
                    to toggle viewport scaling.
                </p> -->
                <p class="mt-4 text-sm">
                    Full-screen mode is recommended for this design.
                </p>
            </div>
        </div>
    {:else}
        <div></div>
    {/if}
    <!-- project info  -->

    <div class="w-full h-full bg-gray-100 relative">
        <div
            class=" absolute left-0 top-0 w-full h-full flex items-center justify-center text-gray-900"
        >
            Loading...
        </div>

        <!-- <iframe
            title="iframe"
            class="h-[calc(100vh-58px)] w-full p-0 m-0 relative"
            style="border: none"
            width="100%"
            height="100%"
            src="https://embed.figma.com/proto/DzRSIl93px9xqQg95BTTMM/P1--Talent-Scout?page-id=0%3A1&node-id=1-287&p=f&viewport=391%2C205%2C0.37&scaling=responsive&content-scaling=fixed&embed-host=share&hide-ui=1"
            allowfullscreen
        ></iframe> -->

        <!-- <iframe
            title="iframe"
            class="h-[calc(100vh-58px)] w-full p-0 m-0 relative"
            style="border: none"
            width="100%"
            height="100%"
            src="https://embed.figma.com/proto/DzRSIl93px9xqQg95BTTMM/P1--Talent-Scout?node-id=1-463&viewport=689%2C-159%2C0.43&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&embed-host=share"
            allowfullscreen
        ></iframe> -->

        <iframe
            title="iframe"
            class="h-[calc(100vh-58px)] w-full p-0 m-0 relative"
            style="border: none"
            width="100%"
            height="100%"
            src="https://embed.figma.com/proto/DzRSIl93px9xqQg95BTTMM/P1--Talent-Scout?node-id=1-463&viewport=689%2C-159%2C0.43&scaling=contain&content-scaling=responsive&page-id=0%3A1&embed-host=share"
            allowfullscreen
        ></iframe>
    </div>
</div>

<style>
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
