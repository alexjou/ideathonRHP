export const generateHospitalData = () => {
  const generateStatus = (): "livre" | "em higienização" | "ocupado" => {
    const statuses: Array<"livre" | "em higienização" | "ocupado"> = ["livre", "em higienização", "ocupado"];
    return statuses[Math.floor(Math.random() * statuses.length)];
  };

  const rooms = [];
  for (let i = 1; i <= 50; i++) {
    const numBeds = Math.floor(Math.random() * 6) + 15; // Entre 15 e 20 leitos
    const beds = [];
    for (let j = 1; j <= numBeds; j++) {
      beds.push({
        id: j,
        status: generateStatus(),
      });
    }
    rooms.push({
      id: i,
      name: `Sala ${i}`,
      beds,
    });
  }
  return { rooms };
};
