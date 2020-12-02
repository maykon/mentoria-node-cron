const axios = require("axios");

axios.defaults.headers.common["Accept"] =
  "application/vnd.github.inertia-preview+json";

//const getProjects = () =>
//  axios.get("https://api.github.com/users/maykon/repos");

const getProjects = () => ({
  data: [
    { full_name: "Repo Lab" },
    { full_name: "Predize" },
    { full_name: "Eive" },
  ],
});

const processRepo = (repo) => repo.full_name;

const executeProjects = async () => {
  const projects = await getProjects();
  const nomes = projects.data.map(processRepo);
  console.log(nomes);
  return nomes.length;
};

module.exports = {
  getProjects,
  processRepo,
  executeProjects,
};
