import React from 'react'

const Footer = () => {
  return (
    <nav class="navbar navbar-expand-lg Footer">
        <div class="container">
            <a class="navbar-brand" href="/">PTW <span>@ 2024. All rights reserved.</span></a>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Terms</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Privacy</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-disabled="true">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Footer