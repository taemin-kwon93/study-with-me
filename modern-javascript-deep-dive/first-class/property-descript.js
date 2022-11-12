function square(number) {
  return number * number;
}

console.log(Object.getOwnPropertyDescriptors(square));
/** console
 * {
 *   length: { value: 1, writable: false, enumerable: false, configurable: true },
 *   name: {
 *     value: 'square',
 *     writable: false,
 *     enumerable: false,
 *     configurable: true
 *   },
 *   arguments: {
 *     value: null,
 *     writable: false,
 *     enumerable: false,
 *     configurable: false
 *   },
 *   caller: {
 *     value: null,
 *     writable: false,
 *     enumerable: false,
 *     configurable: false
 *   },
 *   prototype: { value: {}, writable: true, enumerable: false, configurable: false }
 * }
 */