//userInsert.js

let template = `
<div>
    <table>
        <tr>
            <th>id</th>
            <td><input type="text" v-model="userInfo.id" readonly></td>
        </tr>
        <tr>
            <th>name</th>
            <td><input type="text" v-model="userInfo.name"></td>
        </tr>
        <tr>
            <th>username</th>
            <td><input type="text" v-model="userInfo.username"></td>
        </tr>
        <tr>
            <th>email</th>
            <td><input type="text" v-model="userInfo.email"></td>
        </tr>
        <tr>
            <button type="button" @click="createUserInfo">저장</button>
        </tr>
    </table>
</div>
`;

export default{
    template,
    data(){
        return {
            userInfo : {
                id : '',
                name : '',
                username : '',
                email : ''
            }
        }
    },
    methods : {
        createUserInfo(){
            let data = {
                name : this.userInfo.name,
                username : this.userInfo.username,
                email : this.userInfo.email
            }

            fetch('https://jsonplaceholder.typicode.com/users', {
                method : 'POST',
                headers : {
                    'Content-type' : 'application/json; charset=UTF-8'
                },
                body : JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data != null){
                    alert('정상적으로 생성되었습니다.');
                    this.userInfo.id = data.id;
                } else {
                    alert('정상적으로 생성되지 않았습니다.\n 데이터를 확인해주세요.');
                }
            })
            .catch(err => console.log(err));
        }
    }
}