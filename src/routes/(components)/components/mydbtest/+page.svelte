<script>
    let { data } = $props();
</script>

<div>
    {#each data.dbtest as entry}
        <div>
            {entry.username}
        </div>

        <div>
            {entry.useremail}
        </div>
    {/each}
</div>
