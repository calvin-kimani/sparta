require('dotenv').config()

const App = require('./core/app');

const PORT = process.env.PORT || 5000;
App.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});