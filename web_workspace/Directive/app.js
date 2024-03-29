//app.js
// => Root Component
//import RawComponent from './raw.js'; //해당 Vue파일을 Import하는 동시에 이름을 명시
//import inputComponent from './input.js';
//import ModelComponent from './exam01.js';
//import ListComponent from './list.js';
//import ForComponent from './exam02.js';
//import IfComponent from './if.js';
//import EventComponent from './event.js';
import WatchComponent from './watch.js';
const {createApp} = Vue;

const template = `
<div>
    <!-- 자식 컴포넌트 추가 -->
    <raw-component/>
    <input-component/>
    <model-component/>
    <list-component/>
    <for-component/>
    <if-component/>
    <event-component/>
    <watch-component/>
</div>
`;
 
createApp({
    template,
    components : {
        //RawComponent, // 'raw-component' : RawComponent
        //inputComponent,
        //ModelComponent,
        //ListComponent,
        //ForComponent,
        //IfComponent,
        //EventComponent,
        WatchComponent,
    }
}).mount('#app');