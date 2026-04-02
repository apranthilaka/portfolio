<script>
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

<div
    class="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(500px,1fr))] h-fit p-4 gap-4 box-border bg-neutral-100"
>
    <!-- info  -->
    <div
        class="aspect-square flex items-center justify-center col-span-1 row-span-1 sm:col-span-2 sm:row-span-2 md:col-span-2 md:row-span-2 lg:col-span-1 lg:row-span-1 border-black p-4 modern-scrollbar overflow-y-auto"
    >
        <div class="flex flex-col text-sm text-gray-700 w-full h-full">
            <!-- intor  -->
            <div class="mb-6 w-full flex flex-col items-start gap-3">
                <div class="mb-6 w-full flex flex-col items-start gap-3">
                    {#if isWarningVisible}
                        <div
                            id="size-warning"
                            class="block 2xl:hidden bg-red-500 text-white px-3 py-5 text-center w-full transition-opacity duration-1000 text-sm rounded-md {isWarningFaded
                                ? 'opacity-0'
                                : 'opacity-100'}"
                        >
                            Please switch to a larger display for the best
                            experience.
                        </div>
                    {/if}
                </div>

                <div
                    class="rainbow-border animate-rainbow-spin rounded-full w-22"
                >
                    <img
                        class="rounded-full border-white"
                        src="/profile.jpg"
                        alt=""
                    />
                </div>

                <div class="text-2xl md:text-3xl font-bold text-gray-900">
                    Discover. Design. Deliver
                </div>
                <!-- date  -->
                <div
                    class="flex-1 flex flex-col items-start justify-end min-h-auto w-full"
                >
                    <div class="w-full flex justify-start gap-2 items-center">
                        <div
                            class="text-normal text-gray-800"
                            id="srilankaTime"
                        >
                            {currentTime}
                        </div>

                        <div
                            class="text-gray-500 flex gap-1 justify-center items-center"
                        >
                            <i class="ph-fill ph-circle text-green-600 text-xs"
                            ></i>
                            <div class="mb-0.5">Available</div>
                        </div>
                    </div>
                </div>
                <!-- date  -->

                <div class="text-gray-900 text-normal md:text-lg">
                    I’m Aravinda, a product designer located in Sri Lanka.
                    Partnering with companies to create digital interfaces that
                    play a crucial role in realising their objectives for future
                    success.
                </div>

                <!-- <div>
                    Hey, I’m Aravinda! 👋 I’m a product designer based in sunny
                    Sri Lanka. For over 15 years, I’ve been crafting products
                    that solve real problems—from scaling complex SaaS and ERP
                    systems to launching day-one ideas for startups. This is my
                    little corner of the web for all things design. Take a look
                    around at my latest work, visual experiments, and a few
                    product ideas I'm currently tinkering with.
                </div> -->
                <!-- instructions  -->
                <div class="text-sm">
                    Best viewed on 2K or larger displays. While fully
                    responsive, smaller screens may hide certain design details
                    and layout elements.
                </div>
                <!-- instructions  -->
            </div>
            <!-- intor  -->

            <!-- contact  -->
            <div
                class="w-full mb-6 rounded-lg grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] box-border h-fit gap-2"
            >
                <a
                    href="mailto:apranthilaka@outlook.com"
                    class="flex justify-center items-center text-sm border h-10 w-full rounded-sm border-gray-500"
                >
                    Send Email
                </a>
                <a
                    target="_blank"
                    href="https://t.me/apranthilaka"
                    class="flex justify-center items-center text-sm border h-10 w-full rounded-sm border-gray-500"
                >
                    Telegram
                </a>

                <a
                    target="_blank"
                    href="https://wa.me/94777499801"
                    class="flex justify-center items-center text-sm border h-10 w-full rounded-sm border-gray-500"
                >
                    Whatsapp
                </a>

                <a
                    href="https://dribbble.com/aravinda"
                    class="flex justify-center items-center text-sm border h-10 w-full rounded-sm border-gray-500"
                >
                    Dribbble
                </a>

                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/aravindaprabath/"
                    class="flex justify-center items-center text-sm border h-10 w-full rounded-sm border-gray-500"
                >
                    <div>Linkedin</div>
                </a>

                <a
                    target="_blank"
                    href="https://x.com/apranthilaka"
                    class="flex justify-center items-center text-sm border h-10 w-full rounded-sm border-gray-500"
                >
                    X (Twitter)
                </a>
            </div>
            <!-- contact  -->
        </div>
    </div>
    <!-- info  -->

    <!-- project 01  -->
    <a
        href="https://www.figma.com/proto/DzRSIl93px9xqQg95BTTMM/001---2026---Vectra---UK?node-id=3696-1796&p=f&viewport=520%2C225%2C0.24&t=yPvfobxqiYpvnHpb-8&scaling=contain&content-scaling=responsive&starting-point-node-id=3696%3A1796&page-id=0%3A1&hide-ui=1"
        target="_blank"
        rel="noopener"
        class="block aspect-square shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
    >
        <img
            src="/project-covers/001 - 2026 - Vectra - UK.png"
            loading="lazy"
            decoding="async"
            alt="Fecta Project Preview"
            class="w-full h-full object-cover"
        />
    </a>
    <!-- project 01  -->

    <!-- project 02  -->
    <a
        href="https://www.figma.com/proto/cBenFsHT0NCeQxjs3eneMH/002---2026---Crest-Analytics?node-id=1-463&p=f&viewport=25%2C521%2C0.24&t=lVTRMTtXd5SR2Yl2-8&scaling=contain&content-scaling=responsive&starting-point-node-id=1%3A463&page-id=0%3A1&hide-ui=1"
        target="_blank"
        rel="noopener"
        class="block aspect-square shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
    >
        <img
            src="/project-covers/002 - 2026 - Crest Analytics.png"
            loading="lazy"
            decoding="async"
            alt="Fecta Project Preview"
            class="w-full h-full object-cover"
        />
    </a>
    <!-- project 02  -->

    <!-- project 03  -->
    <a
        href="https://www.figma.com/proto/QgADtZlvYTpiqw3344Ii1P/003---2026---Kinetix?node-id=1-301&p=f&viewport=25%2C390%2C0.5&t=5WHfjzYqO0tsu9bH-8&scaling=contain&content-scaling=responsive&starting-point-node-id=1%3A301&page-id=0%3A1&hide-ui=1"
        target="_blank"
        rel="noopener"
        class="block aspect-square shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
    >
        <img
            src="/project-covers/003 - 2026 - Kinetix.png"
            loading="lazy"
            decoding="async"
            alt="Fecta Project Preview"
            class="w-full h-full object-cover"
        />
    </a>
    <!-- project 03  -->

    <!-- project 04  -->
    <a
        href="https://www.figma.com/proto/T43AORXB22cDsJSkTzI0Fv/004---2026---Veridian-Labs?node-id=1-287&viewport=639%2C436%2C0.26&t=jqpBaRuXcEyNvLgy-8&scaling=contain&content-scaling=responsive&starting-point-node-id=1%3A287&page-id=0%3A1&hide-ui=1"
        target="_blank"
        rel="noopener"
        class="block aspect-square shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
    >
        <img
            src="/project-covers/004 - 2026 - Veridian Labs.png"
            loading="lazy"
            decoding="async"
            alt="Fecta Project Preview"
            class="w-full h-full object-cover"
        />
    </a>
    <!-- project 04  -->

    <!-- project 05  -->
    <a
        href="https://www.figma.com/proto/w1Uoy2HgqfEFRgrKkzgwFe/005---Design-5---Draft?node-id=10-64&viewport=686%2C375%2C0.38&t=mix1sNTuKa8u5nNI-8&scaling=contain&content-scaling=responsive&starting-point-node-id=10%3A64&page-id=0%3A1&hide-ui=1"
        target="_blank"
        rel="noopener"
        class="block aspect-square shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
    >
        <img
            src="/project-covers/005 - Design 5 - Draft.png"
            loading="lazy"
            decoding="async"
            alt="Fecta Project Preview"
            class="w-full h-full object-cover"
        />
    </a>

    <!-- project 05  -->

    <!-- project 06  -->
    <a
        href="https://www.figma.com/proto/RDZVHyLoPYa7mpYL5IW5ZT/006---Design-7---Draft?node-id=1-86&p=f&viewport=492%2C373%2C0.21&t=AeAPL2UaXzIbk2AF-8&scaling=contain&content-scaling=responsive&starting-point-node-id=1%3A86&page-id=0%3A1&hide-ui=1"
        target="_blank"
        rel="noopener"
        class="block aspect-square shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
    >
        <img
            src="/project-covers/006 - Design 7 - Draft.png"
            loading="lazy"
            decoding="async"
            alt="Fecta Project Preview"
            class="w-full h-full object-cover"
        />
    </a>
    <!-- project 06  -->

    <!-- project 07  -->
    <a
        href="https://www.figma.com/proto/rBQxE9Rrb0i3FDIwyPXYX6/007---Design-7---Draft?node-id=6-421&p=f&viewport=610%2C439%2C0.17&t=t6sjWk12R65kRJAz-8&scaling=contain&content-scaling=responsive&starting-point-node-id=6%3A421&page-id=0%3A1&hide-ui=1"
        target="_blank"
        rel="noopener"
        class="block aspect-square shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
    >
        <img
            src="/project-covers/007 - Design 7 - Draft.png"
            loading="lazy"
            decoding="async"
            alt="Fecta Project Preview"
            class="w-full h-full object-cover"
        />
    </a>
    <!-- project 07  -->

    <!-- project 08  -->
    <div
        class="group relative aspect-square flex items-center justify-center gap-4 flex-col rounded-lg border-2 border-gray-500 border-dashed"
    >
        <div class="p-6 flex items-center justify-center flex-col gap-3">
            <div
                class="text-lg md:text-2xl font-semibold md:font-bold text-gray-900 text-center"
            >
                Add your project here
            </div>
        </div>
        <!-- contact  -->
        <div
            class="w-full mb-6 rounded-lg grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] box-border h-fit gap-2 p-5"
        >
            <a
                href="mailto:apranthilaka@outlook.com"
                class="flex justify-center items-center text-sm border h-10 w-full rounded-sm border-gray-500 col-span-2"
            >
                Send Email
            </a>

            <a
                target="_blank"
                href="https://t.me/apranthilaka"
                class="flex justify-center items-center text-sm border h-10 w-full rounded-sm border-gray-500"
            >
                Telegram
            </a>

            <a
                target="_blank"
                href="https://wa.me/94777499801"
                class="flex justify-center items-center text-sm border h-10 w-full rounded-sm border-gray-500"
            >
                Whatsapp
            </a>
        </div>
        <!-- contact  -->
    </div>
    <!-- project 08  -->
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

    /* 1. Define the custom property so CSS can animate the degree */
    @property --angle {
        syntax: '<angle>';
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
        /* Apply the animation here */
        animation: rainbow-spin 3s linear infinite;
    }
</style>
