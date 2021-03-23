import {SAVE_APPROVAL} from "../configs/constants/actions";

export function saveApprovalAction (model) {
    return{
        type: SAVE_APPROVAL,
        model
    }
}

