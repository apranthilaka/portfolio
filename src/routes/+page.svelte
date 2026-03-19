<script>
    let projects = [
        {
            name: 'Talent Scout',
            description:
                'Revamping the onboarding journey for a visually immersive and engaging experience.',
            isActive: true,
            url: 'projectone',
        },

        {
            name: 'Equity Nexus',
            description:
                'Designing a robust cap table manager for a deeply secure and clear investor portal.',
            isActive: false,
        },

        {
            name: 'Logix Stream',
            description:
                'Revamping inventory control systems for a highly powerful and fast logistics flow.',
            isActive: false,
        },

        {
            name: 'Profit Pulse',
            description:
                'Crafting a dynamic revenue dashboard for a purely intuitive and bold fiscal review.',
            isActive: false,
        },

        {
            name: 'Profit Pulse',
            description:
                'Ideating a smart industrial IoT module for a highly detailed and clear data visual.',
            isActive: false,
        },

        {
            name: 'Client Relay',
            description:
                'Structuring a high-growth CRM platform for a truly immersive and engaging service.',
            isActive: false,
        },

        {
            name: 'Ledger Light',
            description:
                'Refining a complex accounting interface for a really clean and smart audit trail.',
            isActive: false,
        },

        {
            name: 'Talent Forge',
            description:
                'Building a modern human capital portal for a vastly rhythmic and fluid HR journey.',
            isActive: false,
        },
    ];
</script>

<!-- style="background-image: url('/bg.png');" bg-cover bg-center -->
<div class="w-full h-screen">
    <div class="flex flex-col w-full sm:w-160 md:w-3xl lg:w-360 mx-auto p-6">
        <!-- header  -->
        <div
            class="  text-gray-800 max-w-[1440px] h-[400px] overflow-hidden shrink-0 w-full mx-auto mt-[56px] pt-20"
        >
            <div class="font-semibold text-6xl mb-8 max-w-250">
                Discover. Design. Deliver
                <!-- Design & develop things that look great and scale even better. -->
            </div>

            <div class="font-normal text-2xl mb-5 max-w-250">
                Hey, I’m Aravinda! 👋 I’m a product designer based in sunny Sri
                Lanka.
                <br /> <br />
                For over 15 years, I’ve been crafting products that solve real problems—from
                scaling complex SaaS and ERP systems to launching day-one ideas for
                startups. This is my little corner of the web for all things design.
                Take a look around at my latest work, visual experiments, and a few
                product ideas I'm currently tinkering with.
            </div>
        </div>
        <!-- header  -->
        <div class="card-container mt-6">
            {#each projects as project}
                <div
                    class="group relative flex flex-col border border-gray-300 h-48 rounded-lg overflow-hidden transition-all justify-center items-center {project.isActive
                        ? 'border border-green-500 hover:bg-green-50'
                        : ''}"
                >
                    <a
                        href={project.isActive
                            ? `./projects/${project.url}`
                            : '#'}
                        class="flex flex-col transition-opacity p-12
             {project.isActive ? '' : 'group-hover:opacity-0'}"
                    >
                        <span class="text-lg font-semibold w-full"
                            >{project.name}</span
                        >
                        <span class="text-sm w-full text-gray-600"
                            >{project.description}</span
                        >
                    </a>

                    {#if !project.isActive}
                        <div
                            class="absolute inset-0 hidden group-hover:flex items-center justify-center bg-gray-100/90 text-gray-500 font-medium italic cursor-not-allowed"
                        >
                            Work In Progress...
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
    .card-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        grid-template-rows: auto;
        gap: 24px;
    }
</style>
