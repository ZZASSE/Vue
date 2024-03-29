//event.js
let template = `
<div>
    <button type="button" v-on:click="upCounter(), printMsg($event)">Add 1</button>
    <p> The counter is : {{counter}}</p>
    <hr>
    <input type="number" v-model="num">
    <button type="button" v-on:click="increaseCounter(num)">Add {{num}}</button>
    <p> The counter is : {{sum}}</p>
    <hr>
    <form v-bind:style="[formStyle]" v-on:click="showAlert('form')">
        <div v-on:click="showAlert('div')">
            <p v-on:click="showAlert('p')">
                <a href="http://www.naver.com">네이버</a>
            </p>
            click div tag
        </div>
    </form>
    <hr>
    <input type="text"
            v-model="keyword"
            @keyup.enter="showAlert(keyword)">

</div>
`;

export default{
    template,
    data(){
        return {
            counter : 0,
            num : 0,
            sum : 0,
            keyword : '',
            formStyle : {
                border: '1px solid black',
            }
        }
    },
    methods : {
        upCounter(data){
            console.log(data);
            this.counter += 1; //this.data.counter 부분
        },
        printMsg(event){
            console.log(event);
        },
        increaseCounter(num){
            this.sum += num;
        },
        showAlert(tag){
            alert('click ' + tag);
        }
    }
}