import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import FetchHelper from "../../../common/fetch-helper";

export default function AddEmployee() {
  const { id } = useParams();
  const { register, handleSubmit, watch, errors } = useForm();
  const [departments, setDepartments] = useState([]);
  const [departmentID, setDepartmentID] = useState([]);
  useEffect(() => {
    FetchHelper.fetchData({
      url: "http://localhost:3000/department",
      method: "GET",
    }).then(
      (jsonData) => {
        setDepartments(jsonData);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);
  var dataEmployee = {
    name: "",
    photo: "",
    jobtitle: "",
    cellphone: "",
    email: "",
    department_id: {
      _id: "",
      name: "",
      officephone: "",
      manager: "",
      createdAt: "",
      updatedAt: "",
      __v: 0,
    },
  };
  const onSubmit = (data) => {
    dataEmployee.name = data.name;
    dataEmployee.cellphone = data.cellphone;
    dataEmployee.email = data.email;
    dataEmployee.jobtitle = data.jobtitle;
    dataEmployee.photo = data.photo;
    let id = data.department;
    console.log("ID : ", id);
    FetchHelper.fetchData({
      url: "http://localhost:3000/department/" + id,
      method: "GET",
    }).then(
      (jsonData) => {
        setDepartmentID(jsonData);
      },
      (err) => {
        console.log(err);
      }
    );

    dataEmployee.department_id.manager = departmentID.manager;
    dataEmployee.department_id._id = departmentID._id;
    dataEmployee.department_id.name = departmentID.name;
    dataEmployee.department_id.officephone = departmentID.officephone;
    dataEmployee.department_id.createdAt = departmentID.createdAt;
    dataEmployee.department_id.updatedAt = departmentID.updatedAt;

    JSON.stringify(dataEmployee.department_id);
    console.log(
      "JSON.stringify(dataEmployee) neww : ",
      JSON.stringify(dataEmployee)
    );
    fetch(`http://localhost:3000/employee`, {
      method: "POST",
      body: JSON.stringify(dataEmployee),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  var department = departments.map((department, index) => {
    return <option value={department._id}>{department.name}</option>;
  });

  return (
    <div className="form-w3layouts">
      <div className="row">
        <div className="col-lg-12">
          <section className="panel">
            <header className="panel-heading">Thêm người dùng</header>
            <div className="panel-body">
              <div className="form">
                <form
                  className="cmxform form-horizontal "
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="form-group ">
                    <label
                      htmlFor="firstname"
                      className="control-label col-lg-3"
                    >
                      Tên nhân viên
                    </label>
                    <div className="col-lg-6">
                      <input
                        className=" form-control"
                        name="name"
                        type="text"
                        ref={register}
                      />
                    </div>
                  </div>
                  <div className="form-group ">
                    <label
                      htmlFor="lastname"
                      className="control-label col-lg-3"
                    >
                      Ảnh
                    </label>
                    <div className="col-lg-6">
                      <input
                        className=" form-control"
                        name="photo"
                        type="text"
                        ref={register}
                      />
                    </div>
                  </div>
                  <div className="form-group ">
                    <label
                      htmlFor="username"
                      className="control-label col-lg-3"
                    >
                      Chức vụ
                    </label>
                    <div className="col-lg-6">
                      <input
                        className="form-control "
                        name="jobtitle"
                        type="text"
                        ref={register}
                      />
                    </div>
                  </div>
                  <div className="form-group ">
                    <label
                      htmlFor="password"
                      className="control-label col-lg-3"
                    >
                      Số điện thoại
                    </label>
                    <div className="col-lg-6">
                      <input
                        className="form-control "
                        name="cellphone"
                        type="text"
                        ref={register}
                      />
                    </div>
                  </div>

                  <div className="form-group ">
                    <label
                      htmlFor="password"
                      className="control-label col-lg-3"
                    >
                      email
                    </label>
                    <div className="col-lg-6">
                      <input
                        className="form-control "
                        name="email"
                        type="text"
                        ref={register}
                      />
                    </div>
                  </div>

                  <div className="form-group ">
                    <label
                      htmlFor="password"
                      className="control-label col-lg-3"
                    >
                      Phòng ban
                    </label>
                    <select
                      className="col-lg-6"
                      name="department"
                      ref={register}
                    >
                      {department}
                    </select>
                  </div>

                  <div className="form-group">
                    <div className="col-lg-offset-3 col-lg-6">
                      <button className="btn btn-primary" type="submit">
                        Save
                      </button>
                      <button className="btn btn-default" type="button">
                        <Link to="/books">Cancel</Link>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
