import {
  GoabButton,
  GoabButtonGroup,
  GoabCallout,
  GoabText,
} from "@abgov/react-components";
import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useNavigate, useSearchParams } from "react-router-dom";
import { housingOptions } from "../data/housingOptions";

function MapSelection({ selectedId }: { selectedId?: string }) {
  const map = useMap();

  useEffect(() => {
    const selectedOption = housingOptions.find(
      (option) => option.id === selectedId,
    );

    if (!selectedOption) {
      return;
    }

    map.flyTo([selectedOption.latitude, selectedOption.longitude], 11, {
      duration: 0.8,
    });
  }, [map, selectedId]);

  return null;
}

export function MapPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedId = searchParams.get("location") ?? undefined;

  const selectedOption = housingOptions.find(
    (option) => option.id === selectedId,
  );

  const initialPosition: [number, number] = selectedOption
    ? [selectedOption.latitude, selectedOption.longitude]
    : [52.9399, -114.0078];

  const initialZoom = selectedOption ? 11 : 6;

  return (
    <main className="page-container">
      <GoabText tag="h1" size="heading-xl" mt="none" mb="m">
        Housing locations
      </GoabText>

      <GoabText tag="p" size="body-l" mt="none" mb="xl">
        Explore the sample housing options on the map.
      </GoabText>

      <GoabCallout type="information" heading="Demo map" mb="xl">
        The markers represent sample locations only. They are not actual housing
        addresses.
      </GoabCallout>

      <section className="housing-map" aria-label="Sample housing locations">
        <MapContainer
          center={initialPosition}
          zoom={initialZoom}
          scrollWheelZoom
          className="housing-map-container"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MapSelection selectedId={selectedId} />

          {housingOptions.map((option) => (
            <Marker
              key={option.id}
              position={[option.latitude, option.longitude]}
            >
              <Popup>
                <div className="map-popup">
                  <strong>{option.name}</strong>
                  <span>{option.location}</span>
                  <span>{option.housingType}</span>
                  <span>{option.estimatedWait}</span>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </section>

      <GoabButtonGroup alignment="start" mt="2xl">
        <GoabButton type="secondary" onClick={() => navigate("/results")}>
          Back to results
        </GoabButton>

        <GoabButton type="primary" onClick={() => navigate("/assessment")}>
          Change answers
        </GoabButton>
      </GoabButtonGroup>
    </main>
  );
}
