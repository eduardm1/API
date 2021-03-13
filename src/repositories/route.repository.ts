import {  PrismaClient, Routes,} from '@prisma/client'


export const getRoutes = async (): Promise<Routes[]> => {
    // console.log(userRepository.metadata);
    return await globalThis.prisma.routes.findMany();
    
}

export const createRoute = async (payload: Routes) => {
    await globalThis.prisma.routes.create({
        data: payload
    });
}

export const getRoute = async (id:string): Promise<Routes | null>  => {
    return globalThis.prisma.routes.findUnique({
        where: {
            routeid: id
        }
    })
  };