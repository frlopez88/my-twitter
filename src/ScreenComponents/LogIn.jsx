import React from 'react'

export const LogIn = () => {



    return (
        <>
            <div className='container mt-5'>
                <div className='row justify-content-center'>
                    <div className='row'>
                        <div className='card'>
                            <div className='card-body'>
                                <h1 className='card-title'> Log In</h1>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">
                                            User Name
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="example@domain.com"
                                        />
                                    </div>
                                    <button className='btn btn-primary w-100'>OK</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
