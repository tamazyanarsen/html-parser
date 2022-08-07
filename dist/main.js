"use strict";
class HtmlParser {
    constructor(template) {
        this.templateString = template;
    }
    testFunction() { console.log('test function'); }
    parseHTML() {
        console.log(this);
        const splitResult = this.templateString.split('<')
            .map(e => e.trim().replace('>', ''))
            .filter(e => !e.includes('/'));
        console.log('template.split(): ', splitResult);
        splitResult.forEach(el => {
            const eventStringList = el.split(' ').filter(e => e.includes('@'));
            if (eventStringList.length > 0) {
                console.log('eventString: ', eventStringList);
                eventStringList.forEach(eventString => {
                    const expression = eventString.slice(eventString.indexOf('{') + 1, eventString.indexOf('}'));
                    console.log('expression: ', expression);
                    console.log('this: ', this[expression]());
                });
            }
        });
    }
}
const template = document.getElementById('test-template');
const parser = new HtmlParser(template.innerHTML);
parser.parseHTML();
