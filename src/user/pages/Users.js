import React from 'react'
import UsersList from "../components/UsersList";

export default function Users() {

    const USERS = [
        {
            id: "u1",
            name: "K1",
            image: "https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/62079463_593063914516568_3281052004201267200_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=yLnVjKStVwEAX8buYmD&_nc_ht=scontent.fdel8-1.fna&oh=ebef17b8f316497a28ab713ba8b4a966&oe=5FF59F60",
            places: 3
        },
        {
            id: "u2",
            name: "K2",
            image: "https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/50451864_521080198381607_5269929506461712384_o.jpg?_nc_cat=107&ccb=2&_nc_sid=174925&_nc_ohc=2LOBAMIZPsoAX-jnzPj&_nc_ht=scontent.fdel8-1.fna&oh=95e3b3a32c797184ac02a5237339ada0&oe=5FF3A096",
            places: 2
        },
    ];

    return (
        <UsersList items={USERS} />
    )
}
