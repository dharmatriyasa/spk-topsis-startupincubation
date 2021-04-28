const db = require('../util/database');

module.exports = class Alternatives {
    constructor(id, name, c1, c2, c3, c4, c5, group_id, alternative_value){
        this.id = id;
        this.name = name;
        this.c1 = c1;
        this.c2 = c2;
        this.c3 = c3;
        this.c4 = c4;
        this.c5 = c5;
        this.group_id = group_id;
        this.alternative_value = alternative_value;
    }

    static fetchAllAlternatives(){
        return db.execute('SELECT * FROM alternatives');
    }
}

