let template = `
    <div>
        <!-- text 속성 -->
        <p v-text="'Hello, ' + title + ((new Date()).getFullYear())"/>
        <p> Hello, {{ title + ' plus !!' }}! Today is...</p>
        
        <!-- bind 디렉티브 -->
        <p v-bind:id="postId"
                name="temp"
                text="Testing"/>
        <img v-bind:src="fileName">
        <a v-bind:href="url">링크</a>
        
        <!-- bind 디렉티브 - style 사용 시, 객체 형태로 포장하고{}, 카멜표기법으로 바꿔줘야한다.-->
        <p style="color : blue;">문자색 직접 지정</p>
        <p v-bind:style="{ color : myColor }">vue 방식</p>
        <p style="color : blue; font-size : 200%;"> 두 가지 소성을 직접 지정</p>
        <p v-bind:style="{ color : myColor, fontSize : myFont }">vue 방식</p>
        <p v-bind:style="myStyle">vue 방식</p>
        
        <!-- bind 디렉티브 - class -->
        <p class="emphasis">직접 강조</p>
        <p v-bind:class="myClass">Vue 활용 강조 </p>
        <p class="bg emphasis">직접 복수 클래스 적용</p>
        <p v-bind:class="[bgClass, myClass]">Vue 활용 복수 적용</p>
        <p v-bind:class="{'text' : isSelected}">class적용여부 제어</p>

    </div>
`;
 
export default{
    template,
    data(){
        return {
            title : 'Vue.js',
            postId : 'raw',
            fileName : '시맨틱-태그_html.webp',
            url : 'http://www.naver.com',
            myColor : 'blue',
            myFont : '100px',
            myStyle : { color : 'green',
                     fontSize : '100px'
                     },
            myClass : '',
            bgClass : '',
            isSelected : false                     
        }
    }
}