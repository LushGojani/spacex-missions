export const formatDate = (dateValue) => {
  var date = new Date(dateValue);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + " " + ampm;
  return (
    date.getMonth() +
    1 +
    "/" +
    date.getDate() +
    "/" +
    date.getFullYear() +
    "  " +
    strTime
  );
};

export const formatLaunches = (launches) => {
  return launches
    .filter((launch) => launch.links.flickr_images.length > 0)
    .map((launch) => {
      return {
        id: launch.rocket.rocket.id,
        missionName: launch.mission_name,
        launchDate: formatDate(launch.launch_date_local),
        launchImg: launch.links.flickr_images[0],
        rocketName: launch.rocket.rocket_name,
        rocketType: launch.rocket.rocket_type,
      };
    });
};

export const formatRocketData = (rocketData, imagesData) => {
  const images = imagesData.filter(
    (launch) => launch.links.flickr_images.length > 0
  );

  const rocketImg = images[0].links.flickr_images[0];
  return { ...rocketData, rocketImg };
};
