<script>
    import P1LeftMenu from '$lib/components/project-one/P1-left-menu.svelte';
    import * as Card from '$lib/components/ui/card/index.js';
</script>

<div
    class="grid grid-cols-[300px_1fr] grid-rows-[40px_1fr] gap-2 w-full h-screen text-sm text-neutral-700"
>
    <!-- Placed in Top Left (Col 1 to 2, Row 1 to 2) -->
    <div
        class="col-start-1 col-end-2 row-start-1 row-end-2 bg-blue-500 text-white p-2"
    >
        Top Left but
    </div>

    <!-- Placed in Bottom Left (Col 1 to 2, Row 2 to 3) -->
    <div
        class="col-start-1 col-end-2 row-start-2 row-end-3 bg-emerald-500 text-white p-2"
    >
        <P1LeftMenu />
    </div>

    <!-- Placed in Top Right (Col 2 to 3, Row 1 to 2) -->
    <div
        class="col-start-2 col-end-3 row-start-1 row-end-2 bg-amber-500 text-white p-2"
    >
        Top Right
    </div>

    <!-- Even though this is LAST in the HTML, we force it to the Top Left slot! -->
    <!-- Placed in Bottom Right (Col 2 to 3, Row 2 to 3) -->
    <div class="col-start-2 col-end-3 row-start-2 row-end-3">
        Bottom Right

        <div>
            <Card.Root>
                <Card.Header>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Description>Card Description</Card.Description>
                </Card.Header>
                <Card.Content>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatum suscipit accusantium commodi nam eveniet quo
                        voluptate sunt rerum delectus eligendi velit dolor,
                        sapiente cumque, iste modi ducimus ipsa soluta quos!
                    </p>
                </Card.Content>
                <Card.Footer>
                    <p>
                        <button>Hello</button>
                    </p>
                </Card.Footer>
            </Card.Root>
        </div>
    </div>
</div>
