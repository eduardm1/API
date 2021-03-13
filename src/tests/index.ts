import { getClient } from './client/get_client'
import { postClient } from './client/post_client'
import { deleteClient } from './client/delete_client'
import { getCo2 } from './co2/get_co2'
import { postCo2 } from './co2/post_co2'
import { deleteCo2 } from './co2/delete_co2'
import { PrismaClient } from '@prisma/client'

declare global
{
    var prisma: PrismaClient
} 

globalThis.prisma = new PrismaClient()

describe('Run client tests', () =>
{
    //Client 
    postClient()
    getClient()
    deleteClient()
})

describe('CO2 tests', () =>
{
    //CO2
    postCo2()
    // await new Promise(resolve => setTimeout(resolve, 3000)); // 3 sec

    getCo2()
    deleteCo2()
})

globalThis.prisma.$disconnect