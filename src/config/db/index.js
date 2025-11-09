// db.js
import mongoose from "mongoose";

async function connect() {
    try {
        // Thay chuỗi kết nối của bạn vào đây
        const dbURL = "mongodb://localhost:27017/express"; // Local
        // Hoặc dùng Atlas:
        // const dbURL = "mongodb+srv://admin:password@cluster0.xxxx.mongodb.net/shop";

        await mongoose.connect(dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Kết nối MongoDB thành công!");
    } catch (error) {
        console.error("Lỗi kết nối MongoDB:", error.message);
        process.exit(1); // Thoát nếu lỗi
    }
}

export default connect;