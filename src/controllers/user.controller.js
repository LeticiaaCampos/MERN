const create = (req, res)=>{
    const {name, username,email, password} = req.body;
    if(!name || !username || !email || !password){
        res.status(400).json("submit all field for registration")
    }
    res.status(201).send({
        mensagen: "objeto",
        user:{
            name,
            username,
            email,
            password
        }
    })
}

module.exports = {create}