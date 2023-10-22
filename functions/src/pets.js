import db from './connectDb.js'

const coll = db.collection('pets')// collection a izin veriyor ve database e yeni bir data yuklendigini bildiriyor.


export function addPet(req, res) {
    const newPet = req.body
    coll.add(newPet)
    .then(() => res.status(201).send({ message: "Success!" }))
    .catch(err => res.status(500).send(err))
}
// function olursturarark all pets datalari collectionda aliyoruz.
export function getAllPets(req, res) {
    coll.get() // firestore icin kullanilir spesifik olarak get ()
    .then(collection => {
        const pets = collection.docs.map(doc => ({ id: doc.id, ...doc.data() })) // to array function ile ayni mongo daki
        res.send(pets) // collectiondaki dosyalari belirtilen keylere gore organize ediyoruz. collection.docs.map ile.
   // the docs applying the map method ile organize ediyor.
    })
    .catch(err => res.status(500).send(err))
}
