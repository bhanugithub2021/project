import react, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";




const Home = () => {

    const [users, setUser] = useState([]);
    const loadUsers = () => {
        axios.get('http://localhost:3003/users').then((res) => {

            const APidata = res.data;
            setUser(APidata.reverse())
        })
    }
    useEffect(() =>
        loadUsers(), []

    )

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    };
    // const [users, setUser] = useState([]);

    // useEffect = (() => {

    //     debugger;
    //     axios.get("http://localhost:3003/users")
    //         .then(res => {
    //             console.log(res)
    //             setUser(res.data)
    //         })
    //         .catch(error => {
    //             console.log(error)

    //         })
    // })




    // }, []);

    // const loadUsers = async () => {
    //     const result = await axios.get("http://localhost:3003/users");
    //     console.log(result);
    // };

    return (
        <div class="col-md-9">

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">S.No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((users, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{users.name}</td>
                                <td>{users.username}</td>
                                <td>{users.email}</td>
                                <td>


                                    <NavLink className="btn btn-primary mr-2" to={`/users/edit/${users.id}`} role="button">Edit</NavLink>
                                    <button type="button" class="btn btn-danger" onClick={() => deleteUser(users.id)}>Delete</button>


                                </td>
                            </tr>
                        )
                        )
                    }
                </tbody>

            </table>

        </div>

    );
};

export default Home;


