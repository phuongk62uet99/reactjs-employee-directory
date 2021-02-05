import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function AddDepartment() {
  // https://topdev.vn/blog/lam-sao-de-fetch-du-lieu-bang-react-hook/
  // Foreach loop in return statement of react

  const { register, handleSubmit, watch, errors } = useForm();
  const [data, setData] = useState({});
  const [page_size, setPage_size] = useState({});

  var dataFrom = {};
  const onSubmit = (data) => {};

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
                        name="author"
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
                        name="quantity"
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
                        Cancel
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
