import Vue from 'vue'
import {
    Form, Button, Field, Swipe, SwipeItem, Icon, Sidebar, SidebarItem
    , Image as VanImage, Overlay, CellGroup, RadioGroup, Radio, AddressEdit, Area, AddressList, List, Cell, Uploader, Lazyload, Rate
} from 'vant'
import 'vant/lib/index.css'


function vueuse(arr) {
    arr.forEach(e => {
        Vue.use(e)
    })
}
let usearr = [Form, Button, Field,
    Swipe, SwipeItem, Icon, Sidebar,
    SidebarItem, VanImage, Overlay, CellGroup,
    RadioGroup, Radio, AddressEdit, Area, AddressList, List
    , Cell, Uploader, Lazyload, Rate
]
vueuse(usearr)