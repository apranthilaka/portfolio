<script>
    import { browser } from '$app/environment';
    import { onMount } from 'svelte';
    import initialData from '$lib/data/data.json';

    // 1. Reactive state using Svelte 5 Runes
    let tasks = $state([]);
    let newTaskTitle = $state('');

    // 2. Initial Load: Only runs once in the browser
    onMount(() => {
        if (browser) {
            const saved = localStorage.getItem('figma_prototype_v1');
            // Use saved data if it exists, otherwise fallback to your JSON file
            tasks = saved ? JSON.parse(saved) : initialData;
        }
    });

    // 3. Auto-Sync: Runs every time 'tasks' changes
    $effect(() => {
        if (browser) {
            localStorage.setItem('figma_prototype_v1', JSON.stringify(tasks));
        }
    });

    // 4. Actions
    function addItem(e) {
        e.preventDefault();
        if (!newTaskTitle.trim()) return;

        tasks.push({
            id: Date.now(),
            title: newTaskTitle,
            status: 'Pending',
        });

        newTaskTitle = ''; // Reset input
    }

    function removeItem(id) {
        tasks = tasks.filter((t) => t.id !== id);
    }
</script>

<div class="container">
    <h1>Figma Prototype Tracker</h1>

    <form onsubmit={addItem}>
        <input bind:value={newTaskTitle} placeholder="New component name..." />
        <button type="submit">Add Component</button>
    </form>

    <hr />

    <ul>
        {#each tasks as item (item.id)}
            <li class="card">
                <div>
                    <strong>{item.title}</strong> —
                    <span class="badge">{item.status}</span>
                </div>
                <button class="delete-btn" onclick={() => removeItem(item.id)}
                    >Remove</button
                >
            </li>
        {:else}
            <p>No components found. Start by adding one above!</p>
        {/each}
    </ul>

    <button class="reset-btn" onclick={() => (tasks = initialData)}>
        Reset to JSON defaults
    </button>
</div>

<style>
    .container {
        max-width: 500px;
        margin: 0 auto;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    form {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
    }
    input {
        flex-grow: 1;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
    .card {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid #eee;
    }
    .badge {
        font-size: 0.8rem;
        color: #666;
        font-style: italic;
    }
    .delete-btn {
        background: #ff4444;
        color: white;
        border: none;
        padding: 4px 8px;
        border-radius: 4px;
        cursor: pointer;
    }
    .reset-btn {
        margin-top: 20px;
        background: #eee;
        border: none;
        padding: 8px;
        width: 100%;
        cursor: pointer;
        border-radius: 4px;
    }
</style>
