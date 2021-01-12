const {Router} = require('express');
const router = Router();

//https://api.mercadolibre.com/sites/MLA/search?q=
router.get('/', async(req, res) => {
    /* const api_url = 'https://api.mercadolibre.com/sites/MLA/search?q=:iphone';
    const fetch_resp = await fetch(api_url);
    const json = await fetch_resp.json;
    console.log(json);     */
    console.log('Se requiere el usuario');
    res.json({
        ok: true
    })
})


module.exports = router;