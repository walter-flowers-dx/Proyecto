import prom1 from "../img/prom1.jpg";
import prom2 from "../img/prom2.jpg";
import prom3 from "../img/prom3.jpg";
import prom4 from "../img/prom4.jpg";
import prom5 from "../img/prom5.jpg";
import prom6 from "../img/prom6.jpg";
import 'bootstrap/dist/css/bootstrap.css';

export const Promociones = () =>{
    return(
        <body>
            <h1>PROMOCIONES PRINCIPALES</h1>
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={prom1} class="d-block w-100" alt=""/>
                    </div>
                    <div class="carousel-item">
                        <img src={prom2} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={prom3} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>

                <h1>PROMOCIONES SECUNDARIAS</h1>
                    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src={prom4} class="d-block w-100" alt=""/>
                            </div>
                            <div class="carousel-item">
                            <img src={prom5} class="d-block w-100" alt=""/>
                            </div>
                            <div class="carousel-item">
                            <img src={prom6} class="d-block w-100" alt=""/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
            </div>
        </body>
    );
}

export default Promociones;