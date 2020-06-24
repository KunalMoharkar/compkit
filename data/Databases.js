import React from 'react';
import Mysql from '../assets/images/database/img_mysql.png';
import Postgre from '../assets/images/database/img_postgresql.png';
import Sqlite from '../assets/images/database/img_sqlite.png';
import Mongo from '../assets/images/database/img_mongo.png';
import Maria from '../assets/images/database/img_mariadb.png';
import Firebase from '../assets/images/database/img_firebase.png';


export const DatabaseList = [
    {   
        id:"1",
        name:"MySQL",
        source:Mysql,
        url:"https://www.mysql.com/",
    },
    {   
        id:"2",
        name:"PostgreSQL",
        source:Postgre,
        url:"https://www.postgresql.org/",
    },
    {   
        id:"3",
        name:"SQLite",
        source:Sqlite,
        url:"https://www.sqlite.org/index.html",
    },
    {   
        id:"4",
        name:"MONGO DB",
        source:Mongo,
        url:"https://www.mongodb.com/",
    },
    {   
        id:"5",
        name:"Maria DB",
        source:Maria,
        url:"https://mariadb.org/",
    },
    {   
        id:"6",
        name:"Firebase",
        source:Firebase,
        url:"https://firebase.google.com/",
    },
]