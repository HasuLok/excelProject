 export class Emitter {
    constructor() {
        this.listeners = {}
    }
        // Уведомляем слушателя если он есть
    emit(event, ...args) {
        if (!Array.isArray(this.listeners[event])) {
            return false
        } 
        this.listeners[event].forEach(listener => {
            listener(...args)
        }) 
    }
        // Подписываемся на уведомление, добавляем нвого слушателя
    subscribe(event, fn) {
        this.listeners[event] = this.listeners[event] || [];
        this.listeners[event].push(fn);
        return () => {
            this.listeners[event] = 
                this.listeners[event].filter(listener => listener !== fn)
        }
    }
}


// Example
// const emitter = new Emitter()

// const unsub = emitter.subscribe('max', data => console.log('SUB:', data))

// setTimeout(() => {
//     emitter.emit('max', 'After 2 seconds')
// }, 2000)

// setTimeout(() => {
//     unsub()
// }, 3000)

// setTimeout(() => {
//     emitter.emit('max', 'After 4 seconds')
// }, 4000)
