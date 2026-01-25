<script>
    import { fade } from 'svelte/transition';

    // In Svelte 5, we get data from the $props rune
    let { data } = $props();

    // We can make the books reactive using the $state rune
    // let bookList = $state(data.books);
</script>

<div transition:fade>
    {#each data.books as book}
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
    {/each}
</div>
