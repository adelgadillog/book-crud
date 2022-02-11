exports.getData = (req,res) => {
    res.send({data: 'Hello desde el get'})
}

exports.postData = (req,res) => {
    res.send({data: 'Hello desde el post'})
}