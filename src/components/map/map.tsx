import 'leaflet/dist/leaflet.css';
import { memo } from 'react';
import { Icon, layerGroup, Marker } from 'leaflet';
import { TOffer } from '../../types/offer';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { TLocation } from '../../types/location';

import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
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
  block: string;
  offers: TOfferPreview[];
  location: TLocation;
  offer?: TOffer | null;
  selectedPointId?: TOffer['id'] | null;
};

function Map({ offers, location, offer, selectedPointId, block }: TMapProps) {

  const mapRef = useRef(null);

  const map = useMap({ mapRef, location });

  const selectedPoint = offers.find((item) => item.id === selectedPointId);

  useEffect(() => {
    if (map) {
      map.setView([location.latitude, location.longitude], location.zoom);
    }
  }, [map, location]);

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
      offers.forEach((item) => {
        const marker = new Marker({
          lat: item.location.latitude,
          lng: item.location.longitude
        });
        marker
          .setIcon(
            selectedPoint !== undefined && item.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      if (offer) {
        const markerCurrent = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        markerCurrent
          .setIcon(currentCustomIcon)
          .addTo(markerLayer);
      }

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedPoint, offer]);

  return (
    <section className={`${block}__map map`}
      ref={mapRef}
    >
    </section>
  );
}

const MapMemo = memo(Map);

export default MapMemo;
