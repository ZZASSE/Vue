//exam01.js => ModelComponent

let template = `
<div>
    <label for="inputName">이름 : </label>
    <input type="text" id="inputName" v-model.lazy="myName"><br>

    <label for="inputColor">좋아하는 색은 : </label>
    <input type="radio" v-model="myColor" value="red">빨강
    <input type="radio" v-model="myColor" value="green">녹색
    <input type="radio" v-model="myColor" value="blue">파란색
    <input type="radio" v-model="myColor" value="yellow">노란색
    <input type="radio" v-model="myColor" value="gray">회색

    <p> 내 이름은 {{myName}}이고, 좋아하는 색은 {{myName != '' ? myColor : ''}}입니다</p>
</div>
`;

export default{
    template,
    data(){
        return {
            myName : '',
            myColor : '',
        }
    }
}