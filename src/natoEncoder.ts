import { dictionary } from "./natoEncoder/preloaded";
export function encodeNato (word: string) {
    let a: string = word.toUpperCase().split('').map((letter) => dictionary[letter]).join(' ');
    return a;
}
