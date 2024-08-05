class UserStore {
    user = $state({
        name : '',
        email : '',
        profilePicture : '',
        token : '',
    })

    changeName(name : string){
        this.user.name = name;
    }

    changeEmail(email : string){
        this.user.email = email;
    }

    changeProfilePicture(profilePicture : string){
        this.user.profilePicture = profilePicture;
    }

    changeToken(token : string){
        this.user.token = token
    }
}

export const UserState = new UserStore();