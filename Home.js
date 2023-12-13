import "../App.css";
import perfil from "../img/perfil.jpg";
import fondo1 from "../img/fondo1.jpg";
import fondo2 from "../img/fondo2.jpg";
import fondo3 from "../img/fondo3.jpg";

export const Home = () =>{
    return(
        <section>
            <body>
                <h1>Home</h1>
                <table>
                    <tr>
                        <td><a href="#"> <img src={perfil} width="300px" jecight="300px" alt=""/></a></td>
                        <td><h2>LA CASA DEL CAMBA RESTAURANT</h2></td>
                    </tr>
                </table>

                <table>
                    <tr>
                        <td>
                            <h3>NUESTRA HISTORIA</h3>
                            <p>Hace 35 años nació en Santa Cruz de la Sierra “La Casa del Camba” que se estableció como el símbolo de la cocina tradicional cruceña y desde entonces como el paso obligatorio para quienes visitan la capital oriental. En el año 2015, la franquicia Casa del Camba Express inicia exitosamente sus operaciones en La Paz en los Patios de Comida del Centro Comercial Camacho, del Multicine y del Hotel Alexander en El Alto, además de ofrecer su delivery en la calle 15 de Calacoto, donde establece -en el año 2019- su centro de producción. Este mismo año, el franquiciado Sr. Alejandro Yaffar idea el proyecto sui generis de implantar en el mismo lugar una comunidad de reconocidos restaurantes en un entorno de boulevard, así nace El Bosque.</p>
                        </td>
                        <td><a href="#"> <img src={fondo1} width="500px" jecight="500px" alt=""/></a></td>
                    </tr>
                </table>

                <table>
                    <tr>
                        <td><a href="#"> <img src={fondo2} width="500px" jecight="500px" alt=""/></a></td>
                        <td>
                            <p>El Sr. Yaffar   acuerda con los miembros de la familia Medina, propietarios de la marca, lanzar en el mismo lugar un restaurante “Casa del Camba” de concepto renovado. Para tal propósito, encargan   al Sr. Eric Lacoste diseñar   y llevar a cabo el lanzamiento del nuevo proyecto, para el cual él propone el siguiente concepto: “Más allá de la tradición “ Lacoste sitúa la propuesta culinaria sobre un mano a mano entre el oriente y el occidente boliviano en lo que a productos y sabores se refiere, proponiendo recetas donde la tradición se vuelve innovadora, los asadores y los hornos son actores preponderantes y las recetas de autor, memorables.</p>
                        </td>
                    </tr>
                </table>

                <table>
                    <tr>
                        <td>
                            <p>“La Casa del Camba” restaurant tiene una capacidad total de 150 cubiertos distribuidos en cuatro ambientes, salón privado, table d’hote, bar, también cuenta con un horno de barro y asador a la vista, además de una amplia terraza lounge con una atractiva carta de cócteles clásicos y de autor acompañada de una pizarra de creativos tentempiés. El equipo de servicio constituido por experimentados profesionales, tiene la misión de ofrecer todos los días de la semana sabor y calidez al público paceño.</p>
                        </td>
                        <td><a href="#"> <img src={fondo3} width="500px" jecight="500px" alt=""/></a></td>
                    </tr>
                </table>
            </body>
        </section>
    );
}

export default Home;