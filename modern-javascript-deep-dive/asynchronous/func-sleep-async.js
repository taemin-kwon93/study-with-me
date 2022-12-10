function foo() {
  console.log('foo');
}

function bar() {
  console.log('bar');
}

setTimeout(foo, 2*1000);
bar();

/** console
 * bar
 * foo
 */