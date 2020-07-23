window.app.incrementCounter.call(window.app);
window.app.incrementCounter.call(window.app);
window.app.incrementCounter.call(window.app);
window.app.incrementCounter.call(window.app);
window.app.incrementCounter.call(window.app);
window.app.incrementCounter.call(window.app);
window.app.incrementCounter.call(window.app);
window.app.incrementCounter.call(window.app);
window.app.incrementCounter.call(window.app);
window.app.incrementCounter.call(window.app);

const counter1 = window.app.createCounter();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();

const counter2 = window.app.createCounter();
counter2.increment();
counter2.increment();
counter2.increment();
counter2.increment();
counter2.increment();
counter2.increment();
counter2.increment();
counter2.increment();
counter2.increment();
counter2.increment();
counter2.increment();
counter2.increment();
counter2.increment();
counter2.increment();
counter2.increment();

console.log('The current count for a is', window.app.counter);

console.log('The current count for b counter1 is', counter1.counter);
console.log('The current count for b counter2 is', counter2.counter);

console.log('There are a total of', window.app.globalIncrementer, 'counters in the b file!');