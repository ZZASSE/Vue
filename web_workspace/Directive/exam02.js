//exam02.js => ForComponent

let template =`
<div>
    <p v-for="num in 5" v-bind:key="num">
        <span v-for="num3 in (5 - num)" v-bind:key="num3">
            -
        </span>
        <span v-for="num2 in num" v-bind:key="num2">
            *
        </span>
    </p>
    <p v-for="num in 5" v-bind:key="num">
        <span v-for="num3 in num" v-bind:key="num3">
            -
        </span>
        <span v-for="num2 in (5-num)" v-bind:key="num2">
            *
        </span>
    </p>
</div>

<div>
    <p v-for="num in 9" v-bind:key="num">
        <span v-for="num2 in 9" v-bind:key="num2">
        {{num}} X {{num2}} = {{num*num2}}
        <br>
    </p>
</div>
`;


export default{
    template,
    data(){
        return {
          
        }
    }
}