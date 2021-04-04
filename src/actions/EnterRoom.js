import * as Types from '../constants/index';

export const EnterRoom = (roomId) =>{
    return{
        type: Types.ENTER_ROOM,
        roomId
    }
}