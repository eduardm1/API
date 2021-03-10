import {  PrismaClient, Routes,} from '@prisma/client'


export const getRoutes = async (): Promise<Routes[]> => {
    // console.log(userRepository.metadata);
    const prisma = new PrismaClient()
    return await prisma.routes.findMany();
    
}

export const createRoute = async (payload: Routes) => {
    const prisma = new PrismaClient();
    await prisma.routes.create({
        data: payload
    });
}

export const getRoute = async (id:string): Promise<Routes | null>  => {
    const prisma = new PrismaClient()
    console.log(id)
    return prisma.routes.findUnique({
        where: {
            routeid: id
        }
    })
  };