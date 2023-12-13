import React, { useEffect } from 'react';

const Ubicacion = ({ titulo, latitud, longitud, descripcion }) => {
  useEffect(() => {
    // Cargar el script de la API de Google Maps de forma asíncrona
    const script = document.createElement('script');
    script.src = `https://www.google.com/maps/place/La+Casa+del+Camba+-+Restaurant-+La+Paz/@-16.5410143,-68.089512,15.9z/data=!4m6!3m5!1s0x915f2199e7792bf5:0x80fe33a898652e55!8m2!3d-16.5405987!4d-68.0842501!16s%2Fg%2F11pkdv_f_3?entry=ttu`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Inicializar el mapa una vez que se haya cargado el script
      initMap();
    };
  }, []); // Se ejecuta solo una vez al montar el componente

  const initMap = () => {
    const mapOptions = {
      center: { lat: latitud, lng: longitud },
      zoom: 14,
    };

    const map = new window.google.maps.Map(document.getElementById('map'), mapOptions);

    // Agregar un marcador al mapa
    new window.google.maps.Marker({
      position: { lat: latitud, lng: longitud },
      map: map,
      title: titulo,
    });
  };

  return (
    <div>
      <h1>{titulo}</h1>
      <div id="map" style={{ width: '400px', height: '400px' }}></div>
      <p>{descripcion}</p>
    </div>
  );
};

export default Ubicacion;
