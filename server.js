const express = require('express');
const app = express();
const port = 8000;
var faker = require('faker');

class User{
    constructor(){
        this.id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company{
    constructor(){
        this.id = faker.random.number();
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(), 
            city: faker.address.city(), 
            state: faker.address.stateAbbr(), 
            zipCode: faker.address.zipCodeByState(), 
            country: faker.address.country()
        };
    }
}

app.get('/api/users/new', (req, res) => {
    const newUser = new User;
    res.json({
        "id": newUser.id,
        "name": `${newUser.firstName} ${newUser.lastName}`,
        "phone_number": newUser.phoneNumber,
        "email": newUser.email,
        "password": newUser.password
    })
})

app.get('/api/companies/new', (req, res) => {
    const newCompany = new Company;
    res.json({
        "id": newCompany.id,
        "name": newCompany.name,
        "address": `${newCompany.address.street}, ${newCompany.address.city}, ${newCompany.address.state}, ${newCompany.address.zipCode}, ${newCompany.address.country}`
        
    })
})

app.get('/api/user/company', (req, res) => {
    const newUser = new User;
    const newCompany = new Company;
    res.json({
        user: newUser,
        company: newCompany
    })
} )

app.listen(port, () => console.log(`up and running on ${port}!!!!`));