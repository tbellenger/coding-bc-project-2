const { Job } = require("../models");

const jobdata = [
  {
    title: "Lawn mowing",
    description: "I need someone to mow the lawn",
    owner_id: 1,
    salary: 10,
    job_status: "open",
    category_id: 1,
  },
  {
    title: "Painting",
    description: "I need someone to paint my shed",
    owner_id: 2,
    salary: 15,
    job_status: "open",
    category_id: 2,
  },
  {
    title: "Trash run",
    description: "I need someone to take a load of trash to the dump",
    owner_id: 3,
    salary: 20,
    job_status: "open",
    category_id: 5,
  },
  {
    title: "Handyman",
    description: "I need someone to be a handyman",
    owner_id: 4,
    salary: 12,
    job_status: "open",
    category_id: 3,
  },
  {
    title: "Wood chopping",
    description: "I need someone to chop and stack wood",
    owner_id: 4,
    salary: 10,
    job_status: "open",
    category_id: 1,
  },
];

const seedJobs = () => Job.bulkCreate(jobdata);

module.exports = seedJobs;