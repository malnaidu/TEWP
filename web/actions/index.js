import axios from "axios"
export const AJAX_ACTION = "AJAX_ACTION";

export function ajaxAction(computerId) {
	axios.get(`http://localhost:3001/computers/${computerId}`)
	.then(function(response) {console.log(response.data)})
}