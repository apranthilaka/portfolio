<script>
    // In Svelte 5, we get data from the $props rune
    let { data } = $props();

    // We can make the books reactive using the $state rune
    // let bookList = $state(data.books);
</script>

<div class="p-6 text-sm font-medium">Cards</div>

<!-- {#each data.books as book}
        <div class="border">
            <div>
                {book.title}
            </div>
            <div>
                {book.author}
            </div>
            <div>
                <small
                    >Added: {new Date(
                        book.created_at,
                    ).toLocaleDateString()}</small
                >
            </div>
        </div>
    {/each} -->

<div class="card-container-1 px-6 gap-6">
    <div>
        <a
            href="#"
            class="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6"
        >
            <div class="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
                <div class="sm:order-last sm:shrink-0">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                        class="size-16 rounded-full object-cover sm:size-18"
                    />
                </div>

                <div class="mt-4 sm:mt-0">
                    <h3 class="text-lg font-medium text-pretty text-gray-900">
                        How I built my first website with Nuxt, Tailwind CSS and
                        Vercel
                    </h3>

                    <p class="mt-1 text-sm text-gray-700">By John Doe</p>

                    <p
                        class="mt-4 line-clamp-2 text-sm text-pretty text-gray-700"
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. At velit illum provident a, ipsa maiores deleniti
                        consectetur nobis et eaque.
                    </p>
                </div>
            </div>

            <dl class="mt-6 flex gap-4 lg:gap-6">
                <div class="flex items-center gap-2">
                    <dt class="text-gray-700">
                        <span class="sr-only"> Published on </span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-5"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                            ></path>
                        </svg>
                    </dt>

                    <dd class="text-xs text-gray-700">31/06/2025</dd>
                </div>

                <div class="flex items-center gap-2">
                    <dt class="text-gray-700">
                        <span class="sr-only"> Reading time </span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-5"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                            ></path>
                        </svg>
                    </dt>

                    <dd class="text-xs text-gray-700">12 minutes</dd>
                </div>
            </dl>
        </a>
    </div>

    <div>
        <a href="#" class="block rounded-lg p-4 shadow-xs shadow-indigo-100">
            <img
                alt=""
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                class="h-56 w-full rounded-md object-cover"
            />

            <div class="mt-2">
                <dl>
                    <div>
                        <dt class="sr-only">Price</dt>

                        <dd class="text-sm text-gray-500">$240,000</dd>
                    </div>

                    <div>
                        <dt class="sr-only">Address</dt>

                        <dd class="font-medium">
                            123 Wallaby Avenue, Park Road
                        </dd>
                    </div>
                </dl>

                <div class="mt-6 flex items-center gap-8 text-xs">
                    <div
                        class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2"
                    >
                        <svg
                            class="size-4 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                            ></path>
                        </svg>

                        <div class="mt-1.5 sm:mt-0">
                            <p class="text-gray-500">Parking</p>

                            <p class="font-medium">2 spaces</p>
                        </div>
                    </div>

                    <div
                        class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2"
                    >
                        <svg
                            class="size-4 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            ></path>
                        </svg>

                        <div class="mt-1.5 sm:mt-0">
                            <p class="text-gray-500">Bathroom</p>

                            <p class="font-medium">2 rooms</p>
                        </div>
                    </div>

                    <div
                        class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2"
                    >
                        <svg
                            class="size-4 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            ></path>
                        </svg>

                        <div class="mt-1.5 sm:mt-0">
                            <p class="text-gray-500">Bedroom</p>

                            <p class="font-medium">4 rooms</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
    <div>
        <article class="rounded-xl border-2 border-gray-100 bg-white">
            <div class="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                <a href="#" class="block shrink-0">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                        class="size-14 rounded-lg object-cover"
                    />
                </a>

                <div>
                    <h3 class="font-medium sm:text-lg">
                        <a href="#" class="hover:underline">
                            Question about Rendering
                        </a>
                    </h3>

                    <p class="line-clamp-2 text-sm text-gray-700">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Accusamus, accusantium temporibus iure delectus ut
                        totam natus nesciunt ex? Ducimus, enim.
                    </p>

                    <div class="mt-2 sm:flex sm:items-center sm:gap-2">
                        <div class="flex items-center gap-1 text-gray-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="size-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                ></path>
                            </svg>

                            <p class="text-xs">14 comments</p>
                        </div>

                        <span class="hidden sm:block" aria-hidden="true">·</span
                        >

                        <p class="hidden sm:block sm:text-xs sm:text-gray-500">
                            Posted by
                            <a
                                href="#"
                                class="font-medium underline hover:text-gray-700"
                            >
                                John
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex justify-end">
                <strong
                    class="-me-0.5 -mb-0.5 inline-flex items-center gap-1 rounded-ss-xl rounded-ee-xl bg-green-600 px-3 py-1.5 text-white"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        ></path>
                    </svg>

                    <span class="text-[10px] font-medium sm:text-xs"
                        >Solved!</span
                    >
                </strong>
            </div>
        </article>
    </div>
    <div>
        <a href="#" class="block">
            <img
                alt=""
                src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                class="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                Lorem, ipsum dolor.
            </h3>

            <p class="mt-2 max-w-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
                reiciendis sequi ipsam incidunt.
            </p>
        </a>
    </div>

    <div>
        <a
            href="#"
            class="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6"
        >
            <div class="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
                <div class="sm:order-last sm:shrink-0">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                        class="size-16 rounded-full object-cover sm:size-18"
                    />
                </div>

                <div class="mt-4 sm:mt-0">
                    <h3 class="text-lg font-medium text-pretty text-gray-900">
                        How I built my first website with Nuxt, Tailwind CSS and
                        Vercel
                    </h3>

                    <p class="mt-1 text-sm text-gray-700">By John Doe</p>

                    <p
                        class="mt-4 line-clamp-2 text-sm text-pretty text-gray-700"
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. At velit illum provident a, ipsa maiores deleniti
                        consectetur nobis et eaque.
                    </p>
                </div>
            </div>

            <dl class="mt-6 flex gap-4 lg:gap-6">
                <div class="flex items-center gap-2">
                    <dt class="text-gray-700">
                        <span class="sr-only"> Published on </span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-5"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                            ></path>
                        </svg>
                    </dt>

                    <dd class="text-xs text-gray-700">31/06/2025</dd>
                </div>

                <div class="flex items-center gap-2">
                    <dt class="text-gray-700">
                        <span class="sr-only"> Reading time </span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-5"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                            ></path>
                        </svg>
                    </dt>

                    <dd class="text-xs text-gray-700">12 minutes</dd>
                </div>
            </dl>
        </a>
    </div>

    <div>
        <a href="#" class="block rounded-lg p-4 shadow-xs shadow-indigo-100">
            <img
                alt=""
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                class="h-56 w-full rounded-md object-cover"
            />

            <div class="mt-2">
                <dl>
                    <div>
                        <dt class="sr-only">Price</dt>

                        <dd class="text-sm text-gray-500">$240,000</dd>
                    </div>

                    <div>
                        <dt class="sr-only">Address</dt>

                        <dd class="font-medium">
                            123 Wallaby Avenue, Park Road
                        </dd>
                    </div>
                </dl>

                <div class="mt-6 flex items-center gap-8 text-xs">
                    <div
                        class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2"
                    >
                        <svg
                            class="size-4 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                            ></path>
                        </svg>

                        <div class="mt-1.5 sm:mt-0">
                            <p class="text-gray-500">Parking</p>

                            <p class="font-medium">2 spaces</p>
                        </div>
                    </div>

                    <div
                        class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2"
                    >
                        <svg
                            class="size-4 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            ></path>
                        </svg>

                        <div class="mt-1.5 sm:mt-0">
                            <p class="text-gray-500">Bathroom</p>

                            <p class="font-medium">2 rooms</p>
                        </div>
                    </div>

                    <div
                        class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2"
                    >
                        <svg
                            class="size-4 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            ></path>
                        </svg>

                        <div class="mt-1.5 sm:mt-0">
                            <p class="text-gray-500">Bedroom</p>

                            <p class="font-medium">4 rooms</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
    <div>
        <article class="rounded-xl border-2 border-gray-100 bg-white">
            <div class="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                <a href="#" class="block shrink-0">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                        class="size-14 rounded-lg object-cover"
                    />
                </a>

                <div>
                    <h3 class="font-medium sm:text-lg">
                        <a href="#" class="hover:underline">
                            Question about Rendering
                        </a>
                    </h3>

                    <p class="line-clamp-2 text-sm text-gray-700">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Accusamus, accusantium temporibus iure delectus ut
                        totam natus nesciunt ex? Ducimus, enim.
                    </p>

                    <div class="mt-2 sm:flex sm:items-center sm:gap-2">
                        <div class="flex items-center gap-1 text-gray-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="size-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                ></path>
                            </svg>

                            <p class="text-xs">14 comments</p>
                        </div>

                        <span class="hidden sm:block" aria-hidden="true">·</span
                        >

                        <p class="hidden sm:block sm:text-xs sm:text-gray-500">
                            Posted by
                            <a
                                href="#"
                                class="font-medium underline hover:text-gray-700"
                            >
                                John
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex justify-end">
                <strong
                    class="-me-0.5 -mb-0.5 inline-flex items-center gap-1 rounded-ss-xl rounded-ee-xl bg-green-600 px-3 py-1.5 text-white"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        ></path>
                    </svg>

                    <span class="text-[10px] font-medium sm:text-xs"
                        >Solved!</span
                    >
                </strong>
            </div>
        </article>
    </div>
    <div>
        <a href="#" class="block">
            <img
                alt=""
                src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                class="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                Lorem, ipsum dolor.
            </h3>

            <p class="mt-2 max-w-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
                reiciendis sequi ipsam incidunt.
            </p>
        </a>
    </div>

    <div>
        <a
            href="#"
            class="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6"
        >
            <div class="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
                <div class="sm:order-last sm:shrink-0">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                        class="size-16 rounded-full object-cover sm:size-18"
                    />
                </div>

                <div class="mt-4 sm:mt-0">
                    <h3 class="text-lg font-medium text-pretty text-gray-900">
                        How I built my first website with Nuxt, Tailwind CSS and
                        Vercel
                    </h3>

                    <p class="mt-1 text-sm text-gray-700">By John Doe</p>

                    <p
                        class="mt-4 line-clamp-2 text-sm text-pretty text-gray-700"
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. At velit illum provident a, ipsa maiores deleniti
                        consectetur nobis et eaque.
                    </p>
                </div>
            </div>

            <dl class="mt-6 flex gap-4 lg:gap-6">
                <div class="flex items-center gap-2">
                    <dt class="text-gray-700">
                        <span class="sr-only"> Published on </span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-5"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                            ></path>
                        </svg>
                    </dt>

                    <dd class="text-xs text-gray-700">31/06/2025</dd>
                </div>

                <div class="flex items-center gap-2">
                    <dt class="text-gray-700">
                        <span class="sr-only"> Reading time </span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-5"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                            ></path>
                        </svg>
                    </dt>

                    <dd class="text-xs text-gray-700">12 minutes</dd>
                </div>
            </dl>
        </a>
    </div>

    <div>
        <a href="#" class="block rounded-lg p-4 shadow-xs shadow-indigo-100">
            <img
                alt=""
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                class="h-56 w-full rounded-md object-cover"
            />

            <div class="mt-2">
                <dl>
                    <div>
                        <dt class="sr-only">Price</dt>

                        <dd class="text-sm text-gray-500">$240,000</dd>
                    </div>

                    <div>
                        <dt class="sr-only">Address</dt>

                        <dd class="font-medium">
                            123 Wallaby Avenue, Park Road
                        </dd>
                    </div>
                </dl>

                <div class="mt-6 flex items-center gap-8 text-xs">
                    <div
                        class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2"
                    >
                        <svg
                            class="size-4 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                            ></path>
                        </svg>

                        <div class="mt-1.5 sm:mt-0">
                            <p class="text-gray-500">Parking</p>

                            <p class="font-medium">2 spaces</p>
                        </div>
                    </div>

                    <div
                        class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2"
                    >
                        <svg
                            class="size-4 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            ></path>
                        </svg>

                        <div class="mt-1.5 sm:mt-0">
                            <p class="text-gray-500">Bathroom</p>

                            <p class="font-medium">2 rooms</p>
                        </div>
                    </div>

                    <div
                        class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2"
                    >
                        <svg
                            class="size-4 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            ></path>
                        </svg>

                        <div class="mt-1.5 sm:mt-0">
                            <p class="text-gray-500">Bedroom</p>

                            <p class="font-medium">4 rooms</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
    <div>
        <article class="rounded-xl border-2 border-gray-100 bg-white">
            <div class="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                <a href="#" class="block shrink-0">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                        class="size-14 rounded-lg object-cover"
                    />
                </a>

                <div>
                    <h3 class="font-medium sm:text-lg">
                        <a href="#" class="hover:underline">
                            Question about Rendering
                        </a>
                    </h3>

                    <p class="line-clamp-2 text-sm text-gray-700">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Accusamus, accusantium temporibus iure delectus ut
                        totam natus nesciunt ex? Ducimus, enim.
                    </p>

                    <div class="mt-2 sm:flex sm:items-center sm:gap-2">
                        <div class="flex items-center gap-1 text-gray-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="size-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                ></path>
                            </svg>

                            <p class="text-xs">14 comments</p>
                        </div>

                        <span class="hidden sm:block" aria-hidden="true">·</span
                        >

                        <p class="hidden sm:block sm:text-xs sm:text-gray-500">
                            Posted by
                            <a
                                href="#"
                                class="font-medium underline hover:text-gray-700"
                            >
                                John
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex justify-end">
                <strong
                    class="-me-0.5 -mb-0.5 inline-flex items-center gap-1 rounded-ss-xl rounded-ee-xl bg-green-600 px-3 py-1.5 text-white"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        ></path>
                    </svg>

                    <span class="text-[10px] font-medium sm:text-xs"
                        >Solved!</span
                    >
                </strong>
            </div>
        </article>
    </div>
    <div>
        <a href="#" class="block">
            <img
                alt=""
                src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                class="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                Lorem, ipsum dolor.
            </h3>

            <p class="mt-2 max-w-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
                reiciendis sequi ipsam incidunt.
            </p>
        </a>
    </div>

    <div>
        <a
            href="#"
            class="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6"
        >
            <div class="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
                <div class="sm:order-last sm:shrink-0">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                        class="size-16 rounded-full object-cover sm:size-18"
                    />
                </div>

                <div class="mt-4 sm:mt-0">
                    <h3 class="text-lg font-medium text-pretty text-gray-900">
                        How I built my first website with Nuxt, Tailwind CSS and
                        Vercel
                    </h3>

                    <p class="mt-1 text-sm text-gray-700">By John Doe</p>

                    <p
                        class="mt-4 line-clamp-2 text-sm text-pretty text-gray-700"
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. At velit illum provident a, ipsa maiores deleniti
                        consectetur nobis et eaque.
                    </p>
                </div>
            </div>

            <dl class="mt-6 flex gap-4 lg:gap-6">
                <div class="flex items-center gap-2">
                    <dt class="text-gray-700">
                        <span class="sr-only"> Published on </span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-5"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                            ></path>
                        </svg>
                    </dt>

                    <dd class="text-xs text-gray-700">31/06/2025</dd>
                </div>

                <div class="flex items-center gap-2">
                    <dt class="text-gray-700">
                        <span class="sr-only"> Reading time </span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-5"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                            ></path>
                        </svg>
                    </dt>

                    <dd class="text-xs text-gray-700">12 minutes</dd>
                </div>
            </dl>
        </a>
    </div>

    <div>
        <a href="#" class="block rounded-lg p-4 shadow-xs shadow-indigo-100">
            <img
                alt=""
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                class="h-56 w-full rounded-md object-cover"
            />

            <div class="mt-2">
                <dl>
                    <div>
                        <dt class="sr-only">Price</dt>

                        <dd class="text-sm text-gray-500">$240,000</dd>
                    </div>

                    <div>
                        <dt class="sr-only">Address</dt>

                        <dd class="font-medium">
                            123 Wallaby Avenue, Park Road
                        </dd>
                    </div>
                </dl>

                <div class="mt-6 flex items-center gap-8 text-xs">
                    <div
                        class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2"
                    >
                        <svg
                            class="size-4 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                            ></path>
                        </svg>

                        <div class="mt-1.5 sm:mt-0">
                            <p class="text-gray-500">Parking</p>

                            <p class="font-medium">2 spaces</p>
                        </div>
                    </div>

                    <div
                        class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2"
                    >
                        <svg
                            class="size-4 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            ></path>
                        </svg>

                        <div class="mt-1.5 sm:mt-0">
                            <p class="text-gray-500">Bathroom</p>

                            <p class="font-medium">2 rooms</p>
                        </div>
                    </div>

                    <div
                        class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2"
                    >
                        <svg
                            class="size-4 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            ></path>
                        </svg>

                        <div class="mt-1.5 sm:mt-0">
                            <p class="text-gray-500">Bedroom</p>

                            <p class="font-medium">4 rooms</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
    <div>
        <article class="rounded-xl border-2 border-gray-100 bg-white">
            <div class="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                <a href="#" class="block shrink-0">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                        class="size-14 rounded-lg object-cover"
                    />
                </a>

                <div>
                    <h3 class="font-medium sm:text-lg">
                        <a href="#" class="hover:underline">
                            Question about Rendering
                        </a>
                    </h3>

                    <p class="line-clamp-2 text-sm text-gray-700">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Accusamus, accusantium temporibus iure delectus ut
                        totam natus nesciunt ex? Ducimus, enim.
                    </p>

                    <div class="mt-2 sm:flex sm:items-center sm:gap-2">
                        <div class="flex items-center gap-1 text-gray-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="size-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                ></path>
                            </svg>

                            <p class="text-xs">14 comments</p>
                        </div>

                        <span class="hidden sm:block" aria-hidden="true">·</span
                        >

                        <p class="hidden sm:block sm:text-xs sm:text-gray-500">
                            Posted by
                            <a
                                href="#"
                                class="font-medium underline hover:text-gray-700"
                            >
                                John
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex justify-end">
                <strong
                    class="-me-0.5 -mb-0.5 inline-flex items-center gap-1 rounded-ss-xl rounded-ee-xl bg-green-600 px-3 py-1.5 text-white"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        ></path>
                    </svg>

                    <span class="text-[10px] font-medium sm:text-xs"
                        >Solved!</span
                    >
                </strong>
            </div>
        </article>
    </div>
    <div>
        <a href="#" class="block">
            <img
                alt=""
                src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                class="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                Lorem, ipsum dolor.
            </h3>

            <p class="mt-2 max-w-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
                reiciendis sequi ipsam incidunt.
            </p>
        </a>
    </div>
</div>

<style>
    .card-container-1 {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
    }
</style>
