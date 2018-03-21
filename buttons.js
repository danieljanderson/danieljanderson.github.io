$(document).ready(function(){
  $("#linkedin_click").click(function(e){
    var win = window.open('https://www.linkedin.com/in/danieljamesanderson','blank')
      if (win){
        win.focus()
        }
      else{
        alert('Please allow popups for this website')
      }
    
  })
  $("#github_click").click(function(e){
    var win = window.open('https://github.com/danieljanderson','blank')
      if (win){
        win.focus()
        }
      else{
        alert('Please allow popups for this website')
      }

  })
})
