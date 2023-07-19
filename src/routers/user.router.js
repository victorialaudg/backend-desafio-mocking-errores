import { Router } from 'express'
import { generateUser } from '../utils.js'
import CustomError from '../services/errors/custom_error.js'
import EErros from '../services/errors/enums.js'
import { generateUserErrorInfo } from '../services/errors/info.js'


const router = Router()

const users = []

router.get('/', async(req,res)=>{
    //const users = []
    for(let index=0; index<100; index++){
        users.push(generateUser())
    }
    res.json({status: 'success', payload: users})
})

router.post('/', (req,res) => {
    const user = req.body
    if(!user.name || !user.last_name || !user.email){
        CustomError.createError({
            name: 'User creation error',
            cause: generateUserErrorInfo(user),
            message: 'Error typing to create a user',
            code: EErros.INVALID_TYPES_ERROR
        })
    }

    users.push(user)
    res.send({status: 'success', payload: user})
})


export default router