const router = require('express').Router();
const knex = require('knex');

const config = require('../knexfile.js').development;


const db = knex(config);

router.get('/', (req,res) => {
    db("cars").select()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({err:'Something when wrong'});
    })
})
router.get('/:id', (req,res) =>{
    db("cars").where({id:req.params.id}).select()
    .then(ret => {
        res.status(200).json(ret);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({err:'Problem getting car from database'});
    })
});
router.post('/', (req,res) => {

    const payload = {
        model:req.body.model,
        vin:req.body.vin,
        mileage:req.body.mileage,
    };
    db("cars").insert(payload).then(ret => {
        console.log(ret);
        db("cars").where({ id:ret[0]}).select().then(response => {
            res.status(201).json(response);
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({err:"problem adding car to database"});
    })

});

module.exports = router;