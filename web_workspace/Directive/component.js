//component.js

let component = {
    name : '',      //컴포넌트 이름으로 구분
    template : ``,  //View => BackTick을 쓴다
    
    //ex)환율 : 은행이 가지고 있는 환율정보(computed), 내가 입력하는 금액정보(data)
    data(){},       //DATA : CRUD => 직접 수정 가능
    computed : {},  //DATA : Read Only => 직접 수정 불가

    methods : {},   //Code : 해당 컴포넌트 내에 동작해야하는 모든 기능들 집합
    watch : {},     //Data를 감시 => Data변경됨으로인해 처리해줘야 할 프로세스
    components : {} //자식 컴포넌트 : Root컴포넌트는 반드시 해당 프로퍼티가 필요하다(각각의 컴포넌트들을 묶고있는 최상위 컴포넌트이기 때문에 자식 컴포넌트들을 표기해줘야한다.)
};