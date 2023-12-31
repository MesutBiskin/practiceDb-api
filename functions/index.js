import { onRequest } from 'firebase-functions/v2/https'
import express from 'express'
import cors from 'cors'

import { getAllPets, addPet } from './src/pets.js'

const app = express()
app.use(cors())
app.use(express.json())

app.get("/test", (req, res) => res.send( "It is working!" ))

app.get("/pets", getAllPets)
app.post("/pets", addPet)

export const api = onRequest(app)