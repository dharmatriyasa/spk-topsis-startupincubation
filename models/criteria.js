const db = require('../util/database');

module.exports = class Criteria{
    constructor(id, criteriaName, criteriaType, weighting){
        this.id = id;
        this.criteria = criteriaName;
        this.type = criteriaType;
        this.weighting = weighting;
    }

    static fetchAllCriteria(){
        return db.execute('SELECT * FROM criteria');
    }

    save(){
        return db.execute('INSERT INTO criteria (criteria, type, weighting) VALUES(?,?,?)',
        [this.criteria, this.type, this.weighting]
        );
    }
}