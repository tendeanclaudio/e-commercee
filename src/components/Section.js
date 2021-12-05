import React from "react";

const Section = () => {
    return(
        <section className="py-2">
            <div className="container">
                <div className="row gx-3 gx-lg-4 row-cols-4 row-cols-md-4 row-cols-xl-3 justify-content-center">
                    <div className="col mb-5">
                        <div className="card h-100">
                            <div className="d-grid gap-2 d-md-flex my-3">
                                <button type="button" className="btn btn-light form-control text-start">NEW</button>
                                <button type="button" className="btn btn-light"><i className="bi bi-list-ul"></i></button>
                                <button type="button" className="btn btn-light"><i className="bi bi-heart"></i></button>
                            </div>

                            <img className="card-img-top" src="https://cbsnews3.cbsistatic.com/hub/i/2021/09/14/27d0f46a-73ce-4efb-bc44-088fabea41af/iphoneheader.jpg" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">IPHONE 12PRO MAX 128GB</h5>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star text-warning"></i>

                                    <form className="d-flex">
                                        <input className="form-control me-1 my-3" placeholder="Rp300.000" aria-label="Price" />
                                        <button className="btn btn-outline-success my-3" type="submit"><i className="bi bi-cart3"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <div className="d-grid gap-2 d-md-flex my-3">
                                <button type="button" className="btn btn-light form-control text-start">NEW</button>
                                <button type="button" className="btn btn-light"><i className="bi bi-list-ul"></i></button>
                                <button type="button" className="btn btn-light"><i className="bi bi-heart"></i></button>
                            </div>

                            <img className="card-img-top" src="https://cbsnews3.cbsistatic.com/hub/i/2021/09/14/27d0f46a-73ce-4efb-bc44-088fabea41af/iphoneheader.jpg" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">IPHONE 12PRO MAX 256GB</h5>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-half text-warning"></i>

                                    <form className="d-flex">
                                        <input className="form-control me-1 my-3" placeholder="Rp600.000" aria-label="Price" />
                                        <button className="btn btn-outline-success my-3" type="submit"><i className="bi bi-cart3"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            <div className="d-grid gap-2 d-md-flex my-3">
                                <button type="button" className="btn btn-light form-control text-start">NEW</button>
                                <button type="button" className="btn btn-light"><i className="bi bi-list-ul"></i></button>
                                <button type="button" className="btn btn-light"><i className="bi bi-heart"></i></button>
                            </div>

                            <img className="card-img-top" src="https://cbsnews3.cbsistatic.com/hub/i/2021/09/14/27d0f46a-73ce-4efb-bc44-088fabea41af/iphoneheader.jpg" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">IPHONE 12PRO MAX 512GB</h5>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>
                                    <i className="bi bi-star-fill text-warning"></i>

                                    <form className="d-flex">
                                        <input className="form-control me-1 my-3" placeholder="Rp900.000" aria-label="Price" />
                                        <button className="btn btn-outline-success my-3" type="submit"><i className="bi bi-cart3"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section;