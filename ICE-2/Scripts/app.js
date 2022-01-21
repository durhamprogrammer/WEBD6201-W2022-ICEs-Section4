// IIFE -- Immediately Invoked Function Expression
// AKA Anonymous Self-Executing Function
(function()
{

    function DisplayHomePage()
    {
        let AboutUsButton = document.getElementById("AboutUsButton");
        
        AboutUsButton.addEventListener("click", function()
        {
            // redirect to about page
            location.href = "about.html";
        });

        // Step 1 get a reference to an entry point(s) (insertion point / deletion point)
        let MainContent = document.getElementsByTagName("main")[0];
        let DocumentBody = document.body;
        
        // Step 2 create an element(s) to insert
        let MainParagraph = document.createElement("p");
        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is the Article Paragraph</p>`;

        // Step 3 configure new element
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        MainParagraph.textContent = "This is the Main Paragraph";
        Article.setAttribute("class", "container");

        // Step 4 add / insert new element
        MainContent.appendChild(MainParagraph);
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);

        


    }

    // named function
    function Start()
    {
        console.log("App Started!!");

        switch(document.title)
        {
            case "Home":
                DisplayHomePage();
                break;
        }
    }

    window.addEventListener("load", Start);

})();