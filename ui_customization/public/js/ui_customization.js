$(document).ready(function(){
   const username = "8e5760f12a40421"
   const password = "3f6dffa017faa6e"
   const key = btoa(username + ":" + password)
   console.log(key)
   fetch('http://localhost:8080/api/resource/Theme',{
      headers: {
         'Authorization': 'Basic ' + key
     }
   })
   .then(res => res.json())
   .then( res =>{
      const Url2 = `http://localhost:8080/api/resource/Theme/${res.data[0].name}`
      fetch(Url2, {
         headers: {
            'Authorization': 'Basic ' + key
        }
      })
      .then(res => res.json())
      .then( res => {

         if(window.location.href === window.location.origin+ "/login#login"){
            const image = window.location.origin + res.data.navbar_logo
            $('.page-card-head').html(`<img class="pccr-logo" src="${image}"/>`)
            $('.for-login .page-card-head .pccr-logo').attr('style', 'max-height: 150px !important;')
         }else if(window.location.href === window.location.origin + "/#login"){
            const image = window.location.origin + res.data.login_image
            $('.for-login').css({"margin": "0px"})
            $('#page-login .page-content-wrapper .container').css({
               "margin": "0px"
            })
            $('main.container.my-4').removeClass('container my-4').addClass("new-container")
            // add a banner
            $('.for-login').html(`
               <img class="school-banner w-100" src="${image}">
               `)
         }else{
            const logo = window.location.origin + res.data.navbar_logo
            $('.navbar-home').html(`<img class="C_logo"  src="${logo}"/>`)
            $('#page-Workspaces').css({
               "background-color": `${res.data.background_color}`
            })
            $('.page-head-content, .page-head.flex').css({
               "background-color": "red",
              
            })
            // Secondary button
            $('.btn-secondary').css({
               "background-color": "blue",
               "color": "white"
            })
            $('header.navbar').css({
               "background-color": `${res.data.navbar_background_color}`
            })
            $('.standard-sidebar-section a.desk-sidebar-item').css({
               "color": `${res.data.sidebar_text_color}`
            })
            $('[data-page-route=Workspaces] .layout-main .layout-side-section').attr('style', `background-color: ${res.data.sidebar_background} !important`);
         }
      })
   })
   
  


   
  

});