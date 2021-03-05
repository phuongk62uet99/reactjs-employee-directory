import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function DepartmentAdd() {
  const { register, handleSubmit, watch, errors } = useForm();

  var dataFrom = {
    name: "",
    officephone: "",
    manager: "",
  };
  const onSubmit = (data) => {
    console.log("Data : ", data);
    fetch(`http://localhost:3000/department`, {
      method: "POST",
      body: JSON.stringify(data),
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

  useEffect(() => {}, []);

  return (
    <div className="form-w3layouts">
      <div className="row">
        <div className="col-lg-12">
          <section className="panel">
            <header className="panel-heading">Thêm phòng ban mới</header>
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
                      Tên phòng
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
                      Số điện thoại
                    </label>
                    <div className="col-lg-6">
                      <input
                        className=" form-control"
                        name="officephone"
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
                      Số lượng
                    </label>
                    <div className="col-lg-6">
                      <input
                        className="form-control "
                        name="manager"
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
                        <Link to="/books">Cancel</Link>
                      </button>
                    </div>
                  </div>
                </form>
                {/* <form
                  className="cmxform form-horizontal "
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="form-group ">
                    <label
                      htmlFor="firstname"
                      className="control-label col-lg-3"
                    >
                      Tên phòng ban
                    </label>
                    <div className="col-lg-6">
                      <input
                        className=" form-control"
                        id="firstname"
                        name="name"
                        type="text"
                        ref={register}
                      />
                    </div>
                  </div>
                  <div className="form-group ">
                    <label
                      htmlFor="firstname"
                      className="control-label col-lg-3"
                    >
                      Điện thoại văn phòng
                    </label>
                    <div className="col-lg-6">
                      <input
                        className=" form-control"
                        id="firstname"
                        name="officephone"
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
                      Tên giám đốc
                    </label>
                    <div className="col-lg-6">
                      <input
                        className="form-control "
                        id="username"
                        name="manager"
                        type="text"
                        ref={register}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-lg-offset-3 col-lg-6">
                      <Link>
                        <button className="btn btn-primary" type="submit">
                          Save
                        </button>
                      </Link>
                      <Link to="/departments">
                        <button className="btn btn-default" type="button">
                          Cancel
                        </button>
                      </Link>
                    </div>
                  </div>
                </form> */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
