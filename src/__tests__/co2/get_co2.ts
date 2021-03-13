import request from 'supertest';
import express, { Application } from 'express';
import morgan from 'morgan';
import http, { Server } from 'http';
import Router from '../../routes';

export const getCo2 = () => describe('CO2 test', () =>
{
    let app: Application, server: Server;

    beforeEach(done =>
    {
        app = express();
        app.use(express.json());
        app.use(morgan('tiny'));
        app.use(express.static("public"));
        app.use(Router);
        server = http.createServer(app);
        server.listen(done);
    })

    afterEach((done) =>
    {
        server.close(done);
    })

    it('should return 200 & valid response if request param list is empity', async done =>
    {
        await request(app)
            .get(`/co2`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) =>
            {
                try
                {
                    expect(res.body).not.toBeNull
                }
                catch (err)
                {
                    err.message = `${ err.message }`;
                    throw err;
                }
                done()
            })
               
            })


    it('should return 200 & one client', async done =>
    {
      await request(app)
            .get('/co2/0/300/0/Aankoppelrit')
            .expect('Content-Type', /json/)
            .expect(200)
          .then((res) =>
          {
            try
            {
                expect(res.body).toMatchObject({
                    "emissionsperkm": 0.0321,
                    "transporttype": "Aankoppelrit",
                    "fe": "0",
                    "intervalweight": "300",
                    "teu": 0
                }); 
            }
            catch (err)
            {
                err.message = `${ err.message }`;
                throw err;
            }
            done()
          })
              
       
    })

   
})
