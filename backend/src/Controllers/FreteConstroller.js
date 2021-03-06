const express = require('express')

module.exports = {
    store(req, res) {
        let { c, l, a, valorMercadoria, tipo } = req.body;
        c = parseFloat(c);
        l = parseFloat(l);
        a = parseFloat(a);
        valorMercadoria = parseFloat(valorMercadoria);

        if ((c + l + a) <= 200) {

            const fbase = (c * l * a) / 6000;
            const tgris = valorMercadoria * 0.003;
            multiplicador = 0;

            if (tipo == "pac") {
                multiplicador = 1;
            }
            else if (tipo == "sedex") {
                multiplicador = 10;
            }
            else if (tipo == "sedex10") {
                multiplicador = 20;
            }
            else if (tipo == "sedex12") {
                multiplicador = 30;
            }
            else {
                return res.status(400).json({
                    message: "Tipo de postagem inválida"
                })
            }
            const frete = parseFloat((fbase * multiplicador) + tgris).toFixed(2)
            return res.status(200).json({
                frete
            })
        }
        else {
            return res.status(400).json({
                message: "Dimenções do produto não suportadas pelo sistema dos correios."
            })
        }

    }
}