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
    <!-- card one  -->
    <div
        class="border border-gray-200 rounded-lg h-auto overflow-hidden shadow-sm hover:shadow-md"
    >
        <div class="border-b border-gray-200 text-sm p-4 font-medium">
            Branch Locations
        </div>
        <div class="flex flex-row border-b border-gray-200 p-4">
            <div class="flex flex-col w-full">
                <div class="text-sm">Green Valley Bank</div>
                <div class="text-sm text-gray-500">
                    1234 Financial Way, Prosperity, TX 75001
                </div>
            </div>
            <div class="flex flex-row gap-4 items-center w-auto min-w-87.5">
                <label for="Headline" class="w-full">
                    <select
                        name="Headline"
                        id="Headline"
                        class="mt-0.5 w-full rounded border-gray-300 sm:text-sm"
                    >
                        <option value="">Please select</option>
                        <option value="JM">John Mayer</option>
                        <option value="SRV">Stevie Ray Vaughn</option>
                        <option value="JH">Jimi Hendrix</option>
                        <option value="BBK">B.B King</option>
                        <option value="AK">Albert King</option>
                        <option value="BG">Buddy Guy</option>
                        <option value="EC">Eric Clapton</option>
                    </select>
                </label>
                <label for="Headline" class="w-full">
                    <select
                        name="Headline"
                        id="Headline"
                        class="mt-0.5 w-full rounded border-gray-300 sm:text-sm"
                    >
                        <option value="">Please select</option>
                        <option value="JM">John Mayer</option>
                        <option value="SRV">Stevie Ray Vaughn</option>
                        <option value="JH">Jimi Hendrix</option>
                        <option value="BBK">B.B King</option>
                        <option value="AK">Albert King</option>
                        <option value="BG">Buddy Guy</option>
                        <option value="EC">Eric Clapton</option>
                    </select>
                </label>
            </div>
        </div>

        <div class="h-70 w-full">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2180.4554436905387!2d79.84082817138253!3d6.931318265338344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1769703237632!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>

            <!-- <img
                src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="h-full w-full object-cover"
                alt="Description"
            /> -->
        </div>
    </div>
    <!-- card one  -->

    <!-- card two  -->
    <div
        class="border border-gray-200 rounded-lg h-auto overflow-hidden shadow-sm hover:shadow-md"
    >
        <div class="border-b border-gray-200 text-sm p-4 font-medium">
            Branch Locations
        </div>
        <div class="flex flex-row border-b border-gray-200 p-4">
            <div class="flex flex-col w-full">
                <div class="text-sm">Green Valley Bank</div>
                <div class="text-sm text-gray-500">
                    1234 Financial Way, Prosperity, TX 75001
                </div>
            </div>
            <div class="flex flex-row gap-4 items-center w-auto min-w-87.5">
                <label for="Headline" class="w-full">
                    <select
                        name="Headline"
                        id="Headline"
                        class="mt-0.5 w-full rounded border-gray-300 sm:text-sm"
                    >
                        <option value="">Please select</option>
                        <option value="JM">John Mayer</option>
                        <option value="SRV">Stevie Ray Vaughn</option>
                        <option value="JH">Jimi Hendrix</option>
                        <option value="BBK">B.B King</option>
                        <option value="AK">Albert King</option>
                        <option value="BG">Buddy Guy</option>
                        <option value="EC">Eric Clapton</option>
                    </select>
                </label>
                <label for="Headline" class="w-full">
                    <select
                        name="Headline"
                        id="Headline"
                        class="mt-0.5 w-full rounded border-gray-300 sm:text-sm"
                    >
                        <option value="">Please select</option>
                        <option value="JM">John Mayer</option>
                        <option value="SRV">Stevie Ray Vaughn</option>
                        <option value="JH">Jimi Hendrix</option>
                        <option value="BBK">B.B King</option>
                        <option value="AK">Albert King</option>
                        <option value="BG">Buddy Guy</option>
                        <option value="EC">Eric Clapton</option>
                    </select>
                </label>
            </div>
        </div>

        <div class="h-70 w-full">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1882.556596918432!2d-60.1427503784855!3d53.52434520539227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2slk!4v1769703496675!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>

            <!-- <img
                src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="h-full w-full object-cover"
                alt="Description"
            /> -->
        </div>
    </div>
    <!-- card two  -->

    <!-- card three  -->
    <div
        class="border border-gray-200 rounded-lg h-auto overflow-hidden shadow-sm hover:shadow-md"
    >
        <div class="border-b border-gray-200 text-sm p-4 font-medium">
            Branch Locations
        </div>
        <div class="flex flex-row border-b border-gray-200 p-4">
            <div class="flex flex-col w-full">
                <div class="text-sm">Green Valley Bank</div>
                <div class="text-sm text-gray-500">
                    1234 Financial Way, Prosperity, TX 75001
                </div>
            </div>
            <div class="flex flex-row gap-4 items-center w-auto min-w-87.5">
                <label for="Headline" class="w-full">
                    <select
                        name="Headline"
                        id="Headline"
                        class="mt-0.5 w-full rounded border-gray-300 sm:text-sm"
                    >
                        <option value="">Please select</option>
                        <option value="JM">John Mayer</option>
                        <option value="SRV">Stevie Ray Vaughn</option>
                        <option value="JH">Jimi Hendrix</option>
                        <option value="BBK">B.B King</option>
                        <option value="AK">Albert King</option>
                        <option value="BG">Buddy Guy</option>
                        <option value="EC">Eric Clapton</option>
                    </select>
                </label>
                <label for="Headline" class="w-full">
                    <select
                        name="Headline"
                        id="Headline"
                        class="mt-0.5 w-full rounded border-gray-300 sm:text-sm"
                    >
                        <option value="">Please select</option>
                        <option value="JM">John Mayer</option>
                        <option value="SRV">Stevie Ray Vaughn</option>
                        <option value="JH">Jimi Hendrix</option>
                        <option value="BBK">B.B King</option>
                        <option value="AK">Albert King</option>
                        <option value="BG">Buddy Guy</option>
                        <option value="EC">Eric Clapton</option>
                    </select>
                </label>
            </div>
        </div>

        <div class="h-70 w-full">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2180.4554436905387!2d79.84082817138253!3d6.931318265338344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1769703237632!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>

            <!-- <img
                src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="h-full w-full object-cover"
                alt="Description"
            /> -->
        </div>
    </div>
    <!-- card three  -->
</div>

<style>
    .card-container-1 {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
    }
</style>
