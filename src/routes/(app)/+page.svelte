<script>
    import { fade } from 'svelte/transition';
</script>

<div transition:fade class="p-6">
    <h1>Welcome to SvelteKit</h1>
    <p>
        Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read
        the documentation
    </p>
</div>

<h1>The summary element</h1>

<details>
    <summary transition:fade>Epcot Center</summary>
    <p>
        Epcot is a theme park at Walt Disney World Resort featuring exciting
        attractions, international pavilions, award-winning fireworks and
        seasonal special events.
    </p>
</details>
