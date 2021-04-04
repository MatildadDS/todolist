import React from 'react'

export default function Card({txt, task}) {
    
    return (
        <div className="card has-background-primary my-4" >
            <div className="card-content">
                <div className="content">
                    <h3 className="px-4">{task} </h3>
                    <p className="is-size-4 px-4">{txt} </p>
                    <button className="delete is-large btn-top">x</button>
                </div>
            </div>
        </div>
    )
}
