// IIFE -- Immediately Invoked Function Expression
// AKA Anonymous Self-Executing Function
(function()
{

    function DisplayAboutPage()
    {
        console.log("About Us Page");
    }

    function DisplayProductsPage()
    {
        console.log("Products Page");
    }

    function DisplayServicesPage()
    {
        console.log("Services Page");
    }


    function DisplayHomePage()
    {
        console.log("Home Page");

        // old way
        //let AboutUsButton = document.getElementById("AboutUsButton");
        // AboutUsButton.addEventListener("click", function()
        // {
        //     // redirect to about page
        //     location.href = "about.html";
        // });

        // 1) Fattest Memory footprint - we need the jquery library
        // jQuery way - returns all elements that contain an id of AboutUsButton - attach the "click" event to each of them
        $("#AboutUsButton").on("click", function()
        {
            location.href = "about.html";
        });

        // 2) Second Fatest Memory footprint - we're getting stuff we don't need
        // JavaScript way - returns all elements that contain an id of AboutUsButton - loops through all elements
        // document.querySelectorAll("#AboutUsButton").forEach(function(element) 
        // {
        //     // attach an "click" event to each element in the collection
        //     element.addEventListener("click", function()
        //     {
        //         location.href = "about.html";
        //     })
        // });

        // 3) Pretty Lean
        // document.querySelector("#AboutUsButton").addEventListener("click", function(){
        //     location.href = "about.html";
        // });

        // 4) Leanest - Native JavaScript - only return a reference to the object required to add the "click" event to
        // document.getElementById("AboutUsButton").addEventListener("click", function(){
        //     location.href = "about.html";
        // });

        
        
        // Step 1 get a reference to an entry point(s) (insertion point / deletion point)
        //let MainContent = document.getElementsByTagName("main")[0];
        //let DocumentBody = document.body;
        
        // Step 2 create an element(s) to insert
        //let MainParagraph = document.createElement("p");
        //let Article = document.createElement("article");
        //let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is the Article Paragraph</p>`;

        // Step 3 configure new element
        //MainParagraph.setAttribute("id", "MainParagraph");
        //MainParagraph.setAttribute("class", "mt-3");

        //let FirstParagraphString = "This is";
        // example of Template String
        //let SecondParagraphString = `${FirstParagraphString} the Main Paragraph`;

        //MainParagraph.textContent = SecondParagraphString;
        //Article.setAttribute("class", "container");

        // Step 4 add / insert new element
        //MainContent.appendChild(MainParagraph);
        $("main").append(`<p id="MainParagraph" class="mt-3">This is the Main Paragraph</p>`);
        //Article.innerHTML = ArticleParagraph;
        $("body").append(`<article class="container">
        <p id="ArticleParagraph" class="mt-3">This is the Article Paragraph</p>
        </article>`);
    }

    function DisplayContactPage()
    {
        console.log("Contact Us Page");

        let sendButton = document.getElementById("sendButton");
        let subscribeCheckbox = document.getElementById("subscribeCheckbox");

        sendButton.addEventListener("click", function(event)
        {
            //event.preventDefault();

            if(subscribeCheckbox.checked)
            {
                let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
                if(contact.serialize())
                {
                    let key = contact.FullName.substring(0, 1) + Date.now();

                    localStorage.setItem(key, contact.serialize());
                }
            }
        });
    }

    function DisplayContactListPage()
    {
        console.log("Contact-List Page");

        if(localStorage.length > 0) // check if localStorage has something in it 
        {
            let contactList = document.getElementById("contactList");

            let data = "";

            let keys = Object.keys(localStorage);

            let index = 1;

            //for every key in the keys collection loop
            for(const key of keys)
            {
                let contactData = localStorage.getItem(key); // retrieve contact data from localStorage

                let contact = new Contact(); // create an empty Contact Object
                contact.deserialize(contactData);

                data += `<tr>
                <th scope="row" class="text-center">${index}</th>
                <td>${contact.FullName}</td>
                <td>${contact.ContactNumber}</td>
                <td>${contact.EmailAddress}</td>
                <td></td>
                <td></td>
                </tr>
                `;
                
                index++;
            }

            contactList.innerHTML = data;
        }
    }

    // named function
    function Start()
    {
        console.log("App Started!!");

        switch (document.title) 
        {
          case "Home":
            DisplayHomePage();
            break;
          case "Contact Us":
            DisplayContactPage();
            break;
          case "Contact-List":
            DisplayContactListPage();
            break;
          case "About Us":
            DisplayAboutPage();
            break;
          case "Our Products":
            DisplayProductsPage();
            break;
          case "Our Services":
            DisplayServicesPage();
            break;
        }
    }

    window.addEventListener("load", Start);

})();