export function deepCopyByJson(obj) {
    return JSON.parse(JSON.stringify(obj))
}