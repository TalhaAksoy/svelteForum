<script>
    import { UserState } from "$lib/userStore.svelte";
</script>

<div class="navbar bg-base-100">
    <div class="flex-1">
        <span class="btn btn-ghost text-xl">daisyUI</span>
    </div>
    <div class="flex-none">
        <div class="dropdown dropdown-end">
            <div
                tabindex="0"
                role="button"
                class="btn btn-ghost btn-circle avatar"
            >
                <div class="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src={UserState.user.profilePicture}
                    />
                </div>
            </div>
            <ul
                class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
                <li>
                    <span class="justify-between">
                        Profile : {UserState.user.name}
                        <span class="badge">New</span>
                    </span>
                </li>
                <li><span>Settings</span></li>
                <li><span>Logout</span></li>
            </ul>
        </div>
    </div>
</div>
