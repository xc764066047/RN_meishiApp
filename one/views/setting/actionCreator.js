import {CHANGENEAR} from './const'

export default {
    changeNearAction(value){
        return {
            type:CHANGENEAR,
            value
        }
    }
}