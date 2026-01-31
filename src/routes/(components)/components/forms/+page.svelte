<script>
    let { data } = $props();

    // Svelte 5 reactive state for the form inputs
    let title = $state('');
    let author = $state('');

    let users = [
        { id: 1, name: 'Alice', role: 'Admin' },
        { id: 2, name: 'Bob', role: 'User' },
    ];
</script>

<!-- 1. Define the snippet -->
{#snippet userBadge(user)}
    <div class="badge">
        <strong>{user.name}</strong> — <span>{user.role}</span>
    </div>
{/snippet}

<h2>Team Members</h2>
<ul>
    {#each users as user}
        <li>
            <!-- 2. Render the snippet -->
            {@render userBadge(user)}
        </li>
    {/each}
</ul>

<h2>Add a New Book</h2>
<form method="POST" action="?/create">
    <input
        type="text"
        name="title"
        bind:value={title}
        placeholder="Book Title"
        required
    />
    <input
        type="text"
        name="author"
        bind:value={author}
        placeholder="Author Name"
        required
    />
    <button type="submit">Add Book</button>
</form>

<h2>Books</h2>
<ul>
    {#each data.books as book}
        <li>{book.title} and {book.author}</li>
    {:else}
        <li>No books found. Check your database connection!</li>
    {/each}
</ul>

<style>
    .badge {
        border: 1px solid #ccc;
        padding: 0.5rem;
        margin: 0.2rem;
    }
</style>
