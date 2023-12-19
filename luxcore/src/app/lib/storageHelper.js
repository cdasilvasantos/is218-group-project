import "client-only";

// ../lib/storageHelper.js

export function getLocalStorage(key) {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : null;
}

export function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}