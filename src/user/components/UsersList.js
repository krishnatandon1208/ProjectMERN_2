import React from 'react';
import './UsersList.css';
import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card';

export default function UsersList(props) {
	if (props.items.length === 0) {
		return (
			<div className="center">
				<Card>
					<h2>No Users found</h2>
				</Card>
			</div>
		);
	} else {
		return (
			<ul className="users-list">
				{props.items.map((user) => (
					<UserItem
						key={user.id} //React requires to maintain the list
						id={user.id} //Unique id for all users
						name={user.name}
						image={user.image}
						placeCount={user.places} //Places the user has visited
					/>
				))}
			</ul>
		);
	}
}
