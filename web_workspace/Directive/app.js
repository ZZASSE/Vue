//app.js
// => Root Component
import RawComponent from './raw.js'; //해당 Vue파일을 Import하는 동시에 이름을 명시
const {createApp} = Vue;

const template = `
<div>
    <!-- 자식 컴포넌트 추가 -->
    <raw-component/>
</div>
`;

createApp({
    template,
    components : {
        RawComponent, // 'raw-component' : RawComponent
    }
}).mount('#app');