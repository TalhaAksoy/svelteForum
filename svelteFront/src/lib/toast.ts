import toast from "svelte-french-toast";

export function toastSender(state : "success" | "error" , message : string) {

    const style = 'bg-red-500 bg-dark-text-200';
    switch (state){
        case "success":
            toast.success(message , {duration : 1000});
            break;
        case "error":
            toast.error(message , {duration : 1000});
            break;
    }
}