import {  PrismaClient, Routes,} from '@prisma/client'


export const getRoutes = async (offset: number, limit: number, routeId: string | undefined): Promise<Routes[]> => {
    return await globalThis.prisma.routes.findMany(
        {
            skip: offset,
            take: limit,
            where: {
                routeid: routeId
            }
        }
    );
}

export const createRoute = async (payload: Routes): Promise<Routes> =>
{    return await globalThis.prisma.routes.create({
        data: payload
    });
}

export const updateRoute = async (payload: Routes): Promise<Routes> =>
{    return await globalThis.prisma.routes.update({
        where: {
            routeid: payload.routeid
        },
        data: payload
    });
}
  
export const deleteRoute = async (id: string): Promise<Routes | null> =>
{
    console.log('id');
    return await globalThis.prisma.routes.delete({
        where: {
          routeid: id
        }
    })
  };