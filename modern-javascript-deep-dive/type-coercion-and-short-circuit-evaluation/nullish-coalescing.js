let foo = null ?? 'default string';
console.log(foo); // default string

/**
 * undefined와 null을 제외한 Falsy값도 기본값으로 유효하다면,
 * 해당 Falsy값을 반환한다.
 */
let bar = '' ?? 'default string';
console.log(bar); // 공백 뜸 -> ''가 선택됐기 때문

/**
 * Falsy값(false, undefinde, null, 0, -0, NaN, '')이면 우항의 피연산자를 반환
 */
bar = '' || 'default string';
console.log(bar); // default string