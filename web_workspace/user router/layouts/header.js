//header.js

let template = `
<header>
    <router-link v-bind:to="{ name : 'home' }">HOME</router-link>
    <router-link v-bind:to="{ path : '/userList' }">전체조회</router-link>
    <router-link v-bind:to="{ path : '/userInfo' }">단건조회</router-link>
    <router-link v-bind:to="{ path : '/userInsert' }">등록</router-link>
</header>
`;

export default{
    name : 'headerComponent',
    template
}