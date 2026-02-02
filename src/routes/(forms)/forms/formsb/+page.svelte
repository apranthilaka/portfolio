<script>
    import { fade } from 'svelte/transition';
    // In Svelte 5, we get data from the $props rune
    let { data } = $props();

    // We can make the books reactive using the $state rune
    let bookList = $state(data.books);
</script>

<main transition:fade class="p-6">
    <h1 class="mb-6">Library Catalog</h1>

    {#if bookList.length > 0}
        <div class="grid">
            {#each bookList as book}
                <div class="card">
                    <h3>{book.title}</h3>
                    <p>By {book.author}</p>
                    <small
                        >Added: {new Date(
                            book.created_at,
                        ).toLocaleDateString()}</small
                    >
                </div>
            {/each}
        </div>
    {:else}
        <p>No books found in the database.</p>
    {/if}
</main>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
    }
    .card {
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 8px;
        background: #f9f9f9;
    }
    h3 {
        margin: 0 0 0.5rem 0;
        color: #333;
    }
</style>
