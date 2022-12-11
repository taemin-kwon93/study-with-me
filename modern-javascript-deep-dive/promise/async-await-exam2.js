async function foo() {
  const a = await new Promise(resolve => setTimeout(() => resolve(1), 1000));
  const b = await new Promise(resolve => setTimeout(() => resolve(a), 800));
  const c = await new Promise(resolve => setTimeout(() => resolve(b+1), 500));
  console.log('[a,b,c]: ', [a, b, c]); // [a,b,c]:  [ 1, 1, 2 ]
}

async function bar() {
  const ABC = await Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 1000)),
    new Promise(resolve => setTimeout(() => resolve(2), 800)),
    new Promise(resolve => setTimeout(() => resolve(3), 500)),
  ]);

  console.log('ABC: ',ABC); // ABC:  [ 1, 2, 3 ]
}

foo();
bar();
