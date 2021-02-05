import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function EditEmployee() {
  const { id } = useParams();
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {};

  return (
    <div className="form-w3layouts">
      <div className="row">
        <div className="col-lg-12">
          <section className="panel">
            <header className="panel-heading">
              Sửa thông tin của người dùng EmployeeName
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
                      Tên người dùng
                    </label>
                    <div className="col-lg-6">
                      <input
                        className=" form-control"
                        defaultValue="EmployeeName"
                        name="nameBook"
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
                      Địa chỉ
                    </label>
                    <div className="col-lg-6">
                      <input
                        className=" form-control"
                        defaultValue="address.district"
                        name="bookType"
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
                      Công ty
                    </label>
                    <div className="col-lg-6">
                      <input
                        className="form-control "
                        defaultValue="{address.city}"
                        name="quantity"
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
                        defaultValue="{user.phone_number}"
                        name="img"
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
