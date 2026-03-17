<script>
    import '../app.css';
    import { onNavigate } from '$app/navigation';

    let { children } = $props();

    onNavigate((navigation) => {
        // Check if the browser supports the View Transition API
        if (!document.startViewTransition) return;

        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
</script>

{@render children()}
