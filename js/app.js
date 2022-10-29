let cards = document.querySelector(".box");

fetch('https://fakestoreapi.com/products')
.then(response => response.json())
.then(data => {
    // create Element
    data.forEach(element => {
        
        let elBox = document.createElement("div");
        let elImg = document.createElement("img");
        let newTextEl = document.createElement("h2");
        let comentEl = document.createElement("p");
        let elName = document.createElement("p")
        let elBtn = document.createElement("button");
        
        // coding
        elImg.src = element.image;
        newTextEl.innerHTML = "Price: " + element.price;
        comentEl.innerHTML = "Discount: " + element.description.split("").splice(1, 70).join("") + "...";
        elName.innerHTML = "name: " + element.title;
        cards.appendChild(elBox);
        elBox.innerHTML = `<button class="site__delate-button" data-target-id="${element.id}"></button>`
        elBox.appendChild(elImg);
        elBox.appendChild(newTextEl);
        elBox.appendChild(comentEl);
        elBox.appendChild(elName);
        // class add + 
        elImg.className = "site__reclam";
        elBox.className = "site__cards-box";
        elName.className = "site__card-text";
        comentEl.className = "new__text"
        console.log(element);

        // Delete
        elBtn.addEventListener("click", (evt) => {
            if(confirm(evt.target.hasAttribute(data-target-id))){
                let elDelId = evt.target.dataset.targetId
                fetch(`https://fakestoreapi.com/products${elDelId}`) , {
                    method: "delete"

                }
                .then(del => console.log(del.json()))
            }
            
        })
        
    });
})