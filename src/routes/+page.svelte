<script>
    import ProjectOne from "$lib/cover-components/ProjectOne.svelte";
    import ProjectThree from "$lib/cover-components/ProjectThree.svelte";
    import ProjectTwo from "$lib/cover-components/ProjectTwo.svelte";
    import ProjectFour from "$lib/cover-components/ProjectFour.svelte";

    // 1. Define reactive states using runes
    let currentTime = $state("");
    let isWarningVisible = $state(true);
    let isWarningFaded = $state(false);

    // 2. Clock Effect: Updates every second
    $effect(() => {
        const updateTime = () => {
            currentTime = new Date().toLocaleString("en-US", {
                timeZone: "Asia/Colombo",
                year: "numeric",
                month: "short",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
            });
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    });

    // 3. Warning Effect: Triggers fade at 3s, removes at 4s
    $effect(() => {
        const timer = setTimeout(() => {
            isWarningFaded = true; // Starts the Tailwind 'opacity-0' transition

            // Wait for the 1000ms transition defined in your class to finish
            setTimeout(() => {
                isWarningVisible = false;
            }, 1000);
        }, 3000); // Your requested 3 second delay

        return () => clearTimeout(timer);
    });
</script>

<!-- full grid layout  -->
<div
    class="grid w-full h-screen grid-cols-1 xl:grid-cols-[370px_1fr] xl:overflow-hidden bg-white modern-scrollbar overflow-y-auto"
>
    <!-- info  -->
    <div
        class="flex flex-col p-8 text-sm text-gray-700 h-full w-full bg-size-[120%_50%] bg-no-repeat bg-top bg-[url('../assets/bg.png')] bg-none"
    >
        {#if isWarningVisible}
            <div
                id="size-warning"
                class="block 2xl:hidden bg-red-500 text-white px-3 py-5 text-center w-full transition-opacity duration-1000 text-sm rounded-md mb-5 {isWarningFaded
                    ? 'opacity-0'
                    : 'opacity-100'}"
            >
                Please switch to a larger display for the best experience.
            </div>
        {/if}

        <!-- intor  -->
        <div class="mb-6 w-full flex flex-col items-start gap-3">
            <div class="rainbow-border animate-rainbow-spin rounded-full w-22">
                <img
                    class="rounded-full border-white"
                    src="/profile.jpg"
                    alt=""
                />
            </div>
            <div
                class="px-5 py-3 bg-red-50 border border-red-500 w-full rounded-md text-center text-red-600 text-xs font-semibold"
            >
                This portfolio is under construction!
            </div>

            <div class="text-gray-700 text-sm">
                After a few years focusing on UI/UX, I’m back to my engineering
                roots. With the help of AI, I now bridge the gap between design
                and code. <br />I take care of the final 10%—that critical stage
                where interfaces often lose their polish. I partner with dev
                teams to ensure the final product is a 1:1, pixel-perfect match
                of the Figma design
                <!-- <a
                    target="_blank"
                    class="text-black font-medium"
                    href="https://apranthilaka.com/figma.html">Figma design</a
                > -->
                . I make sure what you see in Figma is exactly what the user gets.
            </div>
            <!-- instructions  -->
            <!-- <div class="text-sm text-gray-700 mt-2">
                Best viewed on 2K or larger displays. While fully responsive,
                smaller screens may hide certain design details and layout
                elements.
            </div> -->
            <!-- instructions  -->
        </div>
        <!-- intor  -->

        <!-- projects  -->
        <div class="mb-6 w-full">
            <!-- <div class="mb-2 text-gray-500 font-normal text-xs">
                        Latest Engagements
                    </div> -->
            <a
                target="_blank"
                class="flex justify-between items-center border-b border-gray-200 h-10 hover:cursor-not-allowed"
                href="*"
                onclick={(e) => e.preventDefault()}
            >
                <div class="text-black font-semibold group-hover:underline">
                    Vectra
                </div>
                <div class="text-gray-500">Product / WIP</div>
            </a>
            <a
                target="_blank"
                class="flex justify-between items-center border-b border-gray-200 h-10 hover:cursor-not-allowed"
                href="*"
                onclick={(e) => e.preventDefault()}
            >
                <div class="text-black font-semibold group-hover:underline">
                    Crest Analytics
                </div>
                <div class="text-gray-500">Product / WIP</div>
            </a>
            <a
                target="_blank"
                class="flex justify-between items-center border-b border-gray-200 h-10 hover:cursor-not-allowed"
                href="*"
                onclick={(e) => e.preventDefault()}
            >
                <div class="text-black font-semibold group-hover:underline">
                    Kinetix
                </div>
                <div class="text-gray-500">Product / WIP</div>
            </a>
            <a
                target="_blank"
                class="flex justify-between items-center border-b border-gray-200 h-10 hover:cursor-not-allowed"
                href="*"
                onclick={(e) => e.preventDefault()}
            >
                <div class="text-black font-semibold group-hover:underline">
                    Veridian Labs
                </div>
                <div class="text-gray-500">Product / Brainstorming</div>
            </a>
            <a
                target="_blank"
                class="flex justify-between items-center border-b border-gray-200 h-10 hover:cursor-not-allowed"
                href="*"
                onclick={(e) => e.preventDefault()}
            >
                <div class="text-black font-semibold group-hover:underline">
                    Aximo
                </div>
                <div class="text-gray-500">Product / Brainstorming</div>
            </a>
        </div>
        <!-- projects  -->

        <!-- date  -->
        <div
            class="flex-1 flex flex-col items-start justify-end min-h-auto w-full"
        >
            <div class="w-full flex justify-between items-center">
                <div class="w-full flex justify-start gap-2 items-center">
                    <div class="text-normal text-gray-800" id="srilankaTime">
                        {currentTime}
                    </div>

                    <!-- <div
                            class="text-gray-500 flex gap-1 justify-center items-center"
                        >
                            <i class="ph-fill ph-circle text-green-600 text-xs"
                            ></i>
                            <div class="mb-0.5">Available</div>
                        </div> -->
                </div>

                <div class="text-gray-500 flex gap-3">
                    <a
                        target="_blank"
                        href="https://x.com/apranthilaka"
                        aria-label="X (formerly Twitter)"
                        class="hover:text-black hover:scale-110 transition-all duration-200"
                    >
                        <i class="ph ph-x-logo text-[18px]"></i>
                    </a>

                    <a
                        target="_blank"
                        href="https://dribbble.com/aravinda"
                        aria-label="Dribbble"
                        class="hover:text-black hover:scale-110 transition-all duration-200"
                    >
                        <i class="ph ph-dribbble-logo text-[18px]"></i>
                    </a>

                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/aravindaprabath/"
                        aria-label="LinkedIn"
                        class="hover:text-black hover:scale-110 transition-all duration-200"
                    >
                        <i class="ph ph-linkedin-logo text-[18px]"></i>
                    </a>
                </div>
            </div>
        </div>
        <!-- date  -->
    </div>
    <!-- info  -->

    <!-- project grid  -->
    <div class="h-full w-full xl:overflow-y-auto modern-scrollbar bg-gray-200">
        <div
            class="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(500px,1fr))] h-fit gap-4 box-border p-5 w-full"
        >
            <!-- project 01  -->
            <ProjectOne />

            <!-- project 01  -->

            <!-- project 02  -->
            <ProjectTwo />
            <!-- project 02  -->
            <!-- project 03  -->
            <ProjectThree />

            <!-- project 03  -->
            
            <!-- project 04  -->
            <ProjectFour />
            <!-- project 04  -->

            <!-- project 02  -->
            <ProjectTwo />
            <!-- project 02  -->
            <!-- project 01  -->
            <ProjectOne />

            <!-- project 01  -->

            <!-- project 02  -->
            <ProjectTwo />
            <!-- project 02  -->

            <!-- project 02  -->
            <ProjectTwo />
            <!-- project 02  -->
            <!-- project 01  -->
            <ProjectOne />

            <!-- project 01  -->

            <!-- project 02  -->
            <ProjectTwo />
            <!-- project 02  -->
            <!-- project 01  -->
            <ProjectOne />

            <!-- project 01  -->

            <!-- project 02  -->
            <ProjectTwo />
            <!-- project 02  -->
        </div>
    </div>
    <!-- project grid  -->
</div>

<!-- full grid layout  -->

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

    /* 1. Define the custom property so CSS can animate the degree */
    @property --angle {
        syntax: "<angle>";
        initial-value: 0deg;
        inherits: false;
    }

    /* 2. Create the keyframes to rotate from 0 to 360 */
    @keyframes rainbow-spin {
        from {
            --angle: 0deg;
        }
        to {
            --angle: 360deg;
        }
    }

    /* 3. Update your class to use the animation */
    .rainbow-border {
        background:
            padding-box linear-gradient(white, white),
            border-box
                conic-gradient(
                    from var(--angle),
                    #0d99ff,
                    #874fff,
                    #ff3737,
                    #ff7237,
                    #24cb71,
                    #0d99ff
                );
        border: 5px solid transparent;
    }
</style>
