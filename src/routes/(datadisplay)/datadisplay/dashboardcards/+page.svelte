<script>
    // In Svelte 5, we get data from the $props rune

    // We can make the books reactive using the $state rune
    // let bookList = $state(data.books);
</script>

<div class="p-6 font-medium flex flex-row justify-between">
    <div>Cards</div>
    <div>
        <a href="">Figma</a>
    </div>
</div>

<div class="card-container-1 px-6 gap-6">
    <!-- card one  -->
    <div
        class="border border-gray-200 rounded-md h-200 shadow-sm hover:shadow-md transition-all delay-75 flex flex-col bg-white"
    >
        <div class="border-b border-gray-200 p-4 font-medium text-gray-950">
            Branch Locations
        </div>
        <div class="flex flex-row border-b border-gray-200 p-4 gap-4">
            <div class="flex flex-col w-fill grow overflow-hidden">
                <div class="truncate text-sm font-medium text-gray-800">
                    Green Valley Bank
                </div>
                <div class="text-sm text-gray-500 truncate">
                    1234 Financial Way, Prosperity, TX 75001
                </div>
            </div>
            <div class="flex flex-row gap-2 items-center justify-end">
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

        <div class=" p-4 grow rounded-lg overflow-hidden">
            <iframe
                title=""
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2180.4554436905387!2d79.84082817138253!3d6.931318265338344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1769703237632!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        <!-- table  -->
        <div class=" border-t border-gray-200 p-4 h-auto">
            <table
                class="min-w-full divide-y divide-gray-200 bg-white text-sm border"
            >
                <thead class="bg-gray-50">
                    <tr>
                        <th
                            class=" text-sm px-4 py-2 text-left font-medium text-gray-900"
                            >Banking Products</th
                        >
                        <th
                            class=" text-sm px-4 py-2 text-left font-medium text-gray-900"
                            >Branch Usage Stats</th
                        >
                        <th
                            class="text-sm px-4 py-2 text-left font-medium text-gray-900"
                            >Service Charge</th
                        >
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    <tr class="hover:bg-gray-50 transition-colors">
                        <td class="px-4 py-2 text-gray-700 text-sm"
                            >Jane Cooper</td
                        >
                        <td class="px-4 py-2 text-gray-500 text-sm"
                            >Developer</td
                        >
                        <td class="px-4 py-2 text-sm">
                            <span
                                class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                                >Active</span
                            >
                        </td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors">
                        <td class="px-4 py-2 text-gray-700 text-sm"
                            >Cody Fisher</td
                        >
                        <td class="px-4 py-2 text-gray-500 text-sm">Designer</td
                        >
                        <td class="px-4 py-2">
                            <span
                                class="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20"
                                >Away</span
                            >
                        </td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors">
                        <td class="px-4 py-2 text-gray-700 text-sm"
                            >Cody Fisher</td
                        >
                        <td class="px-4 py-2 text-gray-500 text-sm">Designer</td
                        >
                        <td class="px-4 py-2">
                            <span
                                class="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20"
                                >Away</span
                            >
                        </td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors">
                        <td class="px-4 py-2 text-gray-700 text-sm"
                            >Cody Fisher</td
                        >
                        <td class="px-4 py-2 text-gray-500 text-sm">Designer</td
                        >
                        <td class="px-4 py-2">
                            <span
                                class="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20"
                                >Away</span
                            >
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!-- card one  -->

    <!-- card two  -->
    <div class="flex flex-col h-[800px] gap-4 bg-white">
        <div
            class="grow flex flex-col border border-gray-200 overflow-hidden border-border-gray-200 rounded-md shadow-sm hover:shadow-md"
        >
            <div
                class="border-b border-gray-200 text-sm p-4 font-medium shrink-0"
            >
                Branch Locations
            </div>
            <div class="flex flex-row border-b border-gray-200 p-4 gap-4">
                <div class="flex flex-col w-fill grow overflow-hidden">
                    <div class="truncate text-sm font-medium text-gray-800">
                        Green Valley Bank
                    </div>
                    <div class="text-sm text-gray-500 truncate">
                        1234 Financial Way, Prosperity, TX 75001
                    </div>
                </div>
                <div class="flex flex-row gap-2 items-center justify-end">
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
            <div class="grow min-h-0">
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Description"
                    class="w-full h-full object-cover"
                />
            </div>
        </div>

        <div
            class="h-auto flex flex-row border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all delay-75"
        >
            <div class="p-4 shrink-0">
                <img
                    src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    class="w-au h-50 object-cover rounded-md"
                />
            </div>
            <div class="p-4">
                <div class="font-medium text-gray-800 mb-1">
                    Quick and Easy Loan Solutions
                </div>
                <div class="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolor repellat, placeat accusantium natus labore modi
                    excepturi eveniet asperiores, necessitatibus hic adipisci
                    doloribus. Saepe recusandae minus, praesentium ipsa adipisci
                    qui officia.
                </div>
            </div>
        </div>
    </div>
    <!-- card two  -->

    <!-- card one  -->
    <div
        class="border border-gray-200 rounded-md h-200 shadow-sm hover:shadow-md transition-all delay-75 flex flex-col bg-white"
    >
        <div class="border-b border-gray-200 p-4 font-medium text-gray-950">
            Branch Locations
        </div>
        <div class="flex flex-row border-b border-gray-200 p-4 gap-4">
            <div class="flex flex-col w-fill grow overflow-hidden">
                <div class="truncate text-sm font-medium text-gray-800">
                    Green Valley Bank
                </div>
                <div class="text-sm text-gray-500 truncate">
                    1234 Financial Way, Prosperity, TX 75001
                </div>
            </div>
            <div class="flex flex-row gap-2 items-center justify-end">
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

        <div class=" p-4 grow rounded-lg overflow-hidden">
            <iframe
                title=""
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2180.4554436905387!2d79.84082817138253!3d6.931318265338344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1769703237632!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        <!-- table  -->
        <div class=" border-t border-gray-200 p-4 h-auto">
            <table
                class="min-w-full divide-y divide-gray-200 bg-white text-sm border"
            >
                <thead class="bg-gray-50">
                    <tr>
                        <th
                            class=" text-sm px-4 py-2 text-left font-medium text-gray-900"
                            >Banking Products</th
                        >
                        <th
                            class=" text-sm px-4 py-2 text-left font-medium text-gray-900"
                            >Branch Usage Stats</th
                        >
                        <th
                            class="text-sm px-4 py-2 text-left font-medium text-gray-900"
                            >Service Charge</th
                        >
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    <tr class="hover:bg-gray-50 transition-colors">
                        <td class="px-4 py-2 text-gray-700 text-sm"
                            >Jane Cooper</td
                        >
                        <td class="px-4 py-2 text-gray-500 text-sm"
                            >Developer</td
                        >
                        <td class="px-4 py-2 text-sm">
                            <span
                                class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                                >Active</span
                            >
                        </td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors">
                        <td class="px-4 py-2 text-gray-700 text-sm"
                            >Cody Fisher</td
                        >
                        <td class="px-4 py-2 text-gray-500 text-sm">Designer</td
                        >
                        <td class="px-4 py-2">
                            <span
                                class="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20"
                                >Away</span
                            >
                        </td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors">
                        <td class="px-4 py-2 text-gray-700 text-sm"
                            >Cody Fisher</td
                        >
                        <td class="px-4 py-2 text-gray-500 text-sm">Designer</td
                        >
                        <td class="px-4 py-2">
                            <span
                                class="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20"
                                >Away</span
                            >
                        </td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors">
                        <td class="px-4 py-2 text-gray-700 text-sm"
                            >Cody Fisher</td
                        >
                        <td class="px-4 py-2 text-gray-500 text-sm">Designer</td
                        >
                        <td class="px-4 py-2">
                            <span
                                class="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20"
                                >Away</span
                            >
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!-- card one  -->

    <!-- card two  -->
    <div class="flex flex-col h-[800px] gap-4 bg-white">
        <div
            class="grow flex flex-col border border-gray-200 overflow-hidden border-border-gray-200 rounded-md shadow-sm hover:shadow-md"
        >
            <div
                class="border-b border-gray-200 text-sm p-4 font-medium shrink-0"
            >
                Branch Locations
            </div>
            <div class="flex flex-row border-b border-gray-200 p-4 gap-4">
                <div class="flex flex-col w-fill grow overflow-hidden">
                    <div class="truncate text-sm font-medium text-gray-800">
                        Green Valley Bank
                    </div>
                    <div class="text-sm text-gray-500 truncate">
                        1234 Financial Way, Prosperity, TX 75001
                    </div>
                </div>
                <div class="flex flex-row gap-2 items-center justify-end">
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
            <div class="grow min-h-0">
                <img
                    src="https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Description"
                    class="w-full h-full object-cover"
                />
            </div>
        </div>

        <div
            class="h-auto flex flex-row border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all delay-75"
        >
            <div class="p-4 shrink-0">
                <img
                    src="https://images.unsplash.com/photo-1535953472862-9cc610a70f8a?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    class="w-au h-50 object-cover rounded-md"
                />
            </div>
            <div class="p-4">
                <div class="font-medium text-gray-800 mb-1">
                    Quick and Easy Loan Solutions
                </div>
                <div class="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolor repellat, placeat accusantium natus labore modi
                    excepturi eveniet asperiores, necessitatibus hic adipisci
                    doloribus. Saepe recusandae minus, praesentium ipsa adipisci
                    qui officia.
                </div>
            </div>
        </div>
    </div>
    <!-- card two  -->

    <!-- card one  -->
    <div
        class="border border-gray-200 rounded-md h-200 shadow-sm hover:shadow-md transition-all delay-75 flex flex-col bg-white"
    >
        <div class="border-b border-gray-200 p-4 font-medium text-gray-950">
            Branch Locations
        </div>
        <div class="flex flex-row border-b border-gray-200 p-4 gap-4">
            <div class="flex flex-col w-fill grow overflow-hidden">
                <div class="truncate text-sm font-medium text-gray-800">
                    Green Valley Bank
                </div>
                <div class="text-sm text-gray-500 truncate">
                    1234 Financial Way, Prosperity, TX 75001
                </div>
            </div>
            <div class="flex flex-row gap-2 items-center justify-end">
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

        <div class=" p-4 grow rounded-lg overflow-hidden">
            <iframe
                title=""
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2180.4554436905387!2d79.84082817138253!3d6.931318265338344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1769703237632!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        <!-- table  -->
        <div class=" border-t border-gray-200 p-4 h-auto">
            <table
                class="min-w-full divide-y divide-gray-200 bg-white text-sm border"
            >
                <thead class="bg-gray-50">
                    <tr>
                        <th
                            class=" text-sm px-4 py-2 text-left font-medium text-gray-900"
                            >Banking Products</th
                        >
                        <th
                            class=" text-sm px-4 py-2 text-left font-medium text-gray-900"
                            >Branch Usage Stats</th
                        >
                        <th
                            class="text-sm px-4 py-2 text-left font-medium text-gray-900"
                            >Service Charge</th
                        >
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    <tr class="hover:bg-gray-50 transition-colors">
                        <td class="px-4 py-2 text-gray-700 text-sm"
                            >Jane Cooper</td
                        >
                        <td class="px-4 py-2 text-gray-500 text-sm"
                            >Developer</td
                        >
                        <td class="px-4 py-2 text-sm">
                            <span
                                class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                                >Active</span
                            >
                        </td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors">
                        <td class="px-4 py-2 text-gray-700 text-sm"
                            >Cody Fisher</td
                        >
                        <td class="px-4 py-2 text-gray-500 text-sm">Designer</td
                        >
                        <td class="px-4 py-2">
                            <span
                                class="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20"
                                >Away</span
                            >
                        </td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors">
                        <td class="px-4 py-2 text-gray-700 text-sm"
                            >Cody Fisher</td
                        >
                        <td class="px-4 py-2 text-gray-500 text-sm">Designer</td
                        >
                        <td class="px-4 py-2">
                            <span
                                class="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20"
                                >Away</span
                            >
                        </td>
                    </tr>
                    <tr class="hover:bg-gray-50 transition-colors">
                        <td class="px-4 py-2 text-gray-700 text-sm"
                            >Cody Fisher</td
                        >
                        <td class="px-4 py-2 text-gray-500 text-sm">Designer</td
                        >
                        <td class="px-4 py-2">
                            <span
                                class="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20"
                                >Away</span
                            >
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!-- card one  -->

    <!-- card two  -->
    <div class="flex flex-col h-[800px] gap-4 bg-white">
        <div
            class="grow flex flex-col border border-gray-200 overflow-hidden border-border-gray-200 rounded-md shadow-sm hover:shadow-md"
        >
            <div
                class="border-b border-gray-200 text-sm p-4 font-medium shrink-0"
            >
                Branch Locations
            </div>
            <div class="flex flex-row border-b border-gray-200 p-4 gap-4">
                <div class="flex flex-col w-fill grow overflow-hidden">
                    <div class="truncate text-sm font-medium text-gray-800">
                        Green Valley Bank
                    </div>
                    <div class="text-sm text-gray-500 truncate">
                        1234 Financial Way, Prosperity, TX 75001
                    </div>
                </div>
                <div class="flex flex-row gap-2 items-center justify-end">
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
            <div class="grow min-h-0">
                <img
                    src="https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Description"
                    class="w-full h-full object-cover"
                />
            </div>
        </div>

        <div
            class="h-auto flex flex-row border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all delay-75"
        >
            <div class="p-4 shrink-0">
                <img
                    src="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    class="w-au h-50 object-cover rounded-md"
                />
            </div>
            <div class="p-4">
                <div class="font-medium text-gray-800 mb-1">
                    Quick and Easy Loan Solutions
                </div>
                <div class="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolor repellat, placeat accusantium natus labore modi
                    excepturi eveniet asperiores, necessitatibus hic adipisci
                    doloribus. Saepe recusandae minus, praesentium ipsa adipisci
                    qui officia.
                </div>
            </div>
        </div>
    </div>
    <!-- card two  -->
</div>

<style>
    .card-container-1 {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
        grid-template-rows: 800px;
    }
</style>
