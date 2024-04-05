//userUpdate.js

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
            <button type="button" @click="updateUserInfo">저장</button>
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
    created(){
        let id = this.$route.query.id;
        this.getUserInfo(id);
    },
    methods : {
        async getUserInfo(id){
            this.userInfo = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
                                .then(res => res.json())
                                .catch(err => console.log(err));
            console.log(this.userInfo);                                
        },
        updateUserInfo(){
            let data = {
                id : this.userInfo.id,
                name : this.userInfo.name,
                username : this.userInfo.username,
                email : this.userInfo.email
            }
            console.log(data);

            fetch('https://jsonplaceholder.typicode.com/users/' + data.id, {
                method : 'PUT',
                headers : {
                    'Content-type' : 'application/json; charset=UTF-8'
                },
                body : JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data != null){
                    alert('정상적으로 수정되었습니다.');
                } else {
                    alert('정상적으로 수정되지 않았습니다.\n 데이터를 확인해주세요.');
                }
            })
            .catch(err => console.log(err));
        }
    }
}