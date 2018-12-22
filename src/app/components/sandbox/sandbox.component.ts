import { Component } from '@angular/core';
import { Customer } from './Customer';

@Component({
    selector: 'sandbox',
    templateUrl: `./sandbox.component.html`,
    styleUrls: ['./sandbox.component.css']
})

// Export Sandbox Component
export class SandboxComponent {
    name = 'John Doe';
    age = 35;
    person = {firstname: 'Steve', lastname: 'Smith"'}
    myNumberArray:number[] =[1,2,3];
    customer:Customer;

    people = ['Rick', 'Carl', 'Derek'];

    constructor() {
        console.log('Constructor run...');
        this.age = 36;
        console.log('Constructor run...' + this.myNumberArray);
        this.customer = {
            id: 23,
            name: 'Mia',
            email: 'email'
        };
        console.log('Customer...' + this.customer);
    }
}

