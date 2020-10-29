/*
 * @Author: heinan 
 * @Date: 2020-10-29 09:27:40 
 * @Last Modified by:   heinan 
 * @Last Modified time: 2020-10-29 09:27:40 
 */
import cityarr from '@/assets/lib/city';

export default function () {
    let arr = {
        province_list: {},
        city_list: {},
        county_list: {}
    }
    let i = 11;
    for (let k in cityarr) {
        arr.province_list[Number(i + '0000')] = k;
        let n = 1;
        for (let key in cityarr[k]) {
            let str = n < 10 ? Number(i + '0' + n + '00') : Number(i + '' + n + '00')
            arr.city_list[str] = key
            n++;
            let count = 1;
            cityarr[k][key].forEach(item => {
                let s = count < 10 ? Number(i + '0' + n + '0' + count) : Number(i + '' + n + count)
                arr.county_list[s] = item;
                count++
            })
        }
        i++
    }
    return arr;
}
