import plato from "../img/plato.jpg";
import plato2 from "../img/plato2.jpg";
import plato3 from "../img/plato3.jpg";
import plato4 from "../img/plato4.jpg";
import plato5 from "../img/plato5.jpg";
import plato6 from "../img/plato6.jpg";
import plato7 from "../img/plato7.jpg";
import plato8 from "../img/plato8.jpg";
import plato9 from "../img/plato9.jpg";
import plato10 from "../img/plato10.jpg";
import plato11 from "../img/plato11.jpg";
import plato12 from "../img/plato12.jpg";
import plato13 from "../img/plato13.jpg";
import plato14 from "../img/plato14.jpg";
import plato15 from "../img/plato15.jpg";
import plato16 from "../img/plato16.jpg";

export const Platillos = () =>{
    return(
        <body>
            <h1>PLATILLOS PRINCIPALES</h1>
            <table>
                <tr>	
                    <td><a href="#"> <img src={plato} alt=""/></a></td>
                    <td><a href="#"> <img src={plato2} alt=""/></a></td> 
                    <td><a href="#"> <img src={plato3} alt=""/></a></td>
                    <td><a href="#"> <img src={plato4} alt=""/></a></td>
                </tr>
                <tr>	
                    <td> Item 1</td> 
                    <td> Item 2</td> 
                    <td> Item 3</td>
                    <td> Item 4</td>
                </tr>
            </table>

            <table>
                <tr>	
                    <td><a href="#"> <img src={plato5}  alt=""/></a></td>
                    <td><a href="#"> <img src={plato6} alt=""/></a></td>
                    <td><a href="#"> <img src={plato7} alt=""/></a></td>
                    <td><a href="#"> <img src={plato8} alt=""/></a></td>
                </tr>
                <tr>	
                    <td> Item 1</td> 
                    <td> Item 2</td> 
                    <td> Item 3</td>
                    <td> Item 4</td>
                </tr>
            </table>

            <h1>PLATILLOS PREFERIDOS POR LOS CLIENTES</h1>

            <table>
                <tr>	
                    <td><a href="#"> <img src={plato9} alt=""/></a></td>
                    <td><a href="#"> <img src={plato10} alt=""/></a></td>
                    <td><a href="#"> <img src={plato11} alt=""/></a></td>
                    <td><a href="#"> <img src={plato12} alt=""/></a></td>
                </tr>
                <tr>	
                    <td> Item 1</td> 
                    <td> Item 2</td> 
                    <td> Item 3</td>
                    <td> Item 4</td>
                </tr>
            </table>

            <table>
                <tr>	
                    <td><a href="#"> <img src={plato13} alt=""/></a></td>
                    <td><a href="#"> <img src={plato14} alt=""/></a></td>
                    <td><a href="#"> <img src={plato15} alt=""/></a></td>
                    <td><a href="#"> <img src={plato16} alt=""/></a></td>
                </tr>
                <tr>	
                    <td> Item 1</td> 
                    <td> Item 2</td> 
                    <td> Item 3</td>
                    <td> Item 4</td>
                </tr>
            </table>
        </body>        
    );
}

export default Platillos;