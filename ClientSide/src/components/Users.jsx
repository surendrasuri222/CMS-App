import React, { useEffect, useState } from 'react'
import $ from "jquery";
import "tablesorter";
import UserModal from './UserModal';
import { NavLink } from 'react-router-dom';


const Users = () => {

    useEffect(() => {
        $("#sort-table").tablesorter({
            sortList: [[0, 0], [1, 0]]
        });
    }, []);

    const [users, setUsers] = useState([{
        fullname: "Sourav Sagar", email: "Domp@", group: "Admin"
    }])


    return (
        <>
            <section>
                <div class="container shadow-lg p-3 mb-5 bg-white rounded p-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className="book-header">
                                        <div className="row">
                                            <div className=" col xs={6} sm={6} md={6} lg={6}">
                                                <i className="glyphicon glyphicon-file"></i> Users
                                            </div>
                                            <div className="col xs={6} sm={6} md={6} lg={6} d-flex flex-row-reverse">
                                                <UserModal />
                                            </div>
                                        </div>
                                    </h1>
                                </div>


                            </div>

                            <ol class="breadcrumb">
                                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                                <li class="active">Users</li>
                            </ol>

                            <table id="sort-table" class="table table-striped tablesorter table-hover">
                                <thead>
                                    <tr>

                                        <th>Full Name <i class="glyphicon glyphicon-chevron-down"></i></th>
                                        <th>Email <i class="glyphicon glyphicon-chevron-down"></i></th>
                                        <th>Group <i class="glyphicon glyphicon-chevron-down"></i></th>
                                        <th>Action <i class="glyphicon glyphicon-chevron-down"></i></th>
                                    </tr>
                                </thead>

                                <tbody>




                                    {
                                        users.map((user) => {
                                            return (
                                                <tr className='p-2'>
                                                    <td><NavLink to="/users/user">{user.fullname}</NavLink></td>
                                                    <td>{user.email}</td>
                                                    <td>{user.group}</td>
                                                    <td className='ps-4'><button className='btn btn-default bi bi-trash3-fill p-2 '></button></td>                                                    </tr>)

                                        })
                                    }
                                </tbody>
                            </table>
                            <div className="d-flex justify-content-center h-2 ">
                                <nav aria-label="Page navigation">
                                    <ul class="pagination">
                                        <li>
                                            <a href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                            </a>
                                        </li>
                                        <li><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li>
                                            <a href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                        </div>
                    </div>
                </div>

            </section >

            <footer>
                <p>Copyright 2017, All Rights Reserved</p>
            </footer>
        </>
    )
}

export default Users
