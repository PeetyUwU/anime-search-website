const http = require("http")
const fs = require("fs")
const url = require("url")
const express = require("express")
const app = express()
const favicon = require("serve-favicon")
const path = require("path")
const crypto = require("crypto")
const requestIp = require("request-ip")


exports.zpracovaniPozadavku = async function (req, par, res) {
    const ANIME_CHARACTERS = require("./characters.json")
   
    res.writeHead(200, {
    'Content-type': 'application/json'
    });
    let o = {};
    o.stav = 'ok';
    o.characters = ANIME_CHARACTERS;
    res.end(JSON.stringify(o));
    return
}