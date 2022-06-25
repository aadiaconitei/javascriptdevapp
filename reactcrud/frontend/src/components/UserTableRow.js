import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const UserTableRow = (props) => {
const { _id, nume, prenume, email, telefon } = props.obj;

const deleteUser = () => {
	axios
	.delete(
"http://localhost:3002/users" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("User successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
	<td>{nume}</td>
    <td>{prenume}</td>
	<td>{email}</td>
	<td>{telefon}</td>
	<td>
		<Link className="edit-link"
		to={"/edit-user/" + _id}>
		Edit
		</Link>
		<Button onClick={deleteUser}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default UserTableRow;
