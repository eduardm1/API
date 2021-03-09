import {  PrismaClient, Route,} from '@prisma/client'


export const getRoutes = async (): Promise<Route[]> => {
    // console.log(userRepository.metadata);
    const prisma = new PrismaClient()
    return await prisma.route.findMany();
    
}

export const createRoute = async (payload: Route) => {
    const prisma = new PrismaClient();
    await prisma.route.create({
        data: payload
    });
}

export const getRoute = async (id:string): Promise<Route | null>  => {
    const prisma = new PrismaClient()
    console.log(id)
    return prisma.route.findUnique({
        where: {
            routeid: id
        }
    })
  };