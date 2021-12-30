const mysql = require('mysql')
class PeopleService {

  constructor(config){
    this.connection = mysql.createConnection(config)
  }

  save(name) {
    const sql = `INSERT INTO people(name) values('${name}')`
    connection.query(sql)
    connection.end()
  }

  listNames(){
    const sql = `SELECT name FROM people`
    
    return connection.query(sql, function (err, result) {
      if (err) throw err;
      return result.map(people => people.name)
    })
  }

}

export default PeopleService