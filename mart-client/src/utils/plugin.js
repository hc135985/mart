/*
 * @Author: heinan 
 * @Date: 2020-10-29 09:20:26 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-10-29 09:22:51
 */
import ui from 'hc-vue-ui'
import {
    Form,
    Button,
    Field,
    Swipe,
    SwipeItem,
    Icon,
    Sidebar,
    SidebarItem,
    Image as VanImage,
    Overlay,
    CellGroup,
    RadioGroup,
    Radio,
    AddressEdit,
    Area,
    AddressList,
    List,
    Cell,
    Uploader,
    Lazyload,
    Rate
} from 'vant'

export default {
    install(Vue) {
        const VantComponents = [Form, Button, Field, Swipe, SwipeItem, Icon, Sidebar, SidebarItem, VanImage, Overlay, CellGroup, RadioGroup, Radio, AddressEdit, Area, AddressList, List, Cell, Uploader, Lazyload, Rate]
        VantComponents.forEach(comp => Vue.use(comp))
        Vue.use(ui.BScroll)
    }
}