async function logMovies() {
  try {
    const response = await fetch("https://swapi.dev/api/films");
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }

    const movies = await response.json();
    console.log(movies);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

export const Films = () => {
  logMovies();
  return <p>Films</p>;
};
