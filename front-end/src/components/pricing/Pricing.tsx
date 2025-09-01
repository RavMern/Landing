import React from 'react';

const Pricing: React.FC = () => {
    return (
        <div className="container py-5">
            {/* Título y subtítulo */}
            <div className="text-center mb-5">
                <h1 className="display-4">Pricing</h1>
                <p className="lead">
                    Quickly build an effective pricing table for your potential customers with this Bootstrap example.
                    It’s built with default Bootstrap components and utilities with little customization.
                </p>
            </div>

            {/* Cards */}
            <div className="row row-cols-1 row-cols-md-3 mb-5 text-center">
                <div className="col mb-4">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">Basic</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>10 users included</li>
                                <li>2 GB of storage</li>
                                <li>Email support</li>
                                <li>Help center access</li>
                            </ul>
                            <button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
                        </div>
                    </div>
                </div>

                <div className="col mb-4">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">Pro</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ mo</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>20 users included</li>
                                <li>10 GB of storage</li>
                                <li>Priority email support</li>
                                <li>Help center access</li>
                            </ul>
                            <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
                        </div>
                    </div>
                </div>

                <div className="col mb-4">
                    <div className="card mb-4 rounded-3 shadow-sm">
                        <div className="card-header py-3">
                            <h4 className="my-0 fw-normal">Enterprise</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$29 <small className="text-muted">/ mo</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>30 users included</li>
                                <li>15 GB of storage</li>
                                <li>Phone and email support</li>
                                <li>Help center access</li>
                            </ul>
                            <button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Compare plans */}
            <h2 className="text-center mb-4">Compare plans</h2>

            {/* Tabla comparativa */}
            <div className="table-responsive">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Basic</th>
                            <th>Pro</th>
                            <th>Enterprise</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="text-start">Public</th>
                            <td>✔</td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-start">Private</th>
                            <td></td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-start">Permissions</th>
                            <td>✔</td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-start">Sharing</th>
                            <td></td>
                            <td>✔</td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-start">Unlimited members</th>
                            <td></td>
                            <td></td>
                            <td>✔</td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-start">Extra security</th>
                            <td></td>
                            <td></td>
                            <td>✔</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Pricing;
