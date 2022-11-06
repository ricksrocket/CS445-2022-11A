/*eslint-disable*/

/*
{
    'eat': [function1, function2],
    'study': [function3, function4, function5]
 }

 This Observable/Subject has two methods:
 
 on(event, fn): register an observer
 
 emit(event, message): when this method is called, all observers should be invoked
 
 Once you finish, use the following code to test:
 */


class Subject {
    constructor() {
        this.observerList = {};
    }
    on1(event, fn) {
        this.event = event
        console.log(this.observerList.event)
        // this.event = event;
        this.observerList[this.event] = [fn]
        console.log("length", this.observerList[this.event].length)

        console.log(this.observerList);
    }

    on(event, fn) {
        this.event = event
        if (this.observerList[this.event]) {
            this.observerList[this.event].push(fn);
        }
        else {
            this.observerList[this.event] = [fn]
        }

        console.log(this.observerList);
    }

    emit(event, msg) {
        this.msg = msg;
        this.event = event;
        this.observerList[this.event].forEach(fn => {
            fn(this.msg)

        });

    }

}

const subject = new Subject();
subject.on('eat', console.log); // register an observer


subject.on('study', console.log); // register an observer


function foo(msg) {
    console.log('foo: ' + msg);
}
subject.on('eat', foo);

subject.on('study', foo);
subject.emit('eat', 'Corn');
//output for Line above: subject.emit('eat', 'Corn');
//Corn
//foo: Corn
subject.emit('study', 'cs445');
 //output for Line above: subject.emit('study', 'cs445');
 //cs445
 //foo: cs445