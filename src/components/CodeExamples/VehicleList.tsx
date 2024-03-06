import { useRef, useState } from "react";

type Vehicles = { id: number; type: string; speed: number };

const startVehicles: Vehicles[] = [
  { id: 0, type: "Car", speed: 200 },
  { id: 1, type: "Bike", speed: 300 },
  { id: 2, type: "Boat", speed: 150 },
  { id: 3, type: "Plane", speed: 800 },
  { id: 4, type: "Train", speed: 300 },
  { id: 5, type: "Bus", speed: 130 },
];

const VehicleList = () => {
  const [vehicles, setVehicles] = useState(startVehicles);

  const addSpeed = useRef<HTMLInputElement>(null);
  const addType = useRef<HTMLInputElement>(null);

  const handlePush = () => {
    if (addSpeed.current && addType.current) {
      setVehicles([
        ...vehicles,
        {
          id: vehicles.length,
          type: addType.current.value,
          speed: Math.round(parseInt(addSpeed.current.value)),
        },
      ]);
    }
    // setVehicles([...vehicles, { id: 7, type: "Truck", speed: 100 }]);
  };

  return (
    <>
      <div>
        <label htmlFor="addSpeed">Speed</label>
        <input type="number" ref={addSpeed} />
        <label htmlFor="Type">Type</label>
        <input type="text" ref={addType} />
        <button onClick={handlePush}>Add vehicle</button>
        {vehicles.map((vehicle: Vehicles) => {
          return (
            <>
              <ul>
                <h3>{`- ${vehicle.type}`}</h3>

                <li>{`Speed: ${vehicle.speed}km/h`}</li>
                {/* <li>{`${}`}</li>
              <li>{`${}`}</li> */}
              </ul>
            </>
          );
        })}
      </div>
    </>
  );
};

export default VehicleList;
