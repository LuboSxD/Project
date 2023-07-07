var productImg = document.getElementById("ProductImg");
            var smallImg = document.getElementsByClassName("small-img");

            smallImg[0].onclick = function(){
                productImg.src = smallImg[0].src;
            }
            smallImg[1].onclick = function(){
                productImg.src = smallImg[1].src;
            }
            smallImg[2].onclick = function(){
                productImg.src = smallImg[2].src;
            }

    function getInfo() {
	var name = document.getElementById("username").value
	var nameText = document.createTextNode(name)
	var title = document.createElement("h3")
    title.appendChild(nameText)
	
	var reviewIn = document.getElementById("review").value
	var reviewText = document.createTextNode(reviewIn)
	var paragraph = document.createElement("p")
	paragraph.appendChild(reviewText)
	var newItems = document.createElement("li")
	newItems.className = "createdList"
	newItems.appendChild(title)
	newItems.appendChild(paragraph)

        document.getElementById("newList").appendChild(newItems);
        document.getElementById("todoForm").reset();
    }
    
    function getName() {
        var name = document.getElementById("name").value
        alert(name + ", благодарим за поръчката!");
}