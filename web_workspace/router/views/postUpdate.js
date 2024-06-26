//postUpdate.js
let template = `
<div>
    <table>
        <tr>
            <th>id</th>
            <td><input type="text" v-model="post.id" readonly></td>
        </tr>
        <tr>
            <th>title</th>
            <td><input type="text" v-model="post.title"></td>
        </tr>
        <tr>
            <th>userId</th>
            <td><input type="text" v-model="post.userId"></td>
        </tr>
        <tr>
            <th>body</th>
            <td><textarea v-model="post.body" /></td>
        </tr>
        <tr>
            <button type="button" @click="updatePostInfo">저장</button>
        </tr>
    </table>
</div>
`;

export default{
    template,
    data(){
        return {
            post : {
                id : '',
                title : '',
                userId : '',
                body : ''
            }
        }
    },
    created(){
        let id = this.$route.query.id;
        this.getPostInfo(id);
    },
    methods : {
        async getPostInfo(id){
            this.post = await fetch('https://jsonplaceholder.typicode.com/posts/'+ id)
                                    .then(res => res.json())
                                    .catch(err => console.log(err));
        },
        updatePostInfo(){
            let data = {
                id : this.post.id,
                title : this.post.title,
                body : this.post.body,
                userId : this.post.userId
            }

            fetch('https://jsonplaceholder.typicode.com/posts/' + data.id, {
                method : 'PUT',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                body : JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data != null){
                    alert('정상적으로 수정되었습니다.');
                }else{
                    alert('수정되지 않았습니다.\n 데이터를 확인해주세요.');
                }
            })
            .catch(err => console.log(err));
        }
    }
}