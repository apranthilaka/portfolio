<!-- style="background-image: url('/bg.png');" -->
<div class="w-full h-screen bg-cover bg-center">
    <div
        class="flex flex-col h-screen w-full sm:w-160 md:w-3xl lg:w-360 mx-auto mb-6 pt-30"
    >
        <!-- <div
            class="mb-8 border border-red-200 rounded-md w-full px-4 py-4 text-sm bg-red-50 text-red-500 text-center flex items-center justify-start"
        >
            I'm currently polishing up my 2026 updates! Some components and
            designs are still behind the scenes, but the full collection will be
            live soon.
        </div> -->

        <div class=" text-gray-800 mb-4">
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
        <div class="card-container mt-10">
            <a
                class="flex flex-col justify-start items-start bg-white hover:bg-blue-50 hover:border-gray-500 hover:cursor-pointer rounded-2xl transition-all duration-300 p-6 w-full h-full max-w-1/2 px-12 border border-gray-300 hover:shadow-lg"
                href="./projects/projectone"
            >
                <div class="w-full mb-3">
                    <img src="/p1logo.png" alt="" />
                </div>
                <span class="text-4xl font-semibold w-full mt-3 mb-2"
                    >Talent Scout</span
                >
                <span class="text-xl w-full text-gray-600"
                    >Revamping the onboarding journey for a visually immersive
                    and engaging experience.</span
                >
            </a>

            <!-- <a href="./projects/projectone">Project 1 </a>
            <a href="./projects/projectone">Project 1 </a>
            <a href="./projects/projectone">Project 1 </a>
            <a href="./projects/projectone">Project 1 </a> -->
        </div>
    </div>
</div>

<style>
    .card-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
        grid-template-rows: auto;
        gap: 24px;

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 300px;
            border: 1px solid #e5e7eb;
        }
    }
</style>
