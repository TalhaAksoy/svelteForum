<script lang="ts">
    import { browser } from "$app/environment";
    import { ThemeState } from "$lib/themeStore.svelte";
    import { onMount } from "svelte";

    let themes: string[] = ["light", "dark", "cupcake", "synthwave" , "cyberpunk"];

    onMount(() => {
        if (!localStorage.getItem("theme")) return;
        ThemeState.changeTheme(localStorage.getItem("theme") as string);
    });

    function handleThemeChange(theme : string) {
        ThemeState.changeTheme(theme);
        if (browser) {
            localStorage.setItem("theme", theme);
        }
    }
</script>

<div class="dropdown dropdown-hover dropdown-top dropdown-end absolute bottom-0 right-0">
    <div role="button" class="btn btn-outline m-1">Theme</div>
    <ul class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
      {#each themes as theme}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <li><span class="{ThemeState.theme === theme ? 'bg-purple-800/20' : ''}" onclick={() => {handleThemeChange(theme)}}>{theme}</span></li>        
      {/each}
    </ul>
  </div>
