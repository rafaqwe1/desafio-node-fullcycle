const faker = require('faker')
const People = require('../models/people')

const createPeople = async () => {
  return People.create({
    name: faker.name.findName()
  })
}

const getPeople = async () => {
  return People.findAll()
}

const createHtmlNames = people => {
  const htlmLi = people.map(people => `<li>${people.name}</li>`).join("")
  return "<ul>" + htlmLi + "</ul>";
}

module.exports = {
  async index(req, res) {
    await createPeople()
    const people = await getPeople()
    res.send('<h1>Full Cycle Rocks!</h1>' + createHtmlNames(people))
  }
}