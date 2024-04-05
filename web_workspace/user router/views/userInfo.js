let template = `
<div>
    <table>
        <tr>
            <th>id</th>
            <td>{{userInfo.id}}</td>
        </tr>
        <tr>
            <th>name</th>
            <td>{{userInfo.name}}</td>
        </tr>
        <tr>
            <th>username</th>
            <td>{{userInfo.username}}</td>
        </tr>
        <tr>
            <th>email</th>
            <td>{{userInfo.email}}</td>
        </tr>
        <tr>
            <button type="button" @click="goToUpdateForm()">수정</button>
            <button type="button" @click="delUserInfo()">삭제</button>
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
        let id= this.$route.query.id;
        this.getUserInfo(id);
    },
    methods : {
        async getUserInfo(id){
            this.userInfo = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
                                    .then(res => res.json())
                                    .catch(err => console.log(err));
        },
        goToUpdateForm(){
            this.$router.push({ name : 'userUpdate',
                                query : { id : this.userInfo.id }})
        },
        delUserInfo(){
            fetch('https://jsonplaceholder.typicode.com/users/' + this.userInfo.id, {
                method : 'DELETE',
            })
            .then(res => {
                console.log(res.status);
                return res.json();
            })
            .then(data => {
                let result = Object.keys(data).length;
                if (result == 0){
                    console.log('정상적으로 삭제되었습니다.');
                } else {
                    console.log('삭제되지 않았습니다.');
                }
            })
            .catch(err => console.log(err));
        }
    }
}