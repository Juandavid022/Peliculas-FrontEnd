import React from 'react'

export const Header = () => {
    return (
      
        <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#" id="Home">Peliculas</a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" id="2">

                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

                    <div class="navbar-nav">
                        <a class="nav-link" aria-current="page" href="#">Generos</a>
                        <a class="nav-link" href="#">Directores</a>
                        <a class="nav-link" href="#">Productoras</a>
                        <a class="nav-link" aria-disabled="true" href="#">Tipo</a>
                        <a class="nav-link" href="#">Media</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
