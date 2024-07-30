<script lang="ts">
    import { onMount } from "svelte";
    import LoginComp from "./LoginComp/LoginComp.svelte";
    import { Wave } from "svelte-loading-spinners";
    import RegisterComp from "./RegisterComp/RegisterComp.svelte";

    let buttonState: "register" | "login" = "login";

    let loading = false;

    onMount(() => {
        loading = true;
    });
</script>

{#if loading}
    <div class=" w-full h-screen flex justify-center items-center">
        <div
            class="lg:w-1/3 lg:h-1/2 w-full h-5/6 flex flex-col gap-y-4 p-2 shadow-sm"
        >
            <div
                class=" h-16 w-full flex relative overflow-hidden placeBackground"
            >
                <div
                    class="absolute top-0 {buttonState === 'register'
                        ? 'left-0'
                        : ' -translate-x-full left-full'} h-full w-1/2 z-0 btn btn-primary rounded-md transition-all duration-300"
                ></div>
                <button
                    onclick={() => {
                        buttonState = "register";
                    }}
                    class="w-1/2 h-full flex items-center justify-center z-[1] text-xl font-bold"
                    >Register</button
                >
                <button
                    onclick={() => {
                        buttonState = "login";
                    }}
                    class="w-1/2 h-full flex items-center justify-center z-[1] text-xl font-bold"
                    >Login</button
                >
            </div>
            <div class="flex-1 w-full overflow-hidden relative">
                <LoginComp {buttonState} />
                <RegisterComp {buttonState} />
            </div>
        </div>
    </div>
{:else}
    <div class="w-full h-screen flex items-center justify-center">
        <Wave color="#892CDC" duration="1s" />
    </div>
{/if}