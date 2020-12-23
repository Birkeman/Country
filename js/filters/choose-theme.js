let bool = true;
export function chooseTheme() {
  bool = !bool;
  if (bool == false) {
    let darkBG = (document.documentElement.style.cssText =
      "--white: hsl(0, 0%, 100%); " +
      "--light-bg: hsl(207, 26%, 17%);" +
      "--light-text: var(--white);" +
      "--light-element: hsl(209, 23%, 22%);");
    darkBG;
  } else {
    let lightTheme = (document.documentElement.style.cssText =
      "--light-bg: hsl(0, 0%, 98%);" +
      "--light-element: var(--white);" +
      "--light-text: hsl(200, 15%, 8%);" +
      "--light-input: hsl(0, 0%, 52%);");
    lightTheme;
  }
}
