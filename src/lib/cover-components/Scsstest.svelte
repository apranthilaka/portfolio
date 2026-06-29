<script>
    let count = $state(0);

    // 1. Define reactive states using runes
    let currentTime = $state('');
    let isWarningVisible = $state(true);
    let isWarningFaded = $state(false);

    // 2. Clock Effect: Updates every second
    $effect(() => {
        const updateTime = () => {
            currentTime = new Date().toLocaleString('en-US', {
                timeZone: 'Asia/Colombo',
                year: 'numeric',
                month: 'short',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
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

<!-- info  -->
<div
    class="flex flex-col justify-center items-center aspect-square rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] group bg-white p-10"
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
        <div class="rainbow-border animate-rainbow-spin w-30 mb-2.5">
            <img class="rounded-full border-white" src="/profile.jpg" alt="" />
        </div>
        <!-- <div
            class="px-5 py-3 bg-red-50 border border-red-500 w-full rounded-md text-center text-red-600 text-xs font-semibold"
        >
            This portfolio is under construction!
        </div> -->

        <div class="text-gray-700 text-lg">
            After a few years focusing on Product Design (UI/UX), I’m back to my
            engineering roots. With the help of AI, I now bridge the gap between
            design and code. I take care of the final 10%—that critical stage
            where interfaces often lose their polish. I partner with dev teams
            to ensure the final product is a 1:1, pixel-perfect match of the

            <a
                target="_blank"
                class="text-black font-medium underline hover:text-gray-700 transition-colors"
                href="https://apranthilaka.com/"
                >Figma widgits and pages
            </a>
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

    <!-- date  -->
    <div class="flex-1 flex flex-col items-start justify-end min-h-auto w-full">
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
    <div class="name">
        <div class="name__name">Aravinda Prabath</div>
    </div>
</div>

<!-- info  -->

<style>
    .name {
        color: #0f172a;
        &:hover {
            color: #1e293b;
        }

        &__name {
            font-size: 1.5rem;
            font-weight: 600;
        }
    }
</style>
