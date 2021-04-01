import { CO2Model } from '../models/model'


export const getCo2s = async (offset: number, limit: number): Promise<any> => {
    // console.log(userRepository.metadata);
    return await globalThis.prisma.cO2.findMany({
        skip: offset,
        take: limit
    });

}

export const createCo2 = async (payload: CO2Model): Promise<any> => {
    return await globalThis.prisma.cO2.create({
        data: {
            ...payload
        }
    })
}


export const updateCo2 = async (payload: CO2Model): Promise<any> => {
    return await globalThis.prisma.cO2.update({
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

export const getCo2 = async (fe: string, intervalweight: string, teu: string, transporttype: string): Promise<any | null> => {
    return await globalThis.prisma.cO2.findUnique({
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

export const deleteCo2 = async (fe: string, intervalweight: string, teu: string, transporttype: string): Promise<any | null> => {
    return await globalThis.prisma.cO2.delete({
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