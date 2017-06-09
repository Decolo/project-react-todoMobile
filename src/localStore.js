export function save(key, value) {
    console.log('save')
    return window.localStorage.setItem(key, JSON.stringify(value))
}

export function load(key) {
    console.log('load')
    return JSON.parse(window.localStorage.getItem(key))
}