"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.get('/', function (req, res) {
    res.json({
        ok: true,
    });
});
router.post('/mensajes', function (req, res) {
    var cuerpo = req.body.cuerpo;
    var de = req.body.de;
    res.json({
        ok: true,
        cuerpo: cuerpo,
        de: de
    });
});
router.post('/mensajes/:id', function (req, res) {
    var id = req.params.id;
    var cuerpo = req.body.cuerpo;
    var de = req.body.de;
    res.json({
        ok: true,
        id: id,
        cuerpo: cuerpo,
        de: de
    });
});
exports.default = router;
