<script lang="ts">
    import { toastSender } from "$lib/toast";
    import { onMount } from "svelte";

    export let buttonState: "register" | "login";
    onMount(() => {
        const registerForm = document.getElementById("registerForm");
        registerForm?.addEventListener("submit", function (event) {
            event.preventDefault(); // Formun varsayılan davranışını engelle

            const username = (
                document.getElementById("usernameReg") as HTMLInputElement
            )?.value;
            const password = (
                document.getElementById("passwordReg") as HTMLInputElement
            )?.value;

            const email = (document.getElementById("emailReg") as HTMLInputElement)
                ?.value;

            if (!username || !password || !email) {
                toastSender("error", "Form başarıyla gönderildi.");
            } else {
                // Burada formun gönderilmesi için gerekli işlemleri yapabilirsiniz
                toastSender("success", "Form başarıyla gönderildi.");
            }
        });
    });
</script>

<div
    class="w-full h-full {buttonState === 'register'
        ? 'translate-x-0'
        : 'translate-x-full'} transition-all duration-300 flex flex-col items-center justify-around absolute top-0 left-0 placeBackground pb-2"
>
    <form
        id="registerForm"
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
                    id="usernameReg"
                    class="grow"
                    placeholder="Username"
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
                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
                    />
                    <path
                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
                    />
                </svg>
                <input type="text" class="grow" id="emailReg" placeholder="Email" />
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
                    id="passwordReg"
                    class="grow"
                    placeholder="Password"
                />
            </label>
        </div>

        <button type="submit" class="btn btn-primary w-11/12 mx-auto"
            >REGISTER</button
        >
    </form>
</div>
