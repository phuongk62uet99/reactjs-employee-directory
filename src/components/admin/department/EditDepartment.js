import React, { useState, useEffect } from "react";
import { BrowserRouter as Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import FetchHelper from "../../../common/fetch-helper";

export default function EditDepartment({ match }) {
  const { id } = useParams();
  const [department, setDepartment] = useState([]);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    fetch(`http://localhost:3000/department/` + id, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((response) => {})
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    FetchHelper.fetchData({
      url: "http://localhost:3000/department/" + id,
      method: "GET",
    }).then(
      (jsonData) => {
        setDepartment(jsonData);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  return (
    <div className="form-w3layouts">
      <div className="row">
        <div className="col-lg-12">
          <section className="panel">
            <header className="panel-heading">Sửa thông tin của phòng</header>
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
                        defaultValue={department.name}
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
                        defaultValue={department.officephone}
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
                        defaultValue={department.manager}
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
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
