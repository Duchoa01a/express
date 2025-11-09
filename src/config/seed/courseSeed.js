// seed.js
import mongoose from "mongoose";
import Course from "./models/course.js"; // Đảm bảo đường dẫn đúng

const dbURL = "mongodb://localhost:27017/shop"; // PHẢI GIỐNG TRÊN

async function seed() {
    try {
        await mongoose.connect(dbURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Kết nối DB thành công!");

        // XÓA DỮ LIỆU CŨ (nếu cần)
        await Course.deleteMany({});
        console.log("Xóa dữ liệu cũ...");

        // CHÈN DỮ LIỆU MỚI → LÚC NÀY MỚI TẠO COLLECTION
        await Course.create({
            name: "Node.js cơ bản",
            description: "Học Node.js từ A-Z",
            image: "https://example.com/node.jpg"
        });
        console.log("ĐÃ TẠO COURSE THÀNH CÔNG!");

        process.exit();
    } catch (error) {
        console.error("Lỗi:", error.message);
        process.exit(1);
    }
}

seed();