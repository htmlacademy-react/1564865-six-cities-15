import 'leaflet/dist/leaflet.css';
import { Icon, layerGroup, Marker } from 'leaflet';
import { TOffer } from '../../types/offer';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { useAppSelector } from '../../hooks';

import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

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
  block: string;
  offers: TOffer[];
  selectedPointId?: TOffer['id'] | null;
};

function Map({ offers, selectedPointId, block }: TMapProps) {
  const city = useAppSelector((state) => state.activeCity);

  const mapRef = useRef(null);

  const map = useMap({ mapRef, city });

  const selectedPoint = offers.find((offer) => offer.id === selectedPointId);

  useEffect(() => {
    if (map) {
      if (selectedPoint) {
        const mapLating = {
          lat: selectedPoint.location.latitude,
          lng: selectedPoint.location.longitude
        };
        const mapZoom = selectedPoint.location.zoom;
        map.setView(mapLating, mapZoom);
      }

      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });
        marker
          .setIcon(
            selectedPoint !== undefined && offer.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedPoint]);

  return (
    <section className={`${block}__map map`}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
