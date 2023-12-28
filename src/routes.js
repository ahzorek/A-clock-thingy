import { Router } from "express"
import AlarmController from "./app/controllers/AlarmController.js"
import WeatherController from "./app/controllers/WeatherController.js"
import DateTimeController from "./app/controllers/DateTimeController.js"
import UserController from "./app/controllers/UserController.js"

const router = Router()

//rota teste 
router.get("/test", (req, res) => {
    res.json("foi")
})

//retorna clima pelo nome da cidade em query param (?city=)
router.get("/weather", WeatherController.show)

//retorna uma string HH:MM:SS com a hora certa
router.get("/current-time", DateTimeController.showTime)

//retorna uma string com a data de hoje
router.get("/current-date", DateTimeController.showDate)

//retorna uma string com a mensagem para o horario
router.get("/message", DateTimeController.showMessage)

//retorna uma string com a mensagem de boas-vindas
router.get("/theme", DateTimeController.showTheme)

//retorna lista de alarmes
router.get("/alarm", AlarmController.index)

//retorna um alarme por id passada
router.get("/alarm/:id", AlarmController.show)

//cria novo alarme
router.post("/alarm", AlarmController.store)

//atualiza dados de alarme (recebe alarm id)
router.put("/alarm/:id", AlarmController.update)

//deleta alarme (recebe user id)
router.delete("/alarm/:id", AlarmController.delete)


//// user stuff

//retorna lista de users
router.get("/user", UserController.index)

//retorna um user por id passada
router.get("/user/:id", UserController.show)

//retorna um user por id passada
router.post("/user/auth", UserController.auth)

//cria novo user
router.post("/user", UserController.store)

//atualiza dados de user (recebe user id)
// router.put("/user/:id", UserController.update)

//deleta user (recebe user id)
router.delete("/user/:id", UserController.delete)

export default router