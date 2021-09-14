$(document).ready(function(){
   const pk = "9173dd3e3bf25f5"
   const sk= "bff1204a5e255a2"
   const key = btoa(sk + ":" + pk)
   const baseUrl = window.location.origin
   fetch(baseUrl + '/api/method/frappe.auth.get_logged_user', {
      credentials: "include",
      headers: {
         'Authorization': 'token ' + pk +":"+ sk
      }
   })
   .then(r => r.json())
   .then(r => {
      
      console.log(r);
      if(r.message === "Administrator"){
         fetch(baseUrl + "/api/resource/Theme/Theme",{
            method: "GET",
            credentials: "include",
            headers: {
               "Accept": "application/json",
               "Content-Type": "application/json",
               'Authorization': 'token ' + pk +":"+ sk
           }
         })
         .then( res => res.json())
         .then( res => {
            console.log(res)
         })
      }
   })
});