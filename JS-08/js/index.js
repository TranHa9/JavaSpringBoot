// Danh sách các sản phẩm có trong giỏ hàng
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3

for (let i = 0; i < products.length; i++) {
    console.log(`${products[i].name} - ${products[i].price} - ${products[i].brand} - ${products[i].count}`);
}


// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count
let total = 0;
for (let i = 0; i < products.length; i++) {
    total += products[i].price * products[i].count;
}
console.log("Tổng tiền tấn cả sản phẩm", total)

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
let appleProducts = products.filter(function (item) {
    return item.brand === "Apple";
});
console.log(appleProducts);

// 4. Tìm các sản phẩm có giá > 20000000
let product = products.filter(function (item) {
    return item.price > 20000000;
});
console.log(product);

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
let productPro = products.filter(function (item) {
    return item.name.toLowerCase().includes("pro");
});
console.log(productPro);

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
let newProduct = {
    name: "Iphon 16 pro",
    price: 28000000,
    brand: "Apple",
    count: 1
};

products.push(newProduct);
console.log(products);

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
for (let i = 0; i < products.length; i++) {
    if (products[i].brand === "Samsung") {
        delete products[i];
    }
}
console.log(products)

// 8. Sắp xếp giỏ hàng theo price tăng dần
const sortProductPrice = products.sort(function (a, b) {
    return a.price - b.price
})
console.log("Sắp xếp giỏ hàng theo price tăng dần:", sortProductPrice)

// 9. Sắp xếp giỏ hàng theo count giảm dần
const sortProductCount = products.sort(function (a, b) {
    return b.count - a.count
})
console.log("Sắp xếp giỏ hàng theo count giảm dần:", sortProductCount)

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
let result = [];
while (result.length < 2) {
    result = Math.floor(Math.random() * products.length - 1)

}
console.log(products.length)