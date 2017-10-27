import Header from './header/header.vue';
import Sideslip from './sideslip/sideslip.vue';
import Tabbar from './tabbar/tabbar.vue';
import Container from './tab-container/tab-container.vue';
import ItemsSlip from './items-slip/items-slip.vue';


import Alert from './message-box/alert.vue';
import Confirm from './message-box/confirm.vue';
import Prompt from './message-box/prompt.vue';

import LoadMore from './loadmore/loadmore.vue';

const Quxiu = {
    install(Vue,opstions) {
        Vue.component(Header.name,Header);
        Vue.component(Sideslip.name,Sideslip);
        Vue.component(Tabbar.name,Tabbar);
        Vue.component(Container.name,Container);
        Vue.component(ItemsSlip.name,ItemsSlip);

        Vue.component(Alert.name,Alert);
        Vue.component(Confirm.name,Confirm);
        Vue.component(Prompt.name,Prompt);

        Vue.component(LoadMore.name,LoadMore);
    }
}

export default Quxiu;