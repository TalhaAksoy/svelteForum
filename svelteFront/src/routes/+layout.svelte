<script lang="ts">
    import { Toaster } from "svelte-french-toast";
    import { ThemeState } from "$lib/themeStore.svelte";

    import "../app.css";
    import "tailwindcss/tailwind.css";
    import ThemeChanger from "../components/themeChanger/ThemeChanger.svelte";
    import Navbar from "../components/navbar/Navbar.svelte";
</script>

<Toaster />

<div class="w-full h-screen relative flex flex-col" data-theme={ThemeState.theme}>
    <ThemeChanger />
    <Navbar/>
    <slot />
</div>
