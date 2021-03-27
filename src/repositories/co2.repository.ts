import { CO2Full, PrismaClient, } from '@prisma/client'


export const getCo2s = async (offset: number, limit: number): Promise<CO2Full[]> => {
    // console.log(userRepository.metadata);
    return await globalThis.prisma.cO2Full.findMany({
        skip: offset,
        take: limit
    });

}

export const createCo2 = async (payload: CO2Full): Promise<CO2Full> => {
    return await globalThis.prisma.cO2Full.create({
        data: {
            ...payload
        }
    })
}


export const updateCo2 = async (payload: CO2Full): Promise<CO2Full> => {
    return await globalThis.prisma.cO2Full.update({
        where:{
            transporttype_fe_intervalweight_teu: {
                fe: payload.fe,
                intervalweight: payload.intervalweight,
                teu: payload.teu,
                transporttype: payload.transporttype
            }
        },
        data: {
            ...payload
        }
    })
}

export const getCo2 = async (fe: string, intervalweight: string, teu: string, transporttype: string): Promise<CO2Full | null> => {
    return await globalThis.prisma.cO2Full.findUnique({
        where: {
            transporttype_fe_intervalweight_teu: {
                fe: fe,
                intervalweight: intervalweight,
                teu: Number(teu),
                transporttype: transporttype
            }
        }
    })
};

export const deleteCo2 = async (fe: string, intervalweight: string, teu: string, transporttype: string): Promise<CO2Full | null> => {
    return await globalThis.prisma.cO2Full.delete({
        where: {
            transporttype_fe_intervalweight_teu: {
                fe: fe,
                intervalweight: intervalweight,
                teu: Number(teu),
                transporttype: transporttype
            }
        }
    })
};