/*
라우팅(Routing)
: 특정 엔드 포인트에 대한 클라이언트 요청에 애플리케이션이 응답하는 방법을 결정하는 것
    *엔드 포인트 = 메소드(Method) + 경로(Path)

    메소드 종류
    GET
    POST
    
    *REST
    =URI(자원) + Method(기능)
    =Data Format => JSON Format
    => GET(조회), POST(등록), PUT(수정), DELETE(삭제)
    단건조회    : GET + empInfo?employeeId=100          => REST방식이라면 : GET     + emps/100
    전체조회    : GET + empList                         => REST방식이라면 : GET     + emps
    등록        : POST + empInsert                      => REST방식이라면 : POST    + emps
    수정        : POST + empUpdate                      => REST방식이라면 : PUT     + emps/100
    삭제        : GET + empDelete?employeeId=100        => REST방식이라면 : DELETE  + emps/100

    만약 모든 서버 전송방식을 REST를 쓴다면 보통 Restful Server라고 한다.
*/

//https://jsonplaceholder.typicode.com/posts
//전체조회
fetch('https://jsonplaceholder.typicode.com/posts/' + 1)
.then(res => res.json())
.then(data => {
    console.log(data);

})
.catch(err => console.log(err));

//등록 JSON : 객체 아니면 배열( {} or [] )
let post = {
    id : 100,
    title : 'Hello!!',
    userId : 10,
    body : 'Today is Friday!!!'
}

fetch('https://jsonplaceholder.typicode.com/posts/', {
    method : 'post',
    headers : {
        'Content-type' : 'application/json'
    },
    body : JSON.stringify(post)
})
.then(res => res.json())
.then(data => {
    console.log(data);
})
.catch(err => console.log(err));

fetch('https://jsonplaceholder.typicode.com/posts/'+1,{
    method : 'put',
    headers : {
        'Content-type' : 'application/json'
    },
    body : JSON.stringify({
        title : 'Welcome!',
        userId : 20,
        body : 'Test!'
    })
})
.then(res => res.json())
.then(data => {
    console.log(data);
})
.catch(err => console.log(err));

fetch('https://jsonplaceholder.typicode.com/posts/'+1,{
    method : 'delete',
})
.then(res => res.json())
.then(data => {
    console.log(data);
})
.catch(err => console.log(err));