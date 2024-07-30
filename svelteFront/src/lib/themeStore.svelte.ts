class ThemeStore {
    theme = $state("synthwave");

    changeTheme(themeName : "light" | "dark" | "cupcake" | "synthwave" | string){
        this.theme = themeName;
    }
}

export const ThemeState = new ThemeStore();