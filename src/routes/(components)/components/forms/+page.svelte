<script>
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

<style>
    .badge {
        border: 1px solid #ccc;
        padding: 0.5rem;
        margin: 0.2rem;
    }
</style>
