<script>
    import ProjectOne from '$lib/cover-components/ProjectOne.svelte';
    import ProjectThree from '$lib/cover-components/ProjectThree.svelte';
    import ProjectTwo from '$lib/cover-components/ProjectTwo.svelte';
    import ProjectFour from '$lib/cover-components/ProjectFour.svelte';
    import IntroBlock from '$lib/cover-components/IntroBlock.svelte';
    import Scsstest from '$lib/cover-components/Scsstest.svelte';

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

<!-- project grid  -->
<div
    class="h-full w-full xl:overflow-y-auto modern-scrollbar bg-gray-200 max-w-[2560px] m-auto"
>
    <div
        class="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(500px,1fr))] h-fit gap-4 box-border p-5 w-full grid-rows-auto"
    >
        <!-- project 01  -->
        <IntroBlock />
        <!-- project 01  -->

        <!-- project 01  -->
        <ProjectOne />
        <!-- project 01  -->

        <!-- project 01  -->
        <ProjectOne />
        <!-- project 01  -->

        <!-- project 01  -->
        <ProjectOne />
        <!-- project 01  -->
        <!-- project 02  -->
        <ProjectTwo />
        <!-- project 02  -->

        <!-- project 01  -->
        <ProjectOne />
        <!-- project 01  -->

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

        <!-- project 02  -->
        <ProjectTwo />
        <!-- project 02  -->

        <!-- project 01  -->
        <ProjectOne />
        <!-- project 01  -->

        <!-- project 02  -->
        <ProjectTwo />
        <!-- project 02  -->

        <Scsstest />
    </div>
</div>

<!-- project grid  -->

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
    }
</style>
