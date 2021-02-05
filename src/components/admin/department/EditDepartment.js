import React, { useState, useEffect } from "react";
import { BrowserRouter as Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function EditDepartment() {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log("Data");
  };

  useEffect(() => {
    console.log("useEffect");
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
                        defaultValue={book.name}
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
                      Loại sách
                    </label>
                    <div className="col-lg-6">
                      <input
                        className=" form-control"
                        defaultValue="chua co du lieu"
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
                      Số lượng
                    </label>
                    <div className="col-lg-6">
                      <input
                        className="form-control "
                        defaultValue={book.quantity}
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
                      Ảnh
                    </label>
                    <div className="col-lg-6">
                      <input
                        className="form-control "
                        defaultValue="Chua lay duoc du lieu"
                        name="img"
                        type="text"
                        ref={register}
                      />
                    </div>
                  </div>

                  <div className="form-group ">
                    <label htmlFor="email" className="control-label col-lg-3">
                      Giá
                    </label>
                    <div className="col-lg-6">
                      <input
                        className="form-control "
                        defaultValue={book.price}
                        name="price"
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
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
