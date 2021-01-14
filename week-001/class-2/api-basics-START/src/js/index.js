
    /* 
        grab data HTTP GET Request for JSON

        Modal
        https://reqres.in/api/users

        View
        Template literal string of markup
        convert to dom
        seed template
        wrap data in container
        append container to the dom


        const template = `<figure>

        <img src="${​​user.avatar}​​" alt="" width="140" height="140" loading="lazy">

        <figcaption>

        <ul>

        <li>${​​user.first_name}​​ ${​​user.last_name}​​</li>

        <li>${​​user.email}​​</li>

        </ul>

        </figcaption>

        </figure>`

    */
   import {httpGetRequest} from './util/fetch-data.js'
   import employeeView from './views/employee.js'
   import createElementFromTemplate from './util/createElementFromTemplate.js'
   import markupContainer from './util/addMarkupToPage.js'

   let store = []
   let employees;
   window.addEventListener('load',function(e)
   {
       httpGetRequest("https://reqres.in/api/users").then(result =>{
           //passing the data and getting back an array of template literals
           
           const templates = employeeView(result.data);
           

           const markup = createElementFromTemplate(templates)

            employees = markupContainer('aside', 'display', markup)

            

           
       })//end of httpGetRequest
   })


