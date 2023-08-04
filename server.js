const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// -----middleware--------------
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'rootroot',
        database: 'person_db'
    },
    console.log(`Connected to the person_db`)
);

//(TODO: Display employees with thier roles using LEFT JOIN)



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
