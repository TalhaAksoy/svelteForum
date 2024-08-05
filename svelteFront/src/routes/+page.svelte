<script lang="ts">
    import { goto } from '$app/navigation';
    import { UserState } from '$lib/userStore.svelte';
</script>

<div class="w-full flex flex-col flex-1 break-words">
    <button onclick={() => {goto('/login')}} class="text-3xl font-bold underline">Hello world!</button>
    <p class="">
        {UserState.user.name} <br>
        {UserState.user.email} <br>
        {UserState.user.profilePicture} <br>
        {UserState.user.token}
    </p>
</div>
