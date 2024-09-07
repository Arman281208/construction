import './header.css';

function Header() {
    return (
        <header>
        <div class="container">
            <div class="row">
                <div class="logo-navbar">
                    <div class="logo">
                        <a href=""><img src="./assets/img/logo (4).png" alt=""/></a>
                    </div>
                    <div class="navbar">
                        <nav>
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" href="#" role="button"
                                        id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span>Անշարժ գույք</span>
                                        <img src="./assets/img/icon.png" alt="" />
                                    </button>

                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li><a class="dropdown-item" href="#">Item 1</a></li>
                                        <li><a class="dropdown-item" href="#">Item 2</a></li>
                                        <li><a class="dropdown-item" href="#">Item 3</a></li>
                                        <li><a class="dropdown-item" href="#">Item 4</a></li>
                                    </ul>
                                </div>
                                <li>
                                    <a href=""> Ակցեռն էքսկլյուզիվ </a>
                                </li>
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" href="#" role="button"
                                        id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span>Ծառայություններ</span>
                                        <img src="./assets/img/icon.png" alt="" />
                                    </button>

                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li><a class="dropdown-item" href="#">Item 1</a></li>
                                        <li><a class="dropdown-item" href="#">Item 2</a></li>
                                        <li><a class="dropdown-item" href="#">Item 3</a></li>
                                        <li><a class="dropdown-item" href="#">Item 4</a></li>
                                    </ul>
                                </div>
                                <li>
                                    <a href=""> Մեր մասին </a>
                                </li>
                                <li>
                                    <a href=""> Բլոգ </a>
                                </li>
                                <li>
                                    <a href=""> Հետադարձ կապ </a>
                                </li>
                                <li>
                                    <a href=""> Համեմատել </a>
                                </li>
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" href="#" role="button"
                                        id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        <a href=""><img src="./assets/img/ph_globe.png" alt="" /></a>
                                        <img src="./assets/img/icon.png" alt="" />
                                    </button>

                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li><a class="dropdown-item" href="#">Item 1</a></li>
                                        <li><a class="dropdown-item" href="#">Item 2</a></li>
                                        <li><a class="dropdown-item" href="#">Item 3</a></li>
                                        <li><a class="dropdown-item" href="#">Item 4</a></li>
                                    </ul>
                                </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <section>
                <div class="header-content">
                    <div class="content-text">
                        <h1>
                            ԱԿՑԵՌՆ ՀՈԼԴԻՆԳ
                        </h1>
                        <p>
                            Ակցեռն հոլդինգի գործունեության ոլորտում են անշարժ գույքի հետ կապված ցանկացած տեսակի գործարքներ՝ առք, վաճառք, վարձակալություն, բնակելի (բնակարաններ, տներ, առանձնատներ, հողամասեր, ամառանոցներ) և առևտրային նշանակության (արտադրական օբյեկտներ), ինչպես նաև անշարժ գույքի գնահատում։
                        </p>
                    </div>
                </div>
                <div id="card-container">
                    
                </div>
        </section>
    </header>
    );
}

export default Header;