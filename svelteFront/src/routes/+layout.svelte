<script lang="ts">
    import { Toaster } from "svelte-french-toast";
    import { ThemeState } from "$lib/themeStore.svelte";

    import "../app.css";
    import "tailwindcss/tailwind.css";
    import ThemeChanger from "../components/themeChanger/ThemeChanger.svelte";
</script>

<Toaster />

<div class="w-full min-h-screen relative" data-theme={ThemeState.theme}>
    <ThemeChanger />
    <slot />
</div>
