/**
 * fetch 함수는 HTTP 응답을 나타내는 Response 객체를 래핑한 Promise 객체를 반환한다.
 * 아래의 예제는 fetch 함수로 GET 요청을 전송한다.
 * fetch 함수에 첫 번째 인수로 HTTP 요청을 전송할 URL만 전달하면 GET 요청을 보낸다.
 */
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => console.log("response: ", response));

/**
 * response:  Response {
 *   [Symbol(realm)]: null,
 *   [Symbol(state)]: {
 *     aborted: false,
 *     rangeRequested: false,
 *     timingAllowPassed: true,
 *     requestIncludesCredentials: true,
 *     type: 'default',
 *     status: 200,
 *     timingInfo: {
 *       startTime: 85.26404213905334,
 *       redirectStartTime: 0,
 *       redirectEndTime: 0,
 *       postRedirectStartTime: 85.26404213905334,
 *       finalServiceWorkerStartTime: 0,
 *       finalNetworkResponseStartTime: 0,
 *       finalNetworkRequestStartTime: 0,
 *       endTime: 0,
 *       encodedBodySize: 71,
 *       decodedBodySize: 0,
 *       finalConnectionTimingInfo: null
 *     },
 *     cacheState: '',
 *     statusText: 'OK',
 *     headersList: HeadersList {
 *       [Symbol(headers map)]: [Map],
 *       [Symbol(headers map sorted)]: null
 *     },
 *     urlList: [ [URL] ],
 *     body: { stream: undefined }
 *   },
 *   [Symbol(headers)]: HeadersList {
 *     [Symbol(headers map)]: Map(25) {
 *       'date' => 'Sun, 11 Dec 2022 07:29:09 GMT',
 *       'content-type' => 'application/json; charset=utf-8',
 *       'transfer-encoding' => 'chunked',
 *       'connection' => 'keep-alive',
 *       'x-powered-by' => 'Express',
 *       'x-ratelimit-limit' => '1000',
 *       'x-ratelimit-remaining' => '999',
 *       'x-ratelimit-reset' => '1668549278',
 *       'vary' => 'Origin, Accept-Encoding',
 *       'access-control-allow-credentials' => 'true',
 *       'cache-control' => 'max-age=43200',
 *       'pragma' => 'no-cache',
 *       'expires' => '-1',
 *       'x-content-type-options' => 'nosniff',
 *       'etag' => 'W/"53-hfEnumeNh6YirfjyjaujcOPPT+s"',
 *       'via' => '1.1 vegur',
 *       'cf-cache-status' => 'HIT',
 *       'age' => '13939',
 *       'server-timing' => 'cf-q-config;dur=5.9999947552569e-06',
 *       'report-to' => '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=jh8x14rSB5fviVtjVWsXy03E6yNxfnPYpWs81K%2B29flrabd85hKHnd%2BCM3KclIUMUvJy5A6%2FKbFGMY3HjMa9Pq1YxnGPYF62EK5uhfQSXpZBC0cskQrZguAJhVG3zq4A02llPJozM22KraMA2AMQ"}],"group":"cf-nel","max_age":604800}',
 *       'nel' => '{"success_fraction":0,"report_to":"cf-nel","max_age":604800}',
 *       'server' => 'cloudflare',
 *       'cf-ray' => '777c81f5384719e4-KIX',
 *       'content-encoding' => 'br',
 *       'alt-svc' => 'h3=":443"; ma=86400, h3-29=":443"; ma=86400'
 *     },
 *     [Symbol(headers map sorted)]: null
 *   }
 * }
 */