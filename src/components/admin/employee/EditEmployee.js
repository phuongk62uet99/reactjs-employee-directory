import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import FetchHelper from "../../../common/fetch-helper";

export default function EditEmployee() {
  const { id } = useParams();
  const { register, handleSubmit, watch, errors } = useForm();
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    FetchHelper.fetchData({
      url: "http://localhost:3000/employee/" + id,
      method: "GET",
    }).then(
      (jsonData) => {
        setEmployee(jsonData);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);
  const onSubmit = (data) => {
    console.log("Data : ", data);
       fetch(`http://localhost:3000/employee/` + id, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((response) =>
       {})
      .catch((error) => console.log(error));
  };
  console.log("employee : ", employee);
  return (
    <div className="form-w3layouts">
      <div className="row">
        <div className="col-lg-12">
          <section className="panel">
            <header className="panel-heading">
              Sửa thông tin của người dùng {employee.name}
            </header>
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
                        defaultValue={employee.name}
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
                        defaultValue={employee.photo}
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
                        defaultValue={employee.jobtitle}
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
                        defaultValue={employee.cellphone}
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
                        defaultValue={employee.email}
                        name="email"
                        type="text"
                        ref={register}
                      />
                    </div>
                  </div>



                  <div className="form-group">
                    <div className="col-lg-offset-3 col-lg-6">
                      <button className="btn btn-primary" type="submit">
                        Save
                      </button>
                      <button className="btn btn-default" type="button">
                        <Link to="/employees">Cancel</Link>
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
