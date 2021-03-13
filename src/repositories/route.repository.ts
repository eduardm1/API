import {  PrismaClient, Routes,} from '@prisma/client'


export const getRoutes = async (): Promise<Routes[]> => {
    return await globalThis.prisma.routes.findMany();
    
}

export const createRoute = async (payload: Routes): Promise<Routes> =>
{    return await globalThis.prisma.routes.create({
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
  
export const deleteRoute = async (id: string): Promise<Routes | null> =>
{
    console.log('id');
    return await globalThis.prisma.routes.delete({
        where: {
          routeid: id
        }
    })
  };