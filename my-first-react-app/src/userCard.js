function UserCard({name, location, role, isActive}) {
    return (
       <div className = "userCard">
       <p> My name is {name} </p>
        <p>I am from {location} </p>
         <p>I am a {role} </p>
         <p className = {isActive ? "badge active" : "badge inactive"}>{isActive ?  "active": "inactive"}</p>
       </div>
    )
}
export default UserCard