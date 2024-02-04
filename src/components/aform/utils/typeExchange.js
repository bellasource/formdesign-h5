/*
 * @Author: linZeJian
 * @Date: 2022-08-24 10:53:55
 * @LastEditors: linZeJian
 * @LastEditTime: 2022-09-01 10:52:42
 * @Description: 
 */
export default function getTypeExchange(type) {
    switch (type) {
        case 'input':
            return 'avant-input'
        case 'password':
            return 'avant-input'
        case 'textarea':
            return 'avant-input'
        case 'number':
            return 'avant-number'
        case 'map':
            return 'avant-map'
        case 'radio':
            return 'avant-radio'
        case 'checkbox':
            return 'avant-checkbox'
        case 'select':
            return 'avant-picker'
        case 'cascader':
            return 'avant-cascader'
        case 'upload':
            return 'avant-upload'
        case 'date':
            return 'avant-datetime'
        case 'time':
            return 'avant-datetime'
        case 'datetime':
            return 'avant-datetime'
        case 'switch':
            return 'avant-switch'
        case 'rate':
            return 'avant-rate'
        case 'slider':
            return 'avant-slider'
        case 'dynamic':
            return 'avant-dynamic'
        case 'ueditor':
            return 'avant-ueditor'

    }
    return 'avant-input'
}