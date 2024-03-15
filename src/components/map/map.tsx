import {Icon, layerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useEffect, useRef} from 'react';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const';
import useMap from '../../hooks/useMap';
import { TMapPoint } from '../../types/map-points';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

type TMapProps = {
  city: TMapPoint;
  points: TMapPoint[];
  selectedPoint: TMapPoint | undefined;
};

function Map(props: Readonly<TMapProps>) {
  const {city, points, selectedPoint} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });
        marker.setIcon(
          selectedPoint !== undefined && point.title === selectedPoint.title
            ? currentCustomIcon
            : defaultCustomIcon
        )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint]);

  return (
    <section className="cities__map map" style={{'height': '500px'}} ref={mapRef}></section>
  );
}

export default Map;
