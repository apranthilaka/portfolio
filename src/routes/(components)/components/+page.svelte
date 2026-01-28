<script>
    // In Svelte 5, we get data from the $props rune
    let { data } = $props();

    // We can make the books reactive using the $state rune
    // let bookList = $state(data.books);
</script>

<div class=" font-medium p-6">Cards</div>

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

<div class="card-container-1 px-6">
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
    <div>one</div>
</div>

<style>
    .card-container-1 {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));

        div {
            border: 1px solid red;
            min-height: 300px;
        }
    }
</style>
