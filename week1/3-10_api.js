// api 주소: 누구한테 말 걸건지를 정함

async function getData() {
    let rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    let jsonResponse = await rawResponse.json();
    console.log(jsonResponse);
}
// let response = fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
//     console.log(res)
// );