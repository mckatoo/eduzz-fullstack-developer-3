import app from "./app";
import db from "./database";

const PORT = process.env.PORT || 8000

const server = app.listen(PORT, () => {
    console.log(`listem on ${PORT}!`);
});

process.on('SIGTERM', () => {
    db.disconnect().then(() => {
        console.log('database connection closed!')
    });
    server.close(() => {
        console.log(`server on ${PORT} closed!`);
    });
})