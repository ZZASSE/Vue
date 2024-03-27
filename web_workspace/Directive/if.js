//if.js
let template = `
    <div>
        <label>
            <input type="checkbox" v-model="myVisible">표시
        </label>
        <p v-if="myVisible">체크박스가 ON</p>
        <p v-else>체크박스가 OFF</p>
        <p v-show="myVisible">show 디렉티브</p>
        <hr>
        <label>
            등급 : <input type="text" v-model="score">
        </label>
        <p v-if="score >= 90">A</p>
        <p v-else-if="score >= 80">B</p>
        <p v-else-if="score >= 70">C</p>
        <p v-else-if="score >= 60">D</p>
        <p v-else>F</p>

        <div>
            <template v-for="dan in 9" :key="dan">
                <template v-if="dan%2 == 0">
                    <p v-for="num in 9" :key="num">
                        {{dan}} x {{num}} = {{ dan * num}}
                    </p>
                </template>
            </template>
        </div>
    </div>
`;

export default{
    template,
    data(){
        return{
            myVisible : false,
            score : 0,
        }
    }
}