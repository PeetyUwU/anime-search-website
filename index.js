const http = require("http")
const fs = require("fs")
const url = require("url")
const express = require("express")
const app = express()
const path = require("path")
const crypto = require("crypto")
const requestIp = require("request-ip")
const animeData = require("./amineData.js").zpracovaniPozadavku

console.log("Server is ready")

function zpracovaniPozadavku(req, res) {
    console.log(req.url)

    if (req.method === "GET") {
        if (req.url == "/") {
            res.writeHead(200, {
                "Content-type": "text/html"
            })
            let s = fs.readFileSync("index.html").toString();
            res.end(s)
        } else if (req.url.endsWith("css")) {
            res.writeHead(200, {
                "Content-type": "text/css"
            })
            let s = fs.readFileSync("./css" + req.url).toString();
            res.end(s)
        } else if (req.url == "/script.js") {
            res.writeHead(200, {
                'Content-type': 'application/json'
            });
            s = fs.readFileSync("./js/script.js").toString();
            res.end(s);
        } else if (req.url == "/background.jpg") {
            res.writeHead(200, {
                'Content-type': 'icon/jpg'
            });
            s = fs.readFileSync("background.jpg")
            res.end(s);
        } else if (req.url == "/another.png") {
            res.writeHead(200, {
                'Content-type': 'icon/jpg'
            });
            s = fs.readFileSync("another_background.png")
            res.end(s);
        } else if (req.url == "/favicon.ico") {
            res.writeHead(200, {
                'Content-type': 'icon/jpg'
            });
            s = fs.readFileSync("background.jpg")
            res.end(s);
        } else if (req.url == "/another/Mei_Misaki.img") {
            res.writeHead(200, {
                'Content-type': 'icon/jpg'
            });
            s = fs.readFileSync("./another_img/Mei_Misaki.jpg");
            res.end(s);
        } else if (req.url == "/another/Kouichi_Sakakibara.img") {
            res.writeHead(200, {
                'Content-type': 'icon/jpg'
            });
            s = fs.readFileSync("./another_img/Kouichi_Sakakibara.jpg");
            res.end(s);
        } else if (req.url == "/another/Izumi_Akazawa.img") {
            res.writeHead(200, {
                'Content-type': 'icon/jpg'
            });
            s = fs.readFileSync("./another_img/Izumi_Akazawa.jpeg");
            res.end(s);
        }else if (req.url == "/another/Misaki_Fujioka.img") {
            res.writeHead(200, {
                'Content-type': 'icon/jpg'
            });
            s = fs.readFileSync("./another_img/Misaki_Fujioka.jpg");
            res.end(s);
        }else if (req.url == "/another/Naoya_Teshigawara.img") {
            res.writeHead(200, {
                'Content-type': 'icon/jpg'
            });
            s = fs.readFileSync("./another_img/Naoya_Teshigawara.webp");
            res.end(s);
        }else if (req.url == "/another/Yukari_Sakuragi.img") {
            res.writeHead(200, {
                'Content-type': 'icon/jpg'
            });
            s = fs.readFileSync("./another_img/Yukari_Sakuragi.jpg");
            res.end(s);
        }else if (req.url == "/another/Tomohiko_Kazami.img") {
            res.writeHead(200, {
                'Content-type': 'icon/jpg'
            });
            s = fs.readFileSync("./another_img/Tomohiko_Kazami.jpg");
            res.end(s);
        }else if (req.url == "/another/Chibiki_Tatsuji.img") {
            res.writeHead(200, {
                'Content-type': 'icon/jpg'
            });
            s = fs.readFileSync("./another_img/Chibiki_Tatsuji.jpg");
            res.end(s);
        }else if (req.url == "/another/Sanae_Mizuno.img") {
            res.writeHead(200, {
                'Content-type': 'icon/jpg'
            });
            s = fs.readFileSync("./another_img/Sanae_Mizuno.webp");
            res.end(s);
        }else if (req.url == "/another/Katsumi_Matsunaga.img") {
            res.writeHead(200, {
                'Content-type': 'icon/jpg'
            });
            s = fs.readFileSync("./another_img/Katsumi_Matsunaga.jpg");
            res.end(s);
        }else {
            res.writeHead(404)
        }
    }
    if (req.method === "POST") {
        let data = "";
        req.on('data', function (kusDat) {
            data += kusDat;
        })
        req.on('end', function () {
            if (data) {
                let par = JSON.parse(data);
                console.log(par);
                console.log(data);
                if (req.url.startsWith("/amineData")) {
                    animeData(req, par, res)
                } else {
                    res.writeHead(404)
                }
            }
        })
    } else {
        res.writeHead(404)
    }
}
let srv = http.createServer(zpracovaniPozadavku)
srv.listen(8080)