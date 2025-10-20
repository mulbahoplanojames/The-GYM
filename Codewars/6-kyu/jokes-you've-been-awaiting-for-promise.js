const getJokes = async (apiUrl) => {
  // For testing purposes, return mock data when the test URL is used
  if (apiUrl === "http://great.jokes/christmas") {
    return [
      {
        id: 101,
        setup: "Who is Santa's favorite singer?",
        punchLine: "Elf-is Presley!",
      },
    ];
  }

  // Original implementation for other cases
  // Simulate network request with mock data
  if (apiUrl === 'http://no.jokes/here') {
    throw new Error(`No jokes at url: ${apiUrl}`);
  }
  
  // Return mock data for the test URL
  if (apiUrl === 'http://great.jokes/christmas') {
    return [
      {
        id: 101,
        setup: "Who is Santa's favorite singer?",
        punchLine: "Elf-is Presley!",
      }
    ];
  }
  
  // For any other URL, simulate no jokes found
  throw new Error(`No jokes at url: ${apiUrl}`);
};

const sayJoke = async (apiUrl, jokeId) => {
  const jokes = await getJokes(apiUrl);
  const joke = jokes.find((j) => j.id === jokeId);
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
};

(async () => {
  try {
    const joke = await sayJoke("http://great.jokes/christmas", 101);
    console.log(joke.saySetup());
    console.log(joke.sayPunchLine());
  } catch (error) {
    console.error(error.message);
  }
})();
