<script>
    import { fade } from 'svelte/transition';
</script>

<div class="left-menu border-r border-gray-300 h-full">
    <div
        class=" px-6 border-b border-gray-300 h-14 flex items-center justify-between"
    >
        <span class="text-gray-950 font-medium mr-3"> Logo</span> Icon
    </div>
    <ul>
        <li class="px-6 h-10 flex justify-start items-center">
            <a href="/">Home</a>
        </li>
        <li class="px-6 h-10 flex justify-start items-center">
            <a href="/cards">CardsP</a>
        </li>
        <li class="px-6 h-10 flex justify-start items-center">
            <a href="/forms">Forms</a>
        </li>
    </ul>
</div>

<nav class="side-menu">
    <ul>
        <li>
            <details>
                <summary>
                    <span class="icon">📁</span>
                    <span class="label">Projects</span>
                    <span class="arrow">▼</span>
                </summary>
                <ul class="sub-menu">
                    <li><a href="#">Web Design</a></li>
                    <li><a href="#">App Dev</a></li>
                    <li><a href="#">SEO</a></li>
                </ul>
            </details>
        </li>

        <li>
            <a href="#" class="single-link">
                <span class="icon">⚙️</span>
                <span class="label">Settings</span>
            </a>
        </li>
    </ul>
</nav>

<style>
    .left-menu {
        grid-column: 1/2;
        grid-row: 1/3;
    }

    /* Container styling */
    .side-menu {
        width: 250px;
        background: #2c3e50;
        color: white;
        height: 100vh;
        padding: 10px;
    }

    .side-menu ul {
        list-style: none;
        padding: 0;
    }

    /* Summary styling (The clickable area) */
    summary {
        display: flex;
        align-items: center;
        padding: 12px;
        cursor: pointer;
        list-style: none; /* Removes default arrow in most browsers */
    }

    summary::-webkit-details-marker {
        display: none; /* Removes default arrow in Safari */
    }

    summary:hover {
        background: #34495e;
    }

    /* Sub-menu styling */
    .sub-menu {
        padding-left: 30px;
        background: #1a252f;
    }

    .sub-menu li a {
        display: block;
        padding: 8px;
        color: #bdc3c7;
        text-decoration: none;
    }

    /* Rotating the arrow when open */
    details[open] .arrow {
        transform: rotate(180deg);
    }

    .arrow {
        margin-left: auto;
        transition: transform 0.2s ease;
    }
</style>
