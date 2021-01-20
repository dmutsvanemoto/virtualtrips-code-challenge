# Questions

Q1: Explain the output of the following code and why

```js
    setTimeout(function() {
      console.log("1");
    }, 100);
    console.log("2");
```

A1: The console will first print 2 followed by 1. The reason being that will wait the defined `100`ms before executing the 1st arg aka the function.

Q2: Explain the output of the following code and why

```js
    function foo(d) {
      if(d < 10) {
        foo(d+1);
      }
      console.log(d);
    }
    foo(0);
```

A2: `foo` will continue to be called while d is less than 10. The console will also output the value of d. The numbers outputed will range from 0 to 10 inclusive. Javascript retains the order in which functions were executed (order of execution). This means that when we first call `foo` the javascript engine will register the if condition followed by the console log and the 3rd item to be registered will be `foo(d+1)`. The items will get executed in that order.

Q3: If nothing is provided to `foo` we want the default response to be `5`. Explain the potential issue with the following code:

```js
    function foo(d) {
      d = d || 5;
      console.log(d);
    }
```

A3: `foo` will print 5 to the console when `d` has a value of 0. Javascript can treat `0` as falsey. To prevent this you can also explicitly check if `d` is 0 before defaulting to 5..

Q4: Explain the output of the following code and why

```js
    function foo(a) {
      return function(b) {
        return a + b;
      }
    }
    var bar = foo(1);
    console.log(bar(2))
```

A4: Javascript will return a new function that takes an arg (b). That returned function also has a local variable stored  with the value that was passed in when `foo` was executed.
So when we call `bar` we are actually executing that returned result. ie if we invoke `bar` with the value `2` then `3` will be returned.

Q5: Explain how the following function would be used

```js
    function double(a, done) {
      setTimeout(function() {
        done(a * 2);
      }, 100);
    }
```

A5: When double is call a timer will be created that will execute the function arg after `100ms`. Once the function passed into setTimeout is called then done will be invoked with the of `a * 2`. the arg `done` is refered to as a callback function.