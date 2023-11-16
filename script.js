const product = [
    {
        id: 0,
        image: 'assets/backpack.jpg',
        title: 'Backpack',
        price: 120,
    },
    {
        id: 1,
        image: 'assets/kacamata.jpg',
        title: 'Kacamata',
        price: 60,
    },
    {
        id: 2,
        image: 'assets/ipone.jpg',
        title: 'Iphong 8',
        price: 999,
    },
    {
        id: 3,
        image: 'assets/jam-tangan.jpg',
        title: 'jam tangan',
        price: 100,
    },
    {
        id: 3,
        image: 'assets/jam-tangan.jpg',
        title: 'jam tangan',
        price: 100,
    },
    {
        id: 3,
        image: 'assets/jam-tangan.jpg',
        title: 'jam tangan',
        price: 100,
    },
    {
        id: 3,
        image: 'assets/jam-tangan.jpg',
        title: 'jam tangan',
        price: 100,
    }
];
const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>Rp ${price}.000</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Tambah keranjang</button>" +
        `</div>
        </div>`
    )
}).join('')

var cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}
function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Keranjang anda kosong";
        document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML = "Rp " + total + ".000";
            return (
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>Rp ${price}.000</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }


}