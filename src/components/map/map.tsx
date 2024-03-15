import { useEffect, useRef } from 'react';

import { Icon, layerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';

import useMap from '../../hooks/useMap';

import { TLocation } from '../../types/location';
import { TOfferPreview } from '../../types/offer-preview';

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
  offers: TOfferPreview[];
  location: TLocation;
  specialOfferId: TOfferPreview['id'] | null;
  block: string;
};

function Map({ offers, location, block, specialOfferId }: TMapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useEffect(() => {
    if (map) {
      map.setView([location.latitude, location.longitude], location.zoom);
    }
  }, [map, location]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.city.location.latitude,
          lng: offer.city.location.longitude,
        });
        marker
          .setIcon(
            offer.id === specialOfferId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, specialOfferId]);

  return (
    <section className={`${block}__map map`} style={{ 'height': '500px' }} ref={mapRef}></section>
  );
}

export default Map;
