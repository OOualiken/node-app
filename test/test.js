import test from 'ava';
import fetch from 'isomorphic-fetch'
import { setupTests } from 'ava-nock'
var nock = require('nock')
const app =  require("../routes/index");
var axios = require('axios');




test('form', async t => {
    const res = await axios.get('https://evening-eyrie-83553.herokuapp.com');
    let test = res.data.toString().includes('<form');
    t.is(test, true);
});


test('using fetch to get JSON', t => {
    return fetch(
        'https://geocode.xyz/paris?json=1&auth=169030091009524819468x1966'
    )
        .then(response => response.json())

        .then(data => {
            t.is(data.latt, '48.85994');
            t.is(data.standard.city, 'Paris');

        })
});