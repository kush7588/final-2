document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".interactive-area").addEventListener("click", function() {
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    });

    const mensCollection = document.querySelector(".mens-collection");
    const womensCollection = document.querySelector(".womens-collection");

    for (let i = 1; i <= 15; i++) {
        mensCollection.innerHTML += `
            <div class="product">
                <img src="images/tshirt ${i}.jpg" alt="T-Shirt ${i}">
                <p>Color-Changing T-Shirt ${i}</p>
                <p>₹${250 + i * 10}</p>
                <button>Add to Cart</button>
            </div>`;
    }

    for (let i = 1; i <= 2; i++) {
        womensCollection.innerHTML += `
            <div class="product">
                <img src="images/wtshirt ${i}.jpg" alt="Women T-Shirt ${i}">
                <p>Color-Changing Women T-Shirt ${i}</p>
                <p>₹${250 + i * 10}</p>
                <button>Add to Cart</button>
            </div>`;
    }
});
