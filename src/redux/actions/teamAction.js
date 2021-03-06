import axios from "axios";
import {baseUrl} from "../../config/config";
import {GET_MY_TEAMS} from "../types";
import Swal from "sweetalert2";


export const getSingleUser = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`${baseUrl}/team/myTeams`, {
            params: {
                id
            }
        });
        dispatch({
            type: GET_MY_TEAMS,
            payload: response.data,
        });
    };
};

export const createTeam = (name, image, sport_id, creator_id) => {
    return async (dispatch) => {
        const response = await axios.post(`${baseUrl}/team`, {
            name, image, sport_id, creator_id
        })
        Swal.fire({
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
        });
        dispatch({
            type: GET_MY_TEAMS,
            payload: response.data,
        });
    }
}