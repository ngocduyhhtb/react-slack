import * as Types from '../constants/index';

const roomID = null;

const room = (state = roomID, action) => {
    switch (action.type) {
        case Types.ENTER_ROOM: {
            state = action.roomId;
            return [...state];
        }
        default:{
            return state;
        }
    }
}
export default room;