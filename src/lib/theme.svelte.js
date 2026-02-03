import { browser } from '$app/environment';

class ThemeManager {
    // Initialize state from localStorage if in browser, otherwise default to light
    current = $state(
        browser ? (localStorage.getItem('theme') ?? 'light') : 'light',
    );

    constructor() {
        // This effect runs whenever 'this.current' changes
        $effect.root(() => {
            $effect(() => {
                if (!browser) return;

                const isDark = this.current === 'dark';

                // Update the HTML class
                document.documentElement.classList.toggle('dark', isDark);

                // Save to localStorage
                localStorage.setItem('theme', this.current);
            });
        });
    }

    toggle() {
        this.current = this.current === 'light' ? 'dark' : 'light';
    }
}

export const theme = new ThemeManager();
