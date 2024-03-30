class HttpController {
    index(req, res) {
        res.send('Hello, Sparta! This is the spartan home page.');
    }

    about(req, res){
    	res.send("And this is the about page.")
    }

    exit(req, res){
    	res.send('And this is the exit')
    }
}

module.exports = new HttpController();