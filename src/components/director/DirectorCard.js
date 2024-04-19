import React from 'react'

export const DirectorCard = (props) => {

    const { director } = props;

    return (
        <div >
            <table className="table table- table-hover">
                <tbody>
                    <tr>                        
                        <td>{director.nombre}</td>
                        <tr>{director.estado}</tr>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
