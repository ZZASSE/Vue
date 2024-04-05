import router from './router/router.js';

import HeaderComponent from './layouts/header.js';
import FooterComponent from './layouts/footer.js';

const { createApp } = Vue

let template = `
<div>
    <HeaderComponent/>
    <FooterComponent/>
    <router-view :key="$route.fullPath" />
</div>
`;

createApp({
    template,
    components : {
        HeaderComponent,
        FooterComponent
    }
})
.use(router)
.mount('#app');