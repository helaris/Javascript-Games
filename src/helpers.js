export function pickRandom(options) {
    let outcome = Math.floor(Math.random() * options.length);
    return(options[outcome]);
}