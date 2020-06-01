// CRUD create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, 
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error, client) => {
        if (error) {
            return console.log('Unable to connect to database');
        }

        const db = client.db(databaseName);
        // -C (create)
        // db.collection('tasks').insertMany([
        //     {
        //         description: 'Buy milk',
        //         completed: false
        //     }, {
        //         description: 'Learn deep learning',
        //         completed: true
        //     }, {
        //         description: 'Clean the bathroom',
        //         completed: false
        //     }
        // ], (error, result) => {
        //     if (error) {
        //         return console.log('Unable to insert documents.');
        //     }

        //     console.log(result.ops);
        // });

        // -R (read)
        // db.collection('tasks').findOne({ _id: new ObjectID("5e0edc75ca2ada7c7604caa2") }, (error, task) => {
        //     if (error) {
        //         return console.log('Unable to fetch');
        //     }
        //     console.log(task);
        // });
        // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        //     if (error) {
        //         return console.log('Unable to fetch');
        //     }
        //     console.log(tasks)
        // }); 

        // -U (update)
        // db.collection('tasks').updateMany({
        //     completed: false
        // }, {
        //     $set: {
        //         completed: true
        //     }
        // }).then((result) => {
        //     console.log(result);
        // }).catch(error => {
        //     console.log(error);
        // });

        // -D
        // db.collection('users').deleteMany({
        //     age:26
        // }).then((result)=> {
        //     console.log(result);
        // }).catch((error) => {
        //     console.log(error);
        // });
    });