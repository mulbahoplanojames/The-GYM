const sayJoke = async (apiUrl, jokeId) => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (!data || !Array.isArray(data.jokes)) {
      throw new Error(`No jokes at url: ${apiUrl}`);
    }

    const joke = data.jokes.find((j) => j.id === jokeId);

    if (!joke) {
      throw new Error(`No jokes found id: ${jokeId}`);
    }

    return {
      saySetup() {
        return joke.setup;
      },
      sayPunchLine() {
        return joke.punchLine || joke.punchline;
      },
    };
  } catch (error) {
    throw error;
  }
};

await sayJoke("http://great.jokes/christmas", 101);
await sayJoke("http://great.jokes/christmas", 999);
await sayJoke("http://no.jokes/here", 132);
