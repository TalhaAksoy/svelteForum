<script lang="ts">
    import { toastSender } from "$lib/toast";
    import axios from "axios";
    import { onMount } from "svelte";
    import { UserState } from "$lib/userStore.svelte";
    import { goto } from "$app/navigation";

    export let buttonState: "register" | "login";
    onMount(() => {
    const loginForm = document.getElementById("loginForm");
    loginForm?.addEventListener("submit", function (event) {
        event.preventDefault(); // Formun varsayılan davranışını engelle

        const email = (document.getElementById("email") as HTMLInputElement)?.value;
        const password = (document.getElementById("password") as HTMLInputElement)?.value;

        if (!email || !password) {
            toastSender("error","Form başarıyla gönderildi.")

        } else {
            // Burada formun gönderilmesi için gerekli işlemleri yapabilirsiniz
            axios.post('http://localhost:3000/user/findUser' , {email : email, password : password}).then((res) => {
                toastSender("success" , "Form başarıyla gönderildi.");
                console.log(res)
                UserState.changeName(res.data.name);
                UserState.changeEmail(res.data.email);
                UserState.changeProfilePicture(res.data.profilePicture);
                UserState.changeToken(res.data.token);
                goto('/');
            }).catch((e) => {
                console.log(e);
                toastSender('error' , "BAD REQ")
            })
        }
    });
});
</script>


<div
    class="w-full h-full {buttonState === 'login'
        ? 'translate-x-0'
        : '-translate-x-full'} transition-all duration-300 flex flex-col items-center justify-around absolute top-0 left-0 placeBackground pb-2 "
>
    <form
        id="loginForm"
        class="w-full h-full flex flex-col"
    >
        <div class="w-full flex-1 flex flex-col justify-center gap-y-12 items-center">
            <label class="input input-bordered flex items-center gap-2 w-11/12">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="h-4 w-4 opacity-70"
                >
                    <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
                    />
                </svg>
                <input
                    type="text"
                    id="email"
                    class="grow"
                    placeholder="E-mail"
                />
            </label>
            <label class="input input-bordered flex items-center gap-2 w-11/12">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    class="h-4 w-4 opacity-70"
                >
                    <path
                        fill-rule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clip-rule="evenodd"
                    />
                </svg>
                <input
                    type="password"
                    id="password"
                    class="grow"
                    placeholder="Password"
                />
            </label>
        </div>

        <button
            type="submit"
            class="btn btn-primary w-11/12 mx-auto"
            >LOGIN</button
        >
    </form>
</div>
