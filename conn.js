

document.getElementById("b1").addEventListener("click", add); // eventlistener for Add button
document.getElementById("b2").addEventListener("click", deleteItem); // eventlistener for Delete button


function deleteItem()   // function delete checkbox
{ 
    var ul = document.getElementById('el1');
    var li = ul.children;

    for (var i=0; i < li.length; i++) {  // for loop 
        
        while(li[i] && li[i].children[0].checked) // while loop to remove child
        {    
            ul.removeChild(li[i]);
        }
    }
}

function add() // function for add element 
{ 
    var listItem = document.createElement("li");
    var checkbox = document.createElement("input")
    var task = document.getElementById('textinput').value;
    
    
    checkbox.type = "checkbox"; // checkbox
    listItem.appendChild(checkbox);
    var itemText = document.createTextNode(task);
    listItem.appendChild(itemText);
    document.getElementById('el1').appendChild(listItem);
}



