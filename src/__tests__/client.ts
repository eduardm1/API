import request from 'supertest';
import express, { Application } from 'express';
import morgan from 'morgan';
import http, { Server } from 'http';
import Router from '../routes';

// import Server from '../../server'

describe('Client test', () =>
{
    let app: Application, server: Server;

    beforeAll(async done =>
    {
        app = express();
        app.use(express.json());
        app.use(morgan('tiny'));
        app.use(express.static("public"));
        app.use(Router);
        server = http.createServer(app);
        server.listen(done);
    })

    afterAll(async done =>
    {
        server.close(done);
    })

    it('should return 200 & valid response if request param list is empity', async done =>
    {
        const data =  await request(server)
            .get(`/client`)
            .expect('Content-Type', /json/)
            .expect(200)
           
                try { expect(data.body).not.toBeNull }
                catch (err)
                {
                    err.message = `${ err.message }`;
                    throw err;
                }
           
        done()
         
    })

    it('should create one client & return it & return 200', async done =>
    {
        request(server)
            .post(`/client`)
            .send({
                "clientcode": "TestClient",
                "street": "testStreet",
                "city": "testCity",
                "pob": "TestPob",
                "zipcode": "TestZipcode",
                "pobzipcode": "TestPobZipCode",
                "longitude": "123",
                "latitude": "123",
                "country": "TestCountry",
                "clientname": "TestclientName"
            })
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .end((err, res) =>
            {
                try
                {
                    expect(res.body).toMatchObject({
                        "clientcode": "TestClient",
                        "street": "testStreet",
                        "city": "testCity",
                        "pob": "TestPob",
                        "zipcode": "TestZipcode",
                        "pobzipcode": "TestPobZipCode",
                        "longitude": "123",
                        "latitude": "123",
                        "country": "TestCountry",
                        "clientname": "TestclientName"
                    });
                } catch (err)
                {
                    err.message = `${ err.message }`;
                    throw err;
                }
                done()
          
            })
        
    })
    it('should return 200 & one client', async done =>
    {
        const data = await request(server)
            .get('/client/TestClient')
            .expect('Content-Type', /json/)
            .expect(200)
          
                try
                {
                    expect(data.body).toMatchObject({
                        "clientcode": "TestClient",
                        "street": "testStreet",
                        "city": "testCity",
                        "pob": "TestPob",
                        "zipcode": "TestZipcode",
                        "pobzipcode": "TestPobZipCode",
                        "longitude": "123",
                        "latitude": "123",
                        "country": "TestCountry",
                        "clientname": "TestclientName",
                    });
                } catch (err)
                {
                    err.message = `${ err.message }`;
                    throw err;
                }
               
                done()
          
    })

    it('should delete client & return 200', async done =>
    {
       const data = await request(server)
            .delete('/client/TestClient')
            .expect('Content-Type', /json/)
            .expect(200)
         
                try
                {
                    expect(data.body).toMatchObject({
                        "clientcode": "TestClient",
                        "street": "testStreet",
                        "city": "testCity",
                        "pob": "TestPob",
                        "zipcode": "TestZipcode",
                        "pobzipcode": "TestPobZipCode",
                        "longitude": "123",
                        "latitude": "123",
                        "country": "TestCountry",
                        "clientname": "TestclientName",
                    });
                } catch (err)
                {
                    err.message = `${ err.message }`;
                    throw err;
                }
                done()
    
    })
    
})

