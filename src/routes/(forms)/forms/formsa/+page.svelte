<script>
    // In Svelte 5, we get data from the $props rune
    let { data } = $props();

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
    <div class="h-fill">
        <form
            action="#"
            class="mx-auto space-y-4 rounded-lg border border-gray-300 bg-white p-6"
        >
            <div>
                <label
                    class="block text-sm font-medium text-gray-900"
                    for="name">Name</label
                >

                <input
                    class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
                    id="name"
                    type="text"
                    placeholder="Your name"
                />
            </div>

            <div>
                <label
                    class="block text-sm font-medium text-gray-900"
                    for="email">Email</label
                >

                <input
                    class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
                    id="email"
                    type="email"
                    placeholder="Your email"
                />
            </div>

            <div>
                <label
                    class="block text-sm font-medium text-gray-900"
                    for="subject">Subject</label
                >

                <select
                    class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
                    id="subject"
                >
                    <option value="">Select a subject</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="support">Support</option>
                    <option value="feedback">Feedback</option>
                </select>
            </div>

            <div>
                <label
                    class="block text-sm font-medium text-gray-900"
                    for="priority">Priority</label
                >

                <select
                    class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
                    id="priority"
                >
                    <option value="">Select a priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>

            <div>
                <label
                    class="block text-sm font-medium text-gray-900"
                    for="message">Message</label
                >

                <textarea
                    class="mt-1 w-full resize-none rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
                    id="message"
                    rows="4"
                    placeholder="Your message"
                ></textarea>
            </div>

            <button
                class="block w-full rounded-md border border-gray-600 bg-gray-950 px-12 h-[40px] text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600"
                type="submit"
            >
                Send Message
            </button>
        </form>
    </div>
    <!-- card one  -->
    <!-- card one  -->
    <div class="h-fill">
        <form
            action="#"
            class="mx-auto space-y-4 rounded-lg border border-gray-300 bg-white p-6"
        >
            <div>
                <label
                    class="block text-sm font-medium text-gray-900"
                    for="name">Name</label
                >

                <input
                    class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
                    id="name"
                    type="text"
                    placeholder="Your name"
                />
            </div>

            <div>
                <label
                    class="block text-sm font-medium text-gray-900"
                    for="email">Email</label
                >

                <input
                    class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
                    id="email"
                    type="email"
                    placeholder="Your email"
                />
            </div>

            <div>
                <label
                    class="block text-sm font-medium text-gray-900"
                    for="subject">Subject</label
                >

                <select
                    class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
                    id="subject"
                >
                    <option value="">Select a subject</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="support">Support</option>
                    <option value="feedback">Feedback</option>
                </select>
            </div>

            <div>
                <label
                    class="block text-sm font-medium text-gray-900"
                    for="priority">Priority</label
                >

                <select
                    class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
                    id="priority"
                >
                    <option value="">Select a priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>

            <div>
                <label
                    class="block text-sm font-medium text-gray-900"
                    for="message">Message</label
                >

                <textarea
                    class="mt-1 w-full resize-none rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
                    id="message"
                    rows="4"
                    placeholder="Your message"
                ></textarea>
            </div>

            <button
                class="block w-full rounded-md border border-gray-600 bg-gray-950 px-12 h-[40px] text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600"
                type="submit"
            >
                Send Message
            </button>
        </form>
    </div>
    <!-- card one  -->

    <!-- card one  -->
    <div class="h-fill">
        <form
            action="#"
            class="mx-auto space-y-4 rounded-lg border border-gray-300 bg-white p-6"
        >
            <div>
                <label
                    class="block text-sm font-medium text-gray-900"
                    for="name">Name</label
                >

                <input
                    class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
                    id="name"
                    type="text"
                    placeholder="Your name"
                />
            </div>

            <div>
                <label
                    class="block text-sm font-medium text-gray-900"
                    for="email">Email</label
                >

                <input
                    class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
                    id="email"
                    type="email"
                    placeholder="Your email"
                />
            </div>

            <div>
                <label
                    class="block text-sm font-medium text-gray-900"
                    for="subject">Subject</label
                >

                <select
                    class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
                    id="subject"
                >
                    <option value="">Select a subject</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="support">Support</option>
                    <option value="feedback">Feedback</option>
                </select>
            </div>

            <div>
                <label
                    class="block text-sm font-medium text-gray-900"
                    for="priority">Priority</label
                >

                <select
                    class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
                    id="priority"
                >
                    <option value="">Select a priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>

            <div>
                <label
                    class="block text-sm font-medium text-gray-900"
                    for="message">Message</label
                >

                <textarea
                    class="mt-1 w-full resize-none rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
                    id="message"
                    rows="4"
                    placeholder="Your message"
                ></textarea>
            </div>

            <button
                class="block w-full rounded-md border border-gray-600 bg-gray-950 px-12 h-[40px] text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600"
                type="submit"
            >
                Send Message
            </button>
        </form>
    </div>
    <!-- card one  -->

    <!-- card one  -->
    <div class="h-fill">
        <form
            action="#"
            class="mx-auto space-y-4 rounded-lg border border-gray-300 bg-white p-6"
        >
            <div>
                <label
                    class="block text-sm font-medium text-gray-900"
                    for="name">Name</label
                >

                <input
                    class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
                    id="name"
                    type="text"
                    placeholder="Your name"
                />
            </div>

            <div>
                <label
                    class="block text-sm font-medium text-gray-900"
                    for="email">Email</label
                >

                <input
                    class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
                    id="email"
                    type="email"
                    placeholder="Your email"
                />
            </div>

            <div>
                <label
                    class="block text-sm font-medium text-gray-900"
                    for="subject">Subject</label
                >

                <select
                    class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
                    id="subject"
                >
                    <option value="">Select a subject</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="support">Support</option>
                    <option value="feedback">Feedback</option>
                </select>
            </div>

            <div>
                <label
                    class="block text-sm font-medium text-gray-900"
                    for="priority">Priority</label
                >

                <select
                    class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
                    id="priority"
                >
                    <option value="">Select a priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>

            <div>
                <label
                    class="block text-sm font-medium text-gray-900"
                    for="message">Message</label
                >

                <textarea
                    class="mt-1 w-full resize-none rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
                    id="message"
                    rows="4"
                    placeholder="Your message"
                ></textarea>
            </div>

            <button
                class="block w-full rounded-md border border-gray-600 bg-gray-950 px-12 h-[40px] text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600"
                type="submit"
            >
                Send Message
            </button>
        </form>
    </div>
    <!-- card one  -->

    <!-- card one  -->
    <div class="h-fill">
        <form
            action="#"
            class="mx-auto space-y-4 rounded-lg border border-gray-300 bg-white p-6"
        >
            <div>
                <label
                    class="block text-sm font-medium text-gray-900"
                    for="name">Name</label
                >

                <input
                    class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
                    id="name"
                    type="text"
                    placeholder="Your name"
                />
            </div>

            <div>
                <label
                    class="block text-sm font-medium text-gray-900"
                    for="email">Email</label
                >

                <input
                    class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
                    id="email"
                    type="email"
                    placeholder="Your email"
                />
            </div>

            <div>
                <label
                    class="block text-sm font-medium text-gray-900"
                    for="subject">Subject</label
                >

                <select
                    class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
                    id="subject"
                >
                    <option value="">Select a subject</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="support">Support</option>
                    <option value="feedback">Feedback</option>
                </select>
            </div>

            <div>
                <label
                    class="block text-sm font-medium text-gray-900"
                    for="priority">Priority</label
                >

                <select
                    class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
                    id="priority"
                >
                    <option value="">Select a priority</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>

            <div>
                <label
                    class="block text-sm font-medium text-gray-900"
                    for="message">Message</label
                >

                <textarea
                    class="mt-1 w-full resize-none rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
                    id="message"
                    rows="4"
                    placeholder="Your message"
                ></textarea>
            </div>

            <button
                class="block w-full rounded-md border border-gray-600 bg-gray-950 px-12 h-[40px] text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600"
                type="submit"
            >
                Send Message
            </button>
        </form>
    </div>
    <!-- card one  -->
</div>

<style>
    .card-container-1 {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
        grid-template-rows: auto;
    }
</style>
