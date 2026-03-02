<div
    class="w-full min-h-screen bg-cover bg-center"
    style="background-image: url('/bg.png');"
>
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
            <div class="font-semibold text-6xl mb-8">
                Discover. Design. Deliver
                <!-- Design & develop things that look great and scale even better. -->
            </div>

            <div class="font-normal text-2xl mb-5">
                Hey, I’m Aravinda! 👋
                <br />
                I’m a product designer based in sunny Sri Lanka. For the last 10
                years, I’ve been busy building things that people actually use, from
                complex SaaS and ERP systems to helping startups launch their very
                first ideas. This site is my little corner of the internet for all
                things design. I’m usually right here sharing my latest visual experiments
                and product rants. <br /> <br />
                Feel free to reach out: [LinkedIn] • [Twitter]
                <!-- I build design systems and interfaces in Figma, specifically structured for a seamless
                transition to code. By translating them into SvelteKit, I
                deliver high-performance, browser-native prototypes that capture
                the true look, feel, and interactivity of the final product. -->
            </div>

            <!-- <span class="font-normal text-2xl mb-5">
                The proof is in the build: this entire portfolio is a live
                demonstration of my stack, developed with <span
                    class="font-medium">SvelteKit</span
                >, hosted on <span class="font-medium">Cloudflare</span>, and
                powered by <span class="font-medium">Supabase</span>.
            </span> -->
        </div>
        <div class="card-container mt-10">
            <a href="./projects/projectone">Project 1 </a>
            <a href="./projects/projectone">Project 1 </a>
            <a href="./projects/projectone">Project 1 </a>
            <a href="./projects/projectone">Project 1 </a>
            <a href="./projects/projectone">Project 1 </a>
        </div>
    </div>
</div>

<style>
    .card-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
        grid-template-rows: auto;

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 300px;
            border: 1px solid #e5e7eb;
        }
    }
</style>
