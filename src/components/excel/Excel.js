import { $ } from '@core/dom';

export class Excel {
    constructor(selector, options) {
        this.$el = $(selector);
        this.components = options.components || [];
    }

    getRoot() {
        const $root = $.create('div', 'excel');
        // const $root = document.createElement('div');
        // $root.classList.add('excel');

        this.components = this.components.map(Component => {
            const $el = $.create('div', Component.className)
            const component = new Component($el);
            // debug
            if (component.name) {
                window['c' + component.name] = component
            }
            $el.html(component.toHTML());
            $root.append($el);
            return component
        })

        return $root;
    }

    render() {
        // console.log(this.$el);
        // this.$el.insertAdjacentHTML('afterbegin', `<h1>TEXT</h1>`);
        // const node = document.createElement('h1');
        // node.textContent = ' test'
        this.$el.append(this.getRoot());
        this.components.forEach(component => component.init())
    }
}