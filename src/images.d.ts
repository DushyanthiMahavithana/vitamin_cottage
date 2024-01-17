/*Image files generally don't require type declarations. 
This tells TypeScript that any file with a .jpg extension should be treated as a module.*/ 

declare module '*.jpg' {
    const value: string;
    export default value;
  }
  