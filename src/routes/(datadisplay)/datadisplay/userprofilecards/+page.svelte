<script>
    import CardOne from './components/CardOne.svelte';
    import CardTwo from './components/CardTwo.svelte';

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
    <!-- card one -->
    <CardOne />
    <!-- card one  -->
    <!-- card  -->
    <CardTwo />
    <!-- card  -->

    <!-- card one -->
    <CardOne />
    <!-- card one  -->

    <!-- card  -->
    <CardTwo />
    <!-- card  -->
</div>

<style>
    .card-container-1 {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
        grid-template-rows: 800px;
    }
</style>
