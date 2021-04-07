const NOTES = ['c4', 'cs4', 'd4', 'ds4', 'e4', 'f4', 'fs4', 'g4', 'gs4', 'a4',
    'as4', 'b4', 'c5', 'cs5', 'd5', 'ds5'];

const WHITE = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
const BLACK = ['w', 'e', 't', 'y', 'u', 'o', 'p']

const KEYS = [...WHITE, ...BLACK]

const KEYBOARD_TO_NOTES = {
    a: 'c4',
    w: 'cs4',
    s: 'd4',
    e: 'ds4',
    d: 'e4',
    f: 'f4',
    t: 'fs4',
    g: 'g4',
    y: 'gs4',
    h: 'a4',
    u: 'as4',
    j: 'b4',
    k: 'c5',
    o: 'cs5',
    l: 'd5',
    p: 'ds5'
};

const NOTES_TO_KEAYBOARD = {
    c4: 'a',
    cs4: 'w',
    d4: 's',
    ds4: 'e',
    e4: 'd',
    f4: 'f',
    fs4: 't',
    g4: 'g',
    gs4: 'y',
    a4: 'h',
    as4: 'u',
    b4: 'j',
    c5: 'k',
    cs5: 'o',
    d5: 'l',
    ds5: 'p'
}
export {
    NOTES,
    KEYBOARD_TO_NOTES,
    NOTES_TO_KEAYBOARD,
    KEYS
}